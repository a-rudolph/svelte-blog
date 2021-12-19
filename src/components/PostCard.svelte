<script>
  export let post;
</script>

<div class="card">
  <h3>{post.title}</h3>
  <p class="preview">{post.body}</p>
  <p class="author">by: <b>{post.author}</b></p>
</div>

<style>
  .card {
    position: relative;

    padding: 24px;
    padding-bottom: 40px;
    margin: 16px;
    width: 400px;

    border: 1px solid rgb(0, 0, 0, 0.6);
    border-radius: 5px;

    box-shadow: 1px 1px 2px 0px rgb(0, 0, 0, 0.3);
  }

  .author {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 16px;
  }
</style>
