<script context="module">
  export async function load({ page }) {
    const { slug } = page.params;
    return {
			status: 301, // can return 308 instead if that's a better match
			redirect: `/${slug}` };
  }
</script>


localhost:3030/2021/06/25/folding-camera


http://localhost:3030/folding-camera