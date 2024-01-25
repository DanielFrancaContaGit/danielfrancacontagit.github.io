<script setup>
    const icons = [
      {
        icon: 'mdi-github',
        url: 'https://github.com/DanielFrancaContaGit'
      },
      {
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/daniel-silva-franca'
      },
    ]
  </script>

<template>
    <v-row align="center" justify="center" class="ma-0">
      <h1 class="text-h2 mb-10 text-blue-grey-darken-4">-------</h1>
    </v-row>
    <v-footer
      id="footer"
      class="bg-indigo-lighten-1 text-center d-flex flex-column"
    >
      <div >
        <NuxtLink 
          v-for="{ icon, url } in icons"
          :to="url"
          target="_blank"
        >
        <v-btn
          class="mx-4"
          :icon="icon"
          variant="text"
        ></v-btn>
        </NuxtLink>
      </div>
  
      <div class="pt-0">
        Feito por Daniel França 
      </div>
  
      <v-divider></v-divider>
  
      <div>
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </div>
    </v-footer>
  </template>
  