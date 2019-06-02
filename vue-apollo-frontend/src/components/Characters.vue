<template>
  <div class="characters">
    <div v-for="character in allCharacters" :key="character.name">
      {{character.name}}
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: "Characters",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
