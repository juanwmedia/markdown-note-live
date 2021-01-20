<template>
  <div class="dev | container | p-3 my-3 mx-auto | flex">
    <!-- Left side -->
    <section class="dev | p-3 mr-3">
      <!-- Search notes -->
      <p>Search Notes</p>

      <!-- Note list -->
      <p>Note list</p>
    </section>

    <!-- Right side -->
    <section class="dev | p-3 | flex-grow">
      <!-- Active note -->
      <p>Active note</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.dev {
  border: 1px solid red;
}
</style>
