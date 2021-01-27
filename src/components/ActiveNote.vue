<template>
  <div v-if="activeNote" class="h-full | flex flex-col">
    <!-- Editing -->
    <div class="flex-1 | flex">
      <section class="flex-1">
        <ActiveNoteMD
          v-model:body="activeNote.body"
          class="w-full h-full p-3 | bg-gray-200"
        />
      </section>
      <ActiveNoteHTML
        :body="activeNote.body"
        class="p-3 | bg-gray-900 text-white | flex-1"
      />
    </div>

    <!-- Note info and actions -->
    <section class="mt-3 | flex justify-end">
      <a @click="closeNote" href="#" class="bg-gray-200 py-1 px-3 rounded-md"
        >Close note</a
      >
    </section>
  </div>
  <div v-else class="h-full | flex justify-center items-center">
    Please select a note to start editing ✍️
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import ActiveNoteMD from "@/components/ActiveNoteMD.vue";
import ActiveNoteHTML from "@/components/ActiveNoteHTML.vue";
export default {
  name: "ActiveNote",
  setup() {
    const store = useStore();
    const activeNote = computed(() =>
      store.state.activeNote
        ? store.getters.getNoteById(store.state.activeNote)
        : null
    );
    const updateNote = $event =>
      store.commit("updateNote", {
        id: activeNote.value.id,
        body: $event.target.value
      });
    const closeNote = () => store.commit("setActiveNote");

    return {
      activeNote,
      updateNote,
      closeNote
    };
  },
  components: {
    ActiveNoteHTML,
    ActiveNoteMD
  }
};
</script>
