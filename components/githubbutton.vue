<script setup>
const props = defineProps({
    href: String,
    title: String
})

</script>


<template>
    <v-card
      class="d-flex text-h8 justify-center align-center"
      max-width="300"
      :href="props.href"
      target="_blank"
      rel="noopener"
    >
    <v-icon icon="mdi-github" size="x-small" class="ml-3"></v-icon>
    <v-card-title class="text-subtitle-2">
        {{ props.title }}
    </v-card-title>
    <v-icon icon="mdi-open-in-new" size="x-small" class="mr-3"></v-icon>
    </v-card>
  </template>