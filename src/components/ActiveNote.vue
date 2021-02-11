<template>
  <div v-if="activeNote" class="h-full | flex flex-col">
    <!-- Editing -->
    <div class="flex-1 | flex">
      <section class="flex-1">
        <ActiveNoteMD
          v-model:body="activeNote.body"
          @blur-note="blurNote"
          @update:body="updateNote"
          class="w-full h-full p-3 | bg-gray-200"
        />
      </section>
      <ActiveNoteHTML
        :body="activeNote.body"
        class="p-3 | bg-gray-900 text-white | flex-1"
      />
    </div>

    <!-- Note info and actions -->
    <section class="mt-3 mr-3 | flex justify-between items-center">
      <div class="text-sm">
        Created on {{ noteDate }}, contains {{ noteLength }} words
      </div>
      <div>
        <a
          @click="deleteNote"
          href="#"
          class="py-1 px-3 mr-3 | text-red-700 rounded-md"
          >Delete note</a
        >
        <a
          @click="closeNote"
          href="#"
          class="py-1 px-3 | rounded-md bg-gray-200"
          >Close note</a
        >
      </div>
    </section>
  </div>
  <div v-else class="h-full | flex justify-center items-center">
    Please select a note to start editing or&nbsp;
    <a @click="createNote" class="underline font-bold" href="#">create a note</a
    >&nbsp; ✍️
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import debounce from "lodash/debounce";
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
    const updateNote = debounce(
      value =>
        store.dispatch("updateNote", {
          id: activeNote.value.id,
          body: value
        }),
      500
    );
    const closeNote = () => store.commit("setActiveNote");
    const createNote = () => store.dispatch("createNote");
    const deleteNote = () => store.commit("setDeleting", true);
    const blurNote = value => !value.length && store.dispatch("deleteNote");
    return {
      activeNote,
      updateNote,
      closeNote,
      createNote,
      deleteNote,
      blurNote,
      noteDate: computed(() =>
        new Date(activeNote.value.createdAt).toLocaleString()
      ),
      noteLength: computed(() => activeNote.value.body.split(/\W+/).length)
    };
  },
  components: {
    ActiveNoteHTML,
    ActiveNoteMD
  }
};
</script>
