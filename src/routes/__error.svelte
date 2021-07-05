<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script>
  export let title;
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<h1>{title}</h1>
