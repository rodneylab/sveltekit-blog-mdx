<script>
  import ImgixClient from '@imgix/js-core';
  import website from '$lib/config/website';

  const { imgixDomain, imgixSecureToken } = website;

  export let image;
  export let alt;

  const client = new ImgixClient({
    domain: imgixDomain,
    secureURLToken: imgixSecureToken,
  });

  const src = client.buildURL(image, { w: 672, h: 448 });
  const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
  const srcset = client.buildSrcSet(image, { auto: 'format' }, { maxWidth: 1344 });
</script>

<picture>
  <source {sizes} {srcset} />
  <img loading="eager" decoding="async" {src} {alt} width="672" height="448" />
</picture>

<style lang="scss">
  img::before {
    content: '';
    display: inline-block;
    width: 1px;
    height: 0;
    padding-bottom: 66.66%; // set aspect ratio to eliminate cumulative layout shift
  }
  img {
    border-radius: $spacing-3;
    background-size: cover;
    background-color: $color-theme-4;
    max-width: 100%;
    height: auto;
  }
</style>
