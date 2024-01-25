<script setup>
  const isDrowOpen = ref(false)

</script>

<template>
  <v-navigation-drawer v-model="isDrowOpen" disable-resize-watcher=True>
    <v-list>
      <v-list-subheader @click="isDrowOpen = !isDrowOpen">Menu</v-list-subheader>
      <NuxtLink to="#home" @click="isDrowOpen = !isDrowOpen">
        <v-list-item prepend-icon="mdi-home">Home</v-list-item>
      </NuxtLink>
      <NuxtLink to="#sobremim" @click="isDrowOpen = !isDrowOpen">
        <v-list-item prepend-icon="mdi-account">Sobre min</v-list-item>
      </NuxtLink>
      <NuxtLink to="#projetos" @click="isDrowOpen = !isDrowOpen">
        <v-list-item prepend-icon="mdi-file-document-multiple">Projetos</v-list-item>
      </NuxtLink>
      <NuxtLink to="#footer" @click="isDrowOpen = !isDrowOpen">
        <v-list-item prepend-icon="mdi-email">Contato</v-list-item>
      </NuxtLink>


    </v-list>
  </v-navigation-drawer>
  <v-app-bar flat :elevation="2">
    <v-app-bar-nav-icon @click="isDrowOpen = !isDrowOpen" ></v-app-bar-nav-icon>
    <v-app-bar-title>
      <NuxtLink to="#home">
        Home
      </NuxtLink>
    </v-app-bar-title>
    <div class="d-none d-md-block">
      <NuxtLink to="#sobremim">
        <v-btn>
          Sobre mim
        </v-btn>
      </NuxtLink>
      <NuxtLink to="#projetos" >
        <v-btn >
          Projetos
        </v-btn>
      </NuxtLink>
      <NuxtLink to="#footer">
        <v-btn class="mr-5">
          contato
        </v-btn>
      </NuxtLink>

    </div>
    <div class="ml-20"/>
  </v-app-bar>
</template>