<template>
  <div class="container mt-5">
    <v-alert class="blue-grey darken-2 white--text mx-10"
      >Selected movies: {{ selected.map((el) => el.title).toString() }}</v-alert
    >
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="movies"
      :items-per-page="6"
      class="elevation-3"
      show-select
      :footer-props="{ itemsPerPageOptions: [6, 12, 18] }"
    ></v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
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
};
</script>

<style lang="scss" scoped></style>
