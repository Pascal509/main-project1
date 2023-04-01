<template>
    <div>
        <v-app-bar app color="black" dark flat class="px-8">
            <v-btn>
                <v-icon color="yellow" left class="mr-2">fas fa-signature</v-icon>GITHUB PROFILE
            </v-btn>
            <v-spacer></v-spacer>
            <router-link active-class="active" to="/">
            <v-btn class="text-yellow">Home</v-btn>
            </router-link>
            <!-- <v-btn text @click="scroll('home')" class="text-yellow">Home</v-btn> -->
            <router-link active-class="active" to="/project">
            <v-btn class="text-yellow">Project</v-btn>
            </router-link>            
            <router-link active-class="active" to="/about">
            <v-btn class="text-yellow">About</v-btn>
            </router-link>
            <router-link active-class="active" to="/contact">
            <v-btn class="text-yellow">Contact</v-btn>
            </router-link>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        methods: {
            scroll(refName) {
                const element = document.getElementById(refName);
                element.scrollIntoView({behavior: 'smooth'})
            }
        }

    }
</script>

<style scoped>
    .router-link {
        text-decoration: none;
    }
    .active {
        font-weight: bold;
        color: aliceblue;
    }
</style>