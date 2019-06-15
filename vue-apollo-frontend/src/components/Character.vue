<template>
    <div class="character">  
        <b-card :title="role.name">
            <b-card-text>
                <div class="character-card">
                    <p>Gender: </p>
                    <p>{{role.gender}}</p>
                    <p>Eye-Color: </p>
                    <p>{{role.eye_color}}</p>
                </div>
            </b-card-text>
            <div slot="footer">
                <div>
                    <b-button 
                        block href="#" 
                        v-b-toggle="'accordion' + role.name.trim()" 
                        variant="info">Movies
                    </b-button>
                    <b-collapse :id="'accordion' + role.name.trim()" visible accordion="movie-accordion" role="tabpanel">
                        <b-card-text>Movies listed here:</b-card-text>
                        <b-card-text>{{ character.films.title }}</b-card-text>
                    </b-collapse>
                </div>
            </div>
        </b-card>
    </div>
</template>
<script lang="js">
    import gql from 'graphql-tag';

    export default {
        name: "character",
        props: {
            role: {},
        },
        apollo: {
            character: gql`
                query {
                    character(id: 1) {
                        films {
                            title
                        }
                    }
                }
            `
        },
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
