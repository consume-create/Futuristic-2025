import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';
// import { structure } from './src/structure';
import { presentationTool, defineDocuments, defineLocations, } from 'sanity/presentation';

import { media } from 'sanity-plugin-media';
import { visionTool } from '@sanity/vision';

// Singletons...
const singletonTypes = new Set(schemaTypes.reduce((filtered, schemaType) => {
  if (schemaType.singleton) {
    filtered.push(schemaType.name);
  }
  return filtered;
}, []));

// Define the home location for the presentation tool
// const homeLocation = {
//   title: 'Home (Location)',
//   href: '/'
// };

// resolveUrl() is a convenience function that resolves the URL
// path for different document types and used in the presentation tool.
// function resolveUrl(documentType, slug) {
//   switch (documentType) {
//     case 'post':
//       return slug ? `/posts/${slug}` : undefined;
//     case 'page':
//       return slug ? `/${slug}` : undefined;
//     default:
//       console.warn('Invalid document type:', documentType);
//       return undefined;
//   }
// }

export default defineConfig({
  name: 'default',
  title: 'Futuristic Films',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  plugins: [
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN,
        preview: '/',
        previewMode: {
          enable: '/preview/enable',
          disable: '/preview/disable'
        }
      }
    }),
    // presentationTool({
    //   previewUrl: {
    //     origin: sanity_preview_url,
    //     previewMode: {
    //       enable: '/preview/enable',
    //       disable: '/preview/disable'
    //     }
    //   },
    //   resolve: {
    //     mainDocuments: defineDocuments([
    //       {
    //         route: '/:slug',
    //         filter: `_type == "page" && slug.current == $slug || _id == $slug`
    //       },
    //       {
    //         route: '/posts/:slug',
    //         filter: `_type == "post" && slug.current == $slug || _id == $slug`
    //       }
    //     ]),
    //     locations: {
    //       settings: defineLocations({
    //         locations: [homeLocation],
    //         message: 'This document is used on all pages',
    //         tone: 'positive'
    //       }),
    //       page: defineLocations({
    //         select: {
    //           name: 'name',
    //           slug: 'slug.current'
    //         },
    //         resolve: (doc) => ({
    //           locations: [
    //             {
    //               title: doc?.name || 'Untitled',
    //               href: resolveUrl('page', doc?.slug)
    //             }
    //           ]
    //         })
    //       }),
    //       post: defineLocations({
    //         select: {
    //           title: 'title',
    //           slug: 'slug.current'
    //         },
    //         resolve: (doc) => ({
    //           locations: [
    //             {
    //               title: doc?.title || 'Untitled',
    //               href: resolveUrl('post', doc?.slug)
    //             },
    //             {
    //               title: 'Home',
    //               href: '/'
    //             },
    //           ].filter(Boolean)
    //         })
    //       })
    //     }
    //   }
    // }),
    // structureTool({
    //   structure
    // }),
    structureTool(),
    media(),
    visionTool()
  ],
  schema: {
    types: schemaTypes,
    // Filter out types from the global “New document” menu options
    templates: (templates) => {
      return templates.filter(({ schemaType }) => ![...singletonTypes].includes(schemaType))
    }
  }
});
