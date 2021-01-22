<template>
  <div class="h-full | flex items-stretch">
    <section class="flex-1">
      <textarea
        v-if="activeNote"
        :value="activeNote"
        class="w-full h-full p-3 | bg-gray-200"
      ></textarea>
    </section>
    <article class="p-3 | bg-gray-900 text-white | flex-1">
      HTML will be here
    </article>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "ActiveNote",
  setup() {
    const store = useStore();
    return {
      activeNote: computed(() =>
        store.state.activeNote
          ? store.getters.getNoteById(store.state.activeNote).body
          : null
      )
    };
  }
};
</script>
