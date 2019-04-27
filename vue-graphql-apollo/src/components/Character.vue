<template>
  <div class="container">
    <div class="card">
      <h3 class="card-title">
        {{ character.name }}
      </h3>
      <span class="height">
        {{ character.height }}
      </span>
      <span class="mass">
        {{ character.mass }}
      </span>
      <span class="gender">
        {{ character.gender }}
      </span>
      <span class="homeworld">
        {{ character.homeworld }}
      </span>
      {{msg}}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import gql from 'graphql-tag';
import ICharacter from '../models/ICharacter';

export default Vue.extend({
  name: 'Character',
  props: {
    character: {
      required: false,
      type: Object
    },
    msg: {
      required: false,
      type: String
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>