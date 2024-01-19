<template>
  <v-app-bar flat :elevation="2">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>
      titulo
    </v-app-bar-title>
    <NuxtLink to="/">
      <v-btn>
        Sobre mim
      </v-btn>
    </NuxtLink>
    <NuxtLink to="/projetos">
      <v-btn >
        Projetos
      </v-btn>
    </NuxtLink>
    <v-btn class="mr-5">
      contato
    </v-btn>
    <div class="ml-20"/>
  </v-app-bar>
</template>