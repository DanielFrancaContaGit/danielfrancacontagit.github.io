<script setup>  
    // const variants = ['elevated', 'flat', 'tonal', 'outlined', 'total', 'total']
    const variants = ['tonal', 'tonal', 'tonal', 'tonal', 'tonal', 'tonal',]

    const color = ref('blue-grey-darken-4')
  </script>

<template>
    <v-container>
      <v-row align="center" justify="center">
          <h1 class="text-h2 text-blue-grey-darken-4">Projetos</h1>
      </v-row>
      <v-row align="center" justify="center">
        <v-col
          v-for="(variant, i) in variants"
          :key="i"
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
                <div class="text-overline mb-1">
                  {{ variant }}
                </div>
                <div class="text-h6 mb-1">
                  Headline
                </div>
                <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
              </div>
            </v-card-item>
  
            <v-card-actions>
              <!-- <v-btn>
                Button
              </v-btn> -->
                <Githubbutton 
                class="ml-2 mb-2"
                title="ver projeto"  
                href="https://vuetifyjs.com/en/styles/flex/#flex-justify" 
                />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
  