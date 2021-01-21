<template>
  <article
    @click="setActiveNote"
    class="p-3 my-4 | border-2 border-gray-300 rounded-md | cursor-pointer"
  >
    {{ title }}
  </article>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "NoteListItem",
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const removeMd = require("remove-markdown");
    const store = useStore();
    return {
      title: computed(() => removeMd(props.note.body.substring(0, 20))),
      setActiveNote: () => store.commit("setActiveNote", props.note.id)
    };
  }
};
</script>
