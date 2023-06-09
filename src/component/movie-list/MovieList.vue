<template>
    <ul class="movie-list list-group">
     <MovieListItem />
     <MovieListItem />
     <MovieListItem />
    </ul>
</template>
<script>
import MovieListItem from '@/component/movie-list-item/MovieListItem.vue'
export default {
    components:{
        MovieListItem
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