<script setup>
    const variant = ref('tonal')

    const projectList = [
      {
        title: 'SOLID-packageByFeature',
        description: 'A project created to practice the principles of SOLID and clean architecture',
        url: 'https://github.com/DanielFrancaContaGit/SOLID-packageByFeature',
        id: 1,
      },
      {  
        title: 'deploy-heroku',
        description: 'Repository created to teach how to deploy a javascript application with react, node and mongodb on heroku',
        url: 'https://github.com/DanielFrancaContaGit/deploy-heroku',
        id: 2,
      },
      {
        title: 'Nubank-interface',
        description: 'A project that I copied the nubank interface to practice react-native',
        url: 'https://github.com/DanielFrancaContaGit/Nubank-interface',
        id: 3,
      },
      {
        title: 'pilula-docker',
        description: 'I created this repository to practice and be able to teach other people how to use the docker',
        url: 'https://github.com/DanielFrancaContaGit/pilula-docker',
        id: 4,
      },
      {
        title: 'pilula-flutter',
        description: "A small repository that I created to experiment and show my co-workers what it's like to develop with flutter",
        url: 'https://github.com/DanielFrancaContaGit/pilula-flutter',
        id: 5,
      },
      {
        title: 'omnistack11', 
        description: 'Back end, front end and mobale of the week omnistack 11 old rocketseat boot camp',
        url: 'https://github.com/DanielFrancaContaGit/omnistack11',
        id: 6,
      },
      
    ]


    const color = ref('blue-grey-darken-4')
  </script>

<template>
    <v-container id="projetos" >
      <v-row align="center" justify="center">
          <h1 class="text-h2 mb-10 text-blue-grey-darken-4">Projetos</h1>
      </v-row>
      <v-infinite-scroll height="450"> 
        <v-row align="center" justify="center" class="mx-0" >
          <v-col
            v-for="{ title, description, url, id } in projectList"
            :key="id"
            cols="auto"
          >
            <v-card
              class="mx-auto"
              width="350"
              :color="color"
              :variant="variant"
            >
              <v-card-item>
                <div>
                    <div class="text-h6 mb-1">
                      {{ title }}
                    </div>
                    <v-infinite-scroll height="70">
                       <div class="text-caption">{{ description }}</div>
                      <template v-slot:loading>
                        
                      </template>
                    </v-infinite-scroll>
                  </div>
              </v-card-item>
    
              <v-card-actions>
                  <Githubbutton 
                  class="ml-2 mb-2"
                  title="ver projeto"  
                  :href="url"
                  />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <template v-slot:loading>
                        
        </template>
      </v-infinite-scroll>
    </v-container>
</template>
  