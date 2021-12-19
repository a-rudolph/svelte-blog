<script>
  const title = 'This blog is built on sveltekit!';

  let numberOfPosts = 0;
  let posts = [];

  const firstPost = {
    title: 'How I made a blog website using sveltekit.',
    body: 'I wanted to try the svelte framework so I decided to make a blog website. In order to use sveltekit I first needed to update npm.',
  };

  $: posts = Array(numberOfPosts)
    .fill(firstPost)
    .map((_, i) => ({ ..._, id: i + 1 }));
</script>

<h1>{title}</h1>
<div class="posts-container">
  {#each posts as post (post.id)}
    <div class="card">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  {:else}
    <p>no blog posts to show 🤷‍♂️</p>
  {/each}
</div>
<div class="paginator">
  showing <input type="number" max={10} bind:value={numberOfPosts} /> of 10 posts
</div>
<p class="footer">
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<style>
  h1 {
    text-align: center;
  }

  .footer {
    position: absolute;
    bottom: 0;
  }

  .posts-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 964px;
  }

  .card {
    padding: 24px;
    margin: 16px;
    width: 400px;

    border: 1px solid rgb(0, 0, 0, 0.6);
    border-radius: 2px;
  }

  .paginator input {
    width: 60px;
    padding: 8px;
  }

  .paginator {
    width: max-content;
    margin: 24px auto;
  }
</style>
