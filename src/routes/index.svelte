<script>
  import Post from '../components/Post.svelte';
</script>

<div class="container prose mx-auto px-4 pt-[40px]">
  <h1>ar-blog</h1>

  <div class="flex m-1 mb-5">
    <div
      class="rounded-full m-1 ml-[-4px]
   bg-slate-50 h-[48px] w-[48px]"
    />
    <div class="p-1 pl-3">
      Personal blog by <b>Adam Rudolph</b><br /> DX enthusiast
    </div>
  </div>

  <Post
    title={`coder's palette`}
    date="March 12, 2022"
    teaser={`know how to access all the tools at your disposal. easy to navigate and learn the shortcuts
    you need.`}
  />

  <Post
    title={`some other article`}
    date="February 4, 2022"
    teaser={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni similique laborum ratione
      reiciendis ipsum ducimus.`}
  />
</div>
