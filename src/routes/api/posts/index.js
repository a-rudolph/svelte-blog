export async function get({ params }) {
  const firstPost = {
    title: 'How I made a blog website using sveltekit.',
    author: 'ar',
    body: 'I wanted to try the svelte framework so I decided to make a blog website. In order to use sveltekit I first needed to update node.',
  };

  const posts = Array(10)
    .fill(firstPost)
    .map((_, i) => ({ ..._, id: i + 1 }));

  return {
    body: {
      posts,
    },
  };
}
