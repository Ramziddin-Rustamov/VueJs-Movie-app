<template>
    <div class="app font-monospace ">
        <div class="content">
            <AppInfo 
            :allMoviesCount="movies.length"
            :favouriteMoviesCount="movies.filter(a => a.favourite).length"
            />
            <div class="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <MovieList 
               :movies="movies"
               @onLike="onLikeCatch"
               />
            </div>
            <MovieAddForm @createMovie="createMovie"/>
        </div>
    </div>
</template>

<script>
import AppInfo from '@/component/app-info/AppInfo.vue'
import SearchPanel from '@/component/search-panel/SearchPanel.vue'
import AppFilter from '@/component/app-filter/AppFilter.vue'
import MovieList from '@/component/movie-list/MovieList.vue'
import MovieAddForm from '@/component/movie-add-form/MovieAddForm.vue'

 export default{
    components:{
        AppInfo,
        SearchPanel,
        AppFilter,
        MovieList,
        MovieAddForm
    },
    data(){
        return{
            movies:[
                {
                    id:1,
                    name:'Oamr',
                    viewers:811,
                    favourite:true,
                    like:true
                },
                {
                    id:2,
                    name:'Last time',
                    viewers:544,
                    favourite:true,
                    like:true
                },
                {
                    id:3,
                    name:'Good health',
                    viewers:811,
                    favourite:true,
                    like:true
                },
                {
                    id:4,
                    name:'Good boy',
                    viewers:811,
                    favourite:false,
                    like:false
                }
            ]
        }
    },
    methods:{
        createMovie(item){
            this.movies.push(item)
        },
        onLikeCatch(id){
            const arr = this.movies.map(item => {
                if(item.id == id){
                   item.like = !item.like
                }
                return item     
            })
            // console.log(arr,like);
        }
    }
}
</script>

<style>
 .app{
    height: 100vh;
    color: rgb(7, 7, 7);
 }
 .content{
    width: 1000px;
    min-height: 700px;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    padding: 5rem 0;
 }
 .search-panel{
    margin-top: 2rem;
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfaf5;
    box-shadow: 15px 15px rgba(0, 0, 0, 0.15);
 }
</style>