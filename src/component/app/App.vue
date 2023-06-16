<template>
    <div class="app font-monospace ">
        <div class="content">
            <AppInfo 
            :allMoviesCount="movies.length"
            :favouriteMoviesCount="movies.filter(a => a.favourite).length" />
            <div class="search-panel">
                <SearchPanel :updateTermHandler="updateTermHandler"/>
                <AppFilter :updateFilterHandler="updateFilterHandler" :filterName='filter'/>
            </div>
                <Box class="fs-2 text-danjer text-center" v-if="!movies.length && !isLoading">There is no movie available here  !</Box>
                <Loader class="fs-2 text-success text-center" v-else-if="isLoading">Loading..</Loader>
                <MovieList v-else
               :movies="onFilterHandler(onSearchHandler(movies , term),filter)"
               @onTogle="onTogleHandler"
               @onRemove="onRemoveHandler"
               />

               <Box class="d-flex justify-content-end">
                    <nav aria-label="pagination">
                        <ul class="pagination pagination-md pointer">
                            <li  v-for="pageNumber in totalPage" class="pointer page-item"
                             aria-current="page"
                            :class="{'active':pageNumber == page}"
                            :key="pageNumber"
                            @click="changePage(pageNumber )"
                            >
                            <span class="page-link pointer">{{pageNumber}}</span>
                            </li>
                        </ul>
                    </nav>
               </Box>
            
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
import axios from "axios"

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
            filter : 'all', 
            movies:[], 
            isLoading:false,
            limit:10,
            page:1,
            totalPage: 0
        }
    },
    mounted() {
      this.fetchMovie()
    },
    methods:{
        async createMovie(item){
         try {
            const response  =  await axios.post('https://jsonplaceholder.typicode.com/posts',item)
            this.movies.push(item)
         } catch (error) {
            alert(error.message)
         }
        },
        onTogleHandler({id , prop}){
           this.movies =  this.movies.map(item => {
                if(item.id == id){
                   return {...item, [prop]: !item[prop]}
                }
                return item     
            });
        },
         async onRemoveHandler(id){
            try {
                const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                 this.movies = this.movies.filter(c => c.id != id)
            } catch (error) {
                console.log(error.message)
            }
        },
        onSearchHandler(arr, term){
            if(term.length == 0){
                return arr
            }
            return arr.filter(c => c.name.toLowerCase().indexOf(term) > -1)
        },
        updateTermHandler(term){
            this.term = term 
        },
        onFilterHandler(arr, filter){
            switch (filter) {
                case "popular":
                    return arr.filter(c => c.like)
                    break;
                case "mostViewers":
                    return arr.filter(c => c.viewers >5)
                    break;            
                default:
                    return arr
                    break;
            }
        },
        updateFilterHandler(filter){
            this.filter = filter;
        },
        async fetchMovie(){
          try {
            this.isLoading = true
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                params:{
                    _limit : this.limit,
                    _page : this.page,
                }
            })
            const newArr = response.data.map(item =>({
                id: item.id,
                name :item.title,
                like: false,
                favourite:false,
                viewers:item.id *10 /2
            }));
            this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
            this.movies = newArr
          } catch (error) {
              alert(error.message)
          }finally{
              this.isLoading = false
          }
        },
        changePage(page){
            this.page = page
        }
    },
    watch:{
        page(){
            this.fetchMovie()
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