<template>
    <div class="character">  
        <b-card :title="character.name">
            <b-card-text>
                <div class="character-card">
                    <p>Gender: </p>
                    <p>{{character.gender}}</p>
                    <p>Eye-Color: </p>
                    <p>{{character.eye_color}}</p>
                </div>
            </b-card-text>
            <div slot="footer">
                <small class="text-muted">Data From Starwars Api 2019</small>
            </div>
        </b-card>
    </div>
</template>
<script lang="js">
    export default {
     name: "character",
     props: {
      character: {},  
     }  
    }
</script>
<style lang="scss" scoped>
    p {
        padding: 2px;
    }

    .card-body {
        max-height: 160px;
        max-width: 207px;
        overflow: hidden;
    }

    .character {
        padding: 10px 0 10px 0;
    }

    .character-card {
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 50% 50%;
        overflow-y: scroll;
    }
</style>
