<script>
  import ImgixClient from '@imgix/js-core';
  import website from '$lib/config/website';

  /* code here shows how to set up Imgix to generate responsive, NextGen images you need to add your
   * Imgix credentials to your .env file.  If these aren't defined we use static images in the
   * /static/assets/images folder, these aren't responsive or generated in NextGen formats. Also edit
   * $lib/BlogPost.svelte if you change image related stuff here.
   */

  const { imgixDomain, imgixSecureToken } = website;

  export let image;
  export let alt;

  const client =
    imgixDomain && imgixSecureToken
      ? new ImgixClient({
          domain: imgixDomain,
          secureURLToken: imgixSecureToken,
        })
      : null;

  const src = client ? client.buildURL(image, { w: 672, h: 448 }) : `/assets/images/${image}`;
  const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
  const srcset = client
    ? client.buildSrcSet(image, { auto: 'format' }, { maxWidth: 1344 })
    : `/assets/images/${image} 672w`;
</script>

<picture>
  <source {sizes} {srcset} />
  <img class="lazy" {alt} loading="eager" decoding="async" {src} width="672" height="448" />
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
