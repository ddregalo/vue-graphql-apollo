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
                <div>
                    <b-button block href="#" v-b-toggle="'accordion' + character.name.trim()" variant="info">Movies</b-button>
                    <b-collapse :id="'accordion' + character.name.trim()" visible accordion="my-accordion" role="tabpanel">
                        <b-card-text>Movies listed here</b-card-text>
                        <b-card-text>{{ text }}</b-card-text>
                    </b-collapse>
                </div>
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

    .movies {
        min-width: 207px;
        background-color: rgb(17, 0, 255);
        font-weight: 500;
    }

    #acordion-1 {
        min-width: 190px;
        max-width: 200px;
    }
</style>
