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
                        <b-card-text class="movie">{{ character.films.title }}</b-card-text>
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
            id: {},
        },
        apollo: {        
            character: {
                query: 
                    gql`
                        query character($id: Int!) {
                                character(id: $id) {
                                    films {
                                        title
                                    }
                                }
                        }
                    `,
                variables() {
                    return {
                        id: this.id,
                    }
                },
            }, 
        },
    }
</script>
<style lang="scss" scoped>
    p {
        padding: 2px;
    }

    .card-body {
        max-height: 170px;
        min-width: 210px;
        max-width: 210px;
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

    .movie {
        padding: 12px 8px 12px 8px;
    }

    #acordion-1 {
        min-width: 190px;
        max-width: 200px;
    }
</style>
