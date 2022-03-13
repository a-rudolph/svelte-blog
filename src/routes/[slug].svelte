<script context="module">
  export const load = ({ page }) => {
    const { slug } = page.params;

    return { props: { slug } };
  };
</script>

<script>
  export let slug;
</script>

<svelte:head>
  <title>{slug}</title>
</svelte:head>

<h1>Page: {slug}</h1>
<p>TODO...</p>
