<template>
  <div class="dev | container | p-3 my-3 mx-auto | flex">
    <!-- Left side -->
    <section class="dev | w-1/4 p-3 mr-3 ">
      <!-- Search notes -->
      <p>Search Notes</p>

      <!-- Note list -->
      <NoteList />
    </section>

    <!-- Right side -->
    <section class="dev | p-3 | flex-grow">
      <!-- Active note -->
      <ActiveNote />
    </section>
  </div>
</template>

<script>
import NoteList from "@/components/NoteList.vue";
import ActiveNote from "@/components/ActiveNote.vue";
export default {
  name: "App",
  components: {
    NoteList,
    ActiveNote
  }
};
</script>

<style>
.dev {
  border: 1px solid red;
}
</style>
