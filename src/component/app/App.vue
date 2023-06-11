<template>
    <div class="app font-monospace ">
        <div class="content">
            <AppInfo 
            :allMoviesCount="movies.length"
            :favouriteMoviesCount="movies.filter(a => a.favourite).length"
            />
            <div class="search-panel">
                <SearchPanel :updateTermHandler="updateTermHandler"/>
                <AppFilter/>
                <MovieList 
               :movies="onSearchHandler(movies , term)"
               @onTogle="onTogleHandler"
               @onRemove="onRemoveHandler"
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
            term : '', 
            movies:[
                {
                    id:1,
                    name:'Umar',
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
                    name:'Good',
                    viewers:811,
                    favourite:true,
                    like:true
                },
                {
                    id:4,
                    name:'aaaa',
                    viewers:811,
                    favourite:true,
                    like:true
                }
            ], 
        }
    },
    methods:{
        createMovie(item){
            this.movies.push(item)
        },
        onTogleHandler({id , prop}){
           this.movies =  this.movies.map(item => {
                if(item.id == id){
                   return {...item, [prop]: !item[prop]}
                }
                return item     
            });
        },
        onRemoveHandler(id){
            this.movies = this.movies.filter(c => c.id != id)
        },
        onSearchHandler(arr, term){
            if(term.length == 0){
                return arr
            }
            return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
        },
        updateTermHandler(term){
            this.term = term 
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