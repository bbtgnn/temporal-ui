<script>
  import apple from '../vendor/apple-touch-icon.png';
  import banner from '../vendor/banner.png';
  import favicon from '../vendor/favicon.ico';
  import manifest from '../vendor/site.webmanifest';

  export let title = 'Temporal';
  export let url = 'https://temporal.io';

  export let image = banner;
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="icon" href={favicon} />
  <link rel="manifest" href={manifest} />
  <link rel="apple-touch-icon" href={apple} />

  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:image" content={image} />
</svelte:head>
