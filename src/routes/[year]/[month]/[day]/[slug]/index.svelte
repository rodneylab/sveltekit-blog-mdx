<script context="module">
  /* this file will redirect browser from example.com/2021/06/25/folding-camera to
   * example.com/folding-camera
   */
  export async function load({ page }) {
    const { slug } = page.params;
    return {
			status: 301, // can return 308 instead if that's a better match
			redirect: `/${slug}` };
  }
</script>
