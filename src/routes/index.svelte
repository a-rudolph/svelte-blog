<script context="module">
  export async function load({ page }) {
    let posts;

    try {
      const res = await fetch('http://localhost:3000/api/posts');
      const body = await res.json();

      posts = body.posts;
    } catch (err) {
      posts = [];
    }

    return {
      props: {
        posts,
      },
    };
  }
</script>

<script>
  import PostCard from '../components/PostCard.svelte';
  export let posts;

  let displayPosts = [];

  const title = 'This blog is built on sveltekit!';

  let numberOfPosts = 3;

  $: displayPosts = posts.slice(0, numberOfPosts);
</script>

<h1>{title}</h1>
<div class="posts-container">
  {#each displayPosts as post (post.id)}
    <PostCard {post} />
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

  .paginator input {
    width: 60px;
    padding: 8px;
  }

  .paginator {
    width: max-content;
    margin: 24px auto;
  }
</style>
