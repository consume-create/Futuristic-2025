<template>
  <header id="header">
    <nav class="gutter">
      <NuxtLink class="logo" to="/"><strong>Futuristic Films</strong></NuxtLink>
      <ul>
        <li><NuxtLink to="/creatives"><strong>Creatives</strong></NuxtLink></li>
        <li><NuxtLink to="/about"><strong>About</strong></NuxtLink></li>
        <li><NuxtLink to="/services"><strong>Services</strong></NuxtLink></li>
        <li><NuxtLink to="/the-latest"><strong>The Latest</strong></NuxtLink></li>
        <li><NuxtLink to="/contact"><strong>Contact</strong></NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang='scss'>
header#header {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid $black;

  .gutter {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-size: 24px;
    }

    ul {
      display: inline-flex;
      align-items: center;
      justify-content: space-between;

      li {
        margin-left: 2em;

        a {
          &.router-link-active {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

</style>
