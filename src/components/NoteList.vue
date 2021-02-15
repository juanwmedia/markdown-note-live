<template>
  <transition-group name="list-complete">
    <NoteListItem
      v-for="note in notes"
      :key="note.id"
      :note="note"
      class="list-complete-item | p-3 my-4 | border-2 border-white bg-gray-300 shadow-xl rounded-md | cursor-pointer"
    />
  </transition-group>
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

<style>
.list-complete-item {
  transition: all 0.8s ease;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: relative;
}
</style>
