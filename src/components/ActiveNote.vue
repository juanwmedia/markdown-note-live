<template>
  <div v-if="activeNote" class="h-full | flex flex-col">
    <!-- Editing -->
    <div class="flex-1 | flex">
      <section class="flex-1">
        <textarea
          :value="activeNote.body"
          @input="updateNote"
          class="w-full h-full p-3 | bg-gray-200"
        ></textarea>
      </section>
      <article
        v-html="markdown"
        class="p-3 | bg-gray-900 text-white | flex-1 | mdscss"
      ></article>
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
export default {
  name: "ActiveNote",
  setup() {
    const marked = require("marked");
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
    const markdown = computed(() =>
      activeNote.value ? marked(activeNote.value.body) : null
    );
    return {
      activeNote,
      updateNote,
      closeNote,
      markdown
    };
  }
};
</script>

<style>
.mdscss {
  font-size: 1rem;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Helvetica Neue", Arial, sans-serif;
}
.mdscss h1 {
  font-size: 3em;
  font-weight: bold;
}
.mdscss h2 {
  font-size: 2.25em;
  font-weight: bold;
}
.mdscss h3 {
  font-size: 1.5em;
  font-weight: bold;
}
.mdscss h4 {
  font-size: 1rem;
  font-weight: bold;
}
.mdscss strong {
  font-weight: bold;
}
.mdscss em {
  font-style: italic;
}
.mdscss small {
  font-size: 0.667em;
}
.mdscss code {
  font-family: Consolas, monaco, monospace;
}
.mdscss li {
  line-height: 1.5em;
}
.mdscss p {
  line-height: 1.5em;
}
.mdscss blockquote {
  margin-left: 0;
  padding-left: 0.5rem;
  border-left: 0.5rem solid #ddd;
}
.mdscss pre {
  background: #f8f8f8;
  padding: 1em;
}
.mdscss * + * {
  margin-top: 1.5rem;
}
.mdscss li + li {
  margin-top: 0;
}
</style>
