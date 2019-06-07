<template>
  <div class="home">
    <Characters />
  </div>
</template>

<script>
// @ is an alias to /src
import Characters from "@/components/Characters.vue";

export default {
  name: "home",
  components: {
    Characters
  }
};
</script>
<style lang="scss" scoped>
  .home {
    background-image: url("https://media.wired.com/photos/5cd5df1f2948ca2e63b090f0/master/w_1164,c_limit/01_SPoW_051119.jpg");
    background-color: #cccccc;
  }
</style>
