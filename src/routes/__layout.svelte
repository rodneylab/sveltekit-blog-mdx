<script>
	import { COPYRIGHT_ENTITY } from '$lib/constants/entities';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import website from '$lib/config/website';
	const { facebookPage, githubPage, linkedinProfile, tiktokUsername, twitterUsername } = website;
	import FacebookIcon from '$lib/components/Icons/Facebook.svelte';
	import GitHubIcon from '$lib/components/Icons/GitHub.svelte';
	import LinkedinIcon from '$lib/components/Icons/LinkedIn.svelte';
	import TiktokIcon from '$lib/components/Icons/Tiktok.svelte';
	import TwitterIcon from '$lib/components/Icons/Twitter.svelte';
</script>

<header><nav><a href="/.">Home</a><a href="/contact">Contact</a></nav></header>
<main>
	<slot />
</main>
<footer>
	Created by <a
		aria-label="Open the Rodney Lab site"
		href="https://rodneylab.com/"
		target="_blank"
		rel="noopener noreferrer">Rodney Lab</a
	>. Copyright {COPYRIGHT_ENTITY} 2021.
	<nav>
		<ul>
			<li>
				<ExternalLink
					ariaLabel="Go to the Rodney Lab Tik Tok Page"
					href={`https://www.tiktok.com/${tiktokUsername}`}><TiktokIcon /></ExternalLink
				>
			</li>
			<li>
				<ExternalLink ariaLabel="Go to the Rodney Lab Facebook Page" href={facebookPage}
					><FacebookIcon /></ExternalLink
				>
			</li>
			<li>
				<ExternalLink
					ariaLabel="Go to the Rodney Lab Twitter Page"
					href={`https://twitter.com/intent/user?screen_name=${twitterUsername}`}
					><TwitterIcon /></ExternalLink
				>
			</li>
			<li>
				<ExternalLink
					ariaLabel="Go to the Rodney Lab Linked In Page"
					href={`https://uk.linkedin.com/in/${linkedinProfile}`}><LinkedinIcon /></ExternalLink
				>
			</li>
			<li>
				<ExternalLink
					ariaLabel="Go to the Rodney Lab Git Hub In Page"
					href={`https://github.com/${githubPage}`}><GitHubIcon /></ExternalLink
				>
			</li>
		</ul>
	</nav>

	<p>
		A project by <a
			aria-label="Open the Rodney Lab site"
			href="https://rodneylab.com/"
			target="_blank"
			rel="noopener noreferrer"
			><img alt="Rodney Lab Logo" src="/assets/rodneylab-logo.png" height="16" width="16" /></a
		>
		<a
			aria-label="Open the Rodney Lab site"
			href="https://rodneylab.com/"
			target="_blank"
			rel="noopener noreferrer">RODNEY LAB</a
		>.
	</p>
</footer>
