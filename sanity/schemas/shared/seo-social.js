import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'seoSocial',
  title: 'SEO / Social Sharing',
  type: 'object',
  description: 'Preview at: https://www.opengraph.xyz',
  fields: [
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'For search engines and social media sharing previews (Max 160 characters)',
      validation: [
        Rule => Rule.max(160).error('Maximum of 160 characters')
      ]
    }),
    defineField({
      name: 'image',
      title: 'Social Sharing Image',
      type: 'image',
      description: 'For search engines and social media sharing previews (Best at 2400 × 1260)',
    })
  ]
});
