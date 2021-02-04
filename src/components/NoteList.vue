<template>
  <NoteListItem
    v-for="note in notes"
    :key="note.id"
    :note="note"
    class="p-3 my-4 | border-2 border-white bg-gray-300 shadow-xl rounded-md | cursor-pointer"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import NoteListItem from "@/components/NoteListItem.vue";
export default {
  name: "NoteList",
  setup() {
    const store = useStore();
    return {
      notes: computed(() => store.getters.getNotesBySearchTerm)
    };
  },
  components: {
    NoteListItem
  }
};
</script>
