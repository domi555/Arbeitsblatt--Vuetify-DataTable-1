<template>
  <v-app>
    <v-app-bar app>
      <img
        class="mx-2 hidden-md-and-down"
        src="../src/assets/logo.png"
        style="height: 150px; margin-top: 100px"
      />
      <span
        class="text-truncate text-h4 blue-grey--text darken-1"
        style="font-family: Poppins"
        >Movies</span
      >

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.imdb.com/movies-in-theaters/"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
