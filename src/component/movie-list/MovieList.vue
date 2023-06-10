<template>
    <ul class="movie-list list-group">
     <MovieListItem 
      v-for="movie in movies"
      :movies='movie'
      @onLike="$emit('onLike',movie.id)"
      />
    </ul>
</template>
<script>
import MovieListItem from '@/component/movie-list-item/MovieListItem.vue'
export default {
    components:{
        MovieListItem
    },
    props:{
        movies:{
            type: Array,
            required:true
        }
    }
}
</script>
<style scoped>
     .move-list{
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfaf5;
    box-shadow: 15px 15px rgba(0, 0, 0, 0.15);
     }
</style>