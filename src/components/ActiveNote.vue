<template>
  <transition name="fade" mode="out-in">
    <div v-if="activeNote" class="h-full | flex flex-col">
      <!-- Editing -->
      <div class="flex-1 | md:flex">
        <section class="flex-1">
          <ActiveNoteMD
            v-model:body="activeNote.body"
            @blur-note="blurNote"
            @update:body="updateNote"
            class="min-h-1/4 w-full h-full p-3 | bg-gray-200"
          />
        </section>
        <ActiveNoteHTML
          :body="activeNote.body"
          class="min-h-1/4 p-3 | bg-gray-900 text-white | flex-1"
        />
      </div>

      <!-- Note info and actions -->
      <section
        class="mt-3 mr-3 | flex flex-col md:flex-row justify-between items-center"
      >
        <div class="text-sm mb-3 sm:mb-0">
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
      <a @click="createNote" class="underline font-bold" href="#"
        >create a note</a
      >&nbsp; ✍️
    </div>
  </transition>
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
      noteDate: computed(
        () =>
          activeNote.value &&
          new Date(activeNote.value.createdAt).toLocaleString()
      ),
      noteLength: computed(
        () => activeNote.value && activeNote.value.body.split(/\W+/).length
      )
    };
  },
  components: {
    ActiveNoteHTML,
    ActiveNoteMD
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
