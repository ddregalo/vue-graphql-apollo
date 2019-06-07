<template>
  <div class="container">
    <h1>StarWars Characters</h1>
    <div class="characters">
      <b-card-group deck>
        <div v-for="character in allCharacters" :key="character.name">
          <Character :character="character"></Character>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import Character from '@/components/Character.vue';
import gql from 'graphql-tag';

export default {
  name: "Characters",
  components: {
    Character
  },
  apollo: {
    allCharacters: gql`
      query {
        allCharacters {
          name
          gender
          eye_color
        }
      }
    `
  },
};
</script>

<style scoped lang="scss">
  h1 {
    text-transform: uppercase;
  }
  .characters {
    text-align: left;
  }
</style>
