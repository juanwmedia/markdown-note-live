<template>
  <article @click="setActiveNote">
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
