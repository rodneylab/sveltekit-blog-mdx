<script>
  import lazyload from 'vanilla-lazyload';
  import { browser } from '$app/env';

  if (browser && !document.lazyloadInstance) {
    document.lazyloadInstance = new lazyload();
  }
</script>

<slot />
