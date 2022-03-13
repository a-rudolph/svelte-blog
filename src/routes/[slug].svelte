<script context="module">
  export async function load({ page }) {
    const { slug } = page.params;

    return { props: { slug } };

    //   let posts;
    //   try {
    //     const res = await fetch('http://localhost:3000/api/posts');
    //     const body = await res.json();
    //     posts = body.posts;
    //   } catch (err) {
    //     posts = [];
    //   }
    //   return {
    //     props: {
    //       posts,
    //     },
    //   };
  }
</script>

<script>
  export let slug;
</script>

<svelte:head>
  <title>{slug}</title>
</svelte:head>

<h1>Page: {slug}</h1>
<p>TODO...</p>
