<template>
    <div class="app font-monospace ">
        <div class="content">
            <AppInfo/>
            <div class="search-panel">
                <SearchPanel/>
                <AppFilter/>
                <MovieList/>
            </div>
            <MovieAddForm/>
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