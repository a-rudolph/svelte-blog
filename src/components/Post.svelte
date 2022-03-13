<script>
  export let title;
  export let date;
  export let teaser;
</script>

<div class="pv-3">
  <div class="flex justify-between items-baseline">
    <h2 class="text-cyan-400 mb-3">{title}</h2>
    <div>{date}</div>
  </div>

  <div class="text-justify">
    {teaser}
  </div>
</div>
