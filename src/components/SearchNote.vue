<template>
  <input
    v-model="searchTerm"
    type="search"
    placeholder="Search notes"
    class="w-full p-2 | border-2 rounded-md"
  />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "SarchNote",
  setup() {
    const store = useStore();
    const searchTerm = computed({
      get: () => store.state.searchTerm,
      set: value => store.commit("setSearchTerm", value)
    });
    return { searchTerm };
  }
};
</script>
