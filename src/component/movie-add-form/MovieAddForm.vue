<template>
    <div class="movie-add-form pt-4 mt-3">
        <h3>Add new one ! </h3>
        <form  class="add-form d-flex" @submit.prevent >
            <input type="text"  class="form-control new-movie-label" 
             placeholder="What type ?" 
             :value="name"
             @input="name = $event.target.value"
             />
            <input type="text" 
            class="form-control new-movie-label"
             placeholder="How many times was seen ?"
             :value="viewers"
             @input="viewers = $event.target.value"
             />
            <button 
            class="btn btn-outline-dark" type="submit" @click="addMovie"
            >
            Add
          </button>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name :'',
            viewers: ''
        }
    },
    methods:{
        addMovie(e){
            const movies = {
                id: Date.now(),
                name: this.name,
                viewers: this.viewers,
                favourite: false,
                like: false,
            }
            this.$emit('createMovie',movies)
            this.id = '',
            this.name = '',
            this.viewers = '',
            this.favourite = false,
            this.like = false
        }
    }
}
</script>

<style scoped>
    .movie-add-form{
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfaf5;
    box-shadow: 15px 15px rgba(0, 0, 0, 0.15);
    }
</style>