<script>
	import Card from '$lib/components/Card.svelte';
	import EmailIcon from '$lib/components/Icons/Email.svelte';
	import ExternalLink from '$lib/components/ExternalLink.svelte';
	import FacebookIcon from '$lib/components/Icons/Facebook.svelte';
	import WireIcon from '$lib/components/Icons/Wire.svelte';
	import TelegramIcon from '$lib/components/Icons/Telegram.svelte';
	import TwitterIcon from '$lib/components/Icons/Twitter.svelte';
	import website from '$lib/config/website';
	const {
		contactEmail,
		facebookPageName,
		telegramUsername,
		twitterUserId,
		twitterUsername,
		wireUsername
	} = website;
	import SEO from '$lib/components/SEO/index.svelte';

	let title = 'Contact';
	let metadescription = 'Get in touch with Rodneylab, the developer of Climate SvelteKit Starter.';
</script>

<SEO {title} {metadescription} />
<Card>
	<h1>Contact me</h1>
	<p>I would love to hear from you. Please get in touch!</p>
	<ul>
		<li>
			<EmailIcon />
			{contactEmail}
		</li>
		<li>
			<FacebookIcon /><ExternalLink
				aria-label="D M Rodney Lab on Facebook Messenger"
				href={`https://m.me.${facebookPageName}`}
			>
				{facebookPageName}
			</ExternalLink>
		</li>
		<li>
			<TwitterIcon /><ExternalLink
				aria-label="D M Rodney Lab on Twitter"
				href={`https://twitter.com/messages/compose?recipient-id=${twitterUserId}`}
			>
				@{twitterUsername}
			</ExternalLink>
		</li>
		<li>
			<TelegramIcon /><ExternalLink
				aria-label="Message Rodney Lab on Telegram"
				href={`https://t.me/${telegramUsername}`}
			>
				{telegramUsername}
			</ExternalLink>
		</li>
		<li>
			<WireIcon />
			{wireUsername}
		</li>
	</ul></Card
>
