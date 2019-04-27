<template>
    <div class="container">
        <div v-for="character in characters" :key="character.name">
            <Character :character="character" />
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Character from './Character.vue';
export default Vue.extend({
    name: 'Characters',
    components: {
        Character,
    },
    data() {
        return {
            characters: [
                {
                    name: 'Katie',
                    height: "5'8 in.",
                    mass: '50 kg',
                    gender: 'F',
                    homeworld: 'Babeland'
                },
                {
                    name: 'Daniel',
                    height: "5'10 in.",
                    mass: '73 kg',
                    gender: 'M',
                    homeworld: 'Babeland'
                }
            ],
            msg: 'Daniel is aweaome',
        }
    },
});
</script>
