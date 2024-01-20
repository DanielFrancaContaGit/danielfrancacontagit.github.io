<script>
  export default {
    data: () => ({
      items: [
        { title: 'Sobre mim' },
        { title: 'Projetos' },
        { title: 'Contato' },
      ],
    }),
  }
</script>

<template>
    <v-menu
      transition="slide-x-transition"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          icon="mdi-menu"
          v-bind="props"
        >
        
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
</template>