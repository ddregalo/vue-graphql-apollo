<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Characters />
  </div>
</template>

<script lang="ts">
import Characters from '@/components/Characters.vue'; // @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Characters,
  },
};
</script>
