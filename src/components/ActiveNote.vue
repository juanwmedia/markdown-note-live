<template>
  <div class="dev | h-full | flex items-stretch">
    <section class="dev | flex-1">
      <textarea
        v-if="activeNote"
        :value="activeNote"
        class="w-full h-full"
      ></textarea>
    </section>
    <article class="dev | flex-1">HTML will be here</article>
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
