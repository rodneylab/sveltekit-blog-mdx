<script context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export const prerender = true;
  export async function load({ page, fetch, context }) {
    const { slug } = page.params;
    const url = `${page.path}.json`;
    const res = await fetch(url);
  
    if (res.ok) {
      const { post } = await res.json();
      return {
        props: { post, slug  },
      };
    }
  
    return {
      };
    }
</script>
<script>
  // Lora - supported variants:
  // weights: [400, 500, 600, 700]
  // styles: italic, normal
  import '@fontsource/lora/400.css';
  import '@fontsource/lora/600.css';
  import '@fontsource/lora/700.css';
  import '@fontsource/lora/700-italic.css';

  // Source Sans Pro - supported variants:
  // weights: [200, 300, 400, 600, 700, 900]
  // styles: italic, normal
  import '@fontsource/source-sans-pro/400.css';
  import '@fontsource/source-sans-pro/400-italic.css';

  import '$lib/styles/normalise.css';
  import '$lib/styles/index.scss';

  import { COPYRIGHT_ENTITY } from '$lib/constants/entities';
  import BlogPost from '$lib/components/BlogPost.svelte';
  import CameraIcon from '$lib/components/Icons/Camera.svelte';
  import ExternalLink from '$lib/components/ExternalLink.svelte';
  const { facebookPage, githubPage, linkedinProfile, tiktokUsername, twitterUsername } = website;
  import FacebookIcon from '$lib/components/Icons/Facebook.svelte';
  import GitHubIcon from '$lib/components/Icons/GitHub.svelte';
  import LinkedinIcon from '$lib/components/Icons/LinkedIn.svelte';
  import RodneyLabCredit from '$lib/components/RodneyLabCredit.svelte';
  import TiktokIcon from '$lib/components/Icons/Tiktok.svelte';
  import TwitterIcon from '$lib/components/Icons/Twitter.svelte';
  import website from '$lib/config/website';

  export let post;

  $: isBlogPost = post !== undefined;
</script>

<div class="container">
  <header class="header-container">
    <a aria-label="Jump to Home page" class="hover-jump" href="./"
      ><span class="logo"><CameraIcon size="96" /></span></a
    >
    <nav class="nav">
      <ul>
        <li><a href="/.">Home</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main class="main-container">
    {#if isBlogPost}
      <BlogPost {post} />
    {/if}
    <slot />
  </main>
  <footer class="footer-container">
    <div>
      Created by <a
        aria-label="Open the Rodney Lab site"
        href="https://rodneylab.com/"
        target="_blank"
        rel="noopener noreferrer">Rodney Lab</a
      >. Copyright {COPYRIGHT_ENTITY} 2021.
    </div>
    <nav class="footer-icons">
      <ul>
        <li class="hover-jump">
          <ExternalLink
            ariaLabel="Go to the Rodney Lab Tik Tok Page"
            href={`https://www.tiktok.com/${tiktokUsername}`}><TiktokIcon /></ExternalLink
          >
        </li>
        <li class="hover-jump">
          <ExternalLink ariaLabel="Go to the Rodney Lab Facebook Page" href={facebookPage}
            ><FacebookIcon /></ExternalLink
          >
        </li>
        <li class="hover-jump">
          <ExternalLink
            ariaLabel="Go to the Rodney Lab Twitter Page"
            href={`https://twitter.com/intent/user?screen_name=${twitterUsername}`}
            ><TwitterIcon /></ExternalLink
          >
        </li>
        <li class="hover-jump">
          <ExternalLink
            ariaLabel="Go to the Rodney Lab Linked In Page"
            href={`https://uk.linkedin.com/in/${linkedinProfile}`}><LinkedinIcon /></ExternalLink
          >
        </li>
        <li class="hover-jump">
          <ExternalLink
            ariaLabel="Go to the Rodney Lab Git Hub In Page"
            href={`https://github.com/${githubPage}`}><GitHubIcon /></ExternalLink
          >
        </li>
      </ul>
    </nav>
    <RodneyLabCredit />
  </footer>
</div>

<style lang="scss">
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-between;
    padding: $spacing-4 $spacing-0 $spacing-0;
    margin: $spacing-0 auto;
    min-height: 100vh;
  }

  .header-container {
    display: flex;
    align-items: flex-end;
    max-width: $max-width-wrapper;
    width: 100%;
    margin: $spacing-0 auto $spacing-12;
  }

  .nav {
    display: flex;
    margin-left: auto;
    list-style-type: none;

    ul {
      display: flex;
      align-items: flex-end;
      padding-bottom: 0;
      margin-bottom: $spacing-0;

      li {
        display: flex;
        font-size: $font-size-4;
        margin-left: $spacing-6;
        margin-bottom: $spacing-1;
      }
    }
  }

  .logo {
    color: $color-theme-1;
  }

  .main-container {
    max-width: $max-width-wrapper;
    width: 100%;
    margin: $spacing-0 auto;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: $max-width-wrapper;
    margin: $spacing-12 auto $spacing-0;
    width: 100%;
  }

  .footer-icons {
    display: flex;
    list-style-type: none;

    ul {
      display: flex;
      margin: $spacing-6 $spacing-0;

      li {
        display: flex;
        margin: $spacing-0 $spacing-4 $spacing-0 $spacing-0;
      }
    }
  }

  .hover-jump {
    transition: all 0.25s ease-in-out;
  }

  .hover-jump:hover {
    transform: translateY(-$spacing-2);
  }

  @media screen and (max-width: $desktop-breakpoint) {
    .container {
      margin: $spacing-0 $spacing-4;
    }
  }
</style>
