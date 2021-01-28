<template>
  <textarea
    ref="textarea"
    :value="body"
    @input="$emit('update:body', $event.target.value)"
  ></textarea>
</template>

<script>
import { ref, onMounted, onUpdated } from "vue";
export default {
  name: "ActiveNoteMD",
  emits: ["update:body"],
  props: {
    body: {
      type: String,
      required: true
    }
  },
  setup() {
    const textarea = ref(null);
    const focusTextarea = () => textarea.value.focus();
    onMounted(focusTextarea);
    onUpdated(focusTextarea);
    return { textarea };
  }
};
</script>
