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
    wireUsername,
  } = website;
  import SEO from '$lib/components/SEO/index.svelte';

  let title = 'Contact';
  let metadescription = 'Get in touch with Rodneylab, the developer of Climate SvelteKit Starter.';
  const breadcrumbs = [
    {
      name: 'Home',
      slug: '',
    },
    {
      name: 'Contact Us',
      slug: 'contact',
    },
  ];
  const seoProps = {
    breadcrumbs,
    title,
    metadescription,
    slug: 'contact',
    datePublished: '2021-07-07T14:19:33.000+0100',
    lastUpdated: '2021-07-07T14:19:33.000+0100',
  };
</script>

<SEO {...seoProps} />
<Card>
  <h1>Contact me</h1>
  <p>I would love to hear from you. Please get in touch!</p>
  <div class="contact-details">
    <ul>
      <li>
        <EmailIcon />
        <span class="contact-address">{contactEmail}</span>
      </li>
      <li>
        <FacebookIcon /><ExternalLink
          ariaLabel="D M Rodney Lab on Facebook Messenger"
          href={`https://m.me.${facebookPageName}`}
        >
          <span class="contact-address"> {facebookPageName}</span>
        </ExternalLink>
      </li>
      <li>
        <TwitterIcon /><ExternalLink
          ariaLabel="D M Rodney Lab on Twitter"
          href={`https://twitter.com/messages/compose?recipient-id=${twitterUserId}`}
        >
          <span class="contact-address">@{twitterUsername}</span>
        </ExternalLink>
      </li>
      <li>
        <TelegramIcon /><ExternalLink
          ariaLabel="Message Rodney Lab on Telegram"
          href={`https://t.me/${telegramUsername}`}
        >
          <span class="contact-address">{telegramUsername}</span>
        </ExternalLink>
      </li>
      <li>
        <WireIcon />
        <span class="contact-address">{wireUsername}</span>
      </li>
    </ul>
  </div></Card
>

<style lang="scss">
  .contact-details {
    list-style-type: none;

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        display: flex;
        padding-left: $spacing-2;
        font-size: $font-size-2;
      }
    }
  }

  .contact-address {
    margin-left: $spacing-2;
  }
</style>
