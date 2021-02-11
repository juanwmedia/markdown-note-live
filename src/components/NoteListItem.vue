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
    const store = useStore();
    return {
      title: computed(() => store.getters.getNoteTitle(props.note.id)),
      setActiveNote: () => store.commit("setActiveNote", props.note.id)
    };
  }
};
</script>
