<template>
  <!-- Delete Note -->
  <DeleteNote v-if="$store.state.deleting" />
  <div
    class="container | min-h-1/2 p-3 my-3 mx-auto | bg-white rounded-xl shadow-2xl | flex"
  >
    <!-- Left side -->
    <section class="w-1/4 p-3 mr-3 | bg-gray-100">
      <!-- Search notes -->
      <p>Search Notes</p>

      <!-- Note list -->
      <NoteList />
    </section>

    <!-- Right side -->
    <section class="p-3 | flex-grow">
      <!-- Active note -->
      <ActiveNote />
    </section>
  </div>
</template>

<script>
import NoteList from "@/components/NoteList.vue";
import ActiveNote from "@/components/ActiveNote.vue";
import DeleteNote from "@/components/DeleteNote.vue";
export default {
  name: "App",
  components: {
    NoteList,
    ActiveNote,
    DeleteNote
  }
};
</script>

<style>
.dev {
  border: 1px solid red;
}
</style>
