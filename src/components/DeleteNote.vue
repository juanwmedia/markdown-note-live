<template>
  <div
    class="h-full w-full | absolute top-0 left-0 | opacity-90 bg-gray-700 | flex justify-center items-center"
  >
    <article class="w-3/4 p-3 | bg-gray-200 rounded-xl shadow-md">
      <h6 class="text-center text-2xl">
        Remove {{ $store.getters.getNoteTitle() }}
      </h6>
      <nav class="flex justify-end">
        <a
          class="m-3 underline text-red-700"
          @click="$store.commit('deleteNote')"
          href="#"
          >Yes</a
        >
        <a
          class="m-3 underline"
          @click="$store.commit('setDeleting', false)"
          href="#"
          >No</a
        >
      </nav>
    </article>
  </div>
</template>

<script>
export default {
  name: "RemoveNote"
};
</script>
