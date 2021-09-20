<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/env';

  export let imageData;

  onMount(() => {
    if (browser) {
      document.lazyloadInstance.update();
    }
  });

  const { alt, width, height, src, sources, placeholder } = imageData;
  const sizes = '(max-width: 672px) calc(100vw - 32px), 672px';
</script>

<picture>
  {#each sources as { srcset, type }}
    <source data-sizes={sizes} data-srcset={srcset} {type} {width} {height} />
  {/each}
  <img
    class="lazy"
    {alt}
    loading="eager"
    decoding="async"
    data-src={src}
    src={placeholder}
    {width}
    {height}
  />
</picture>

<style lang="scss">
  img {
    border-radius: $spacing-3;
    background-size: cover;
    background-color: $color-theme-4;
    margin-bottom: $spacing-12;
  }
</style>
