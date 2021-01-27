<template>
  <textarea
    :value="body"
    @input="$emit('update:body', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  name: "ActiveNoteMD",
  emits: ["update:body"],
  props: {
    body: {
      type: String,
      required: true
    }
  }
};
</script>
