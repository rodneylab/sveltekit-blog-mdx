<script>
  import website from '$lib/config/website';
  const { themeColor } = website;
</script>

<svelte:head>
  <meta name="theme-color" content={themeColor} />
  <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
</svelte:head>
