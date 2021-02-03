<template>
  <div
    class="h-full w-full | absolute top-0 left-0 | opacity-90 bg-gray-700 | flex justify-center items-center"
  >
    <article class="w-3/4 p-3 | bg-gray-200 rounded-xl shadow-md">
      <h6 class="text-center text-2xl">
        Remove {{ $store.getters.getNoteTitle() }} ?
      </h6>
      <nav class="flex justify-end">
        <a
          @click="$store.commit('deleteNote')"
          class="underline m-3 text-red-700"
          href="#"
          >Yes</a
        >
        <a
          @click="$store.commit('setDeleting', false)"
          class="underline m-3"
          href="#"
          >No</a
        >
      </nav>
    </article>
  </div>
</template>

<script>
export default {
  name: "DeleteNote"
};
</script>
