<template>
    <v-container flat class="pa-7 mw-100">
        <v-card 
        variant="outlined"
        class="h-auto rounded"
        >
        <div class="d-flex flex-line h-100">
            <v-avatar
                color="grey"
                size="250"
                class="ma-3 rounded"

                >     
                <v-img src="https://avatars.githubusercontent.com/u/57536006?v=4" />
            </v-avatar>
            <div class="d-flex flex-col pr-20 pl-10">
                <v-card-title class="text-h6 mt-5 font-weight-light">
                    O que eu sou?
                </v-card-title>
                <v-card-title class="text-h5 font-weight-regular  text-wrap">
                    Eu sou Daniel Franca, um estudante de engenharia e desenvolvedor web.
                </v-card-title>
                <v-card-text class="text-subtitle-1 ">
                    Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Commodi, ratione debitis quis 
                    est labore voluptatibus! Eaque cupiditate minima, 
                    at placeat totam, magni doloremque veniam neque porro 
                    libero rerum unde voluptatem!
                </v-card-text>
                <v-card-actions class="">
                    <NuxtLink 
                        to="https://github.com/DanielFrancaContaGit"
                        target="_blank"
                    >
                        <v-btn>
                            github
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink 
                        to="https://www.linkedin.com/in/daniel-silva-franca" 
                        target="_blank"
                    >
                        <v-btn>
                            linkedin
                        </v-btn>
                    </NuxtLink>
                </v-card-actions>
            </div>
        </div>
        </v-card>
        
    </v-container>
    
</template>