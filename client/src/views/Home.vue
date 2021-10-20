<template>
  <div class="container mt-5">
    <v-alert class="blue-grey darken-2 white--text mx-10"
      >Selected movies: {{ selectedMovies }}</v-alert
    >
    <v-data-table
      :search="search"
      v-model="selected"
      :headers="headers"
      :items="movies"
      :items-per-page="6"
      class="elevation-3"
      show-select
      :footer-props="{ itemsPerPageOptions: [6, 12, 18] }"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field> </template
    ></v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      search: '',
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'Title',
          value: 'title',
          width: 100,
          class: 'blue-grey lighten-5',
        },
        { text: 'Director', value: 'director', class: 'blue-grey lighten-5' },
        { text: 'Genre', value: 'main_genre', class: 'blue-grey lighten-5' },
        {
          text: 'Year',
          value: 'year',
          width: 100,
          class: 'blue-grey lighten-5',
        },
        {
          text: 'Rated',
          value: 'rated',
          width: 100,
          class: 'blue-grey lighten-5',
        },
        { text: 'Plot', value: 'plot' },
      ],
      movies: [],
    };
  },
  async created() {
    try {
      const result = await axios({
        url: 'http://localhost:3000/movies',
        method: 'GET',
      });
      this.movies = result.data;
    } catch (e) {
      console.error(e.message);
    }
  },
  methods: {
    filterMovies(value, search) {},
  },
  computed: {
    selectedMovies() {
      // @item-select: Aufruf beim Selektieren eines Eintrages
      // @toggle-select-all: Aufruf beim Anklicken des Alle-Einträge-Auswahl-Buttons
      // Somit könn(t)en Änderungen erfasst und geupdated werden. Ich habe einen anderen Lösungsansatz verfolgt.
      return this.selected.map((el) => el.title).join(', ');
    },
  },
};
</script>

<style lang="scss" scoped></style>
