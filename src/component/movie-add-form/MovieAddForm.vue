<template>
    <div class="movie-add-form pt-4 mt-3">
        <h3>Add new one ! </h3>
        <form  class="add-form d-flex" @submit.prevent >
          <Input
           class="new-movie-label"  
             placeholder="What type ?" 
             @input="name = $event.target.value"
              />
            <Input
           class="new-movie-label"  
             placeholder="Viewers number ?" 
             @input="viewers = $event.target.value"/>

            <PrimaryButton 
            class="btn btn-outline-dark" type="submit" @click="addMovie"
            >
            Add
          </PrimaryButton>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            name :'',
            viewers: '',
        }
    },
    methods:{
        addMovie(e){
            if(!this.name || !this.viewers){
                return alert('Please fill the form with information !')
            }
            const movies = {
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