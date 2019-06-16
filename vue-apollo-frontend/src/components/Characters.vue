<template>
  <div class="container">
    <div class="characters">
      <b-card-group deck>
        <div v-for="(character, index) in allCharacters" :key="character.name">
          <Character :role="character" :id="index"></Character>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import Character from '@/components/Character.vue';
import gql from 'graphql-tag';

export default {
  name: "characters",
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
  .characters {
    padding-top: 30px;
    text-align: left;
  }
</style>
