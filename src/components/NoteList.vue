<template>
  <NoteListItem v-for="note in notes" :key="note.id" :note="note" />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import NoteListItem from "@/components/NoteListItem.vue";
export default {
  name: "NoteList",
  setup() {
    const store = useStore();
    //const notes = computed(() => store.state.notes);
    return {
      notes: computed(() => store.state.notes)
    };
  },
  components: {
    NoteListItem
  }
};
</script>
