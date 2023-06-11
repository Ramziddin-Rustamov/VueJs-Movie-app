<template>
    <div>
        <input type="text"
        class="form-control search-input my-3" 
        placeholder="Search movies" 
        autofocus
        :value="term"
        @input="changeHandler" 
        id="">
        <!-- @input every time input was changed it changed directly ! -->
    </div>
</template>

<script>
export default {
    props: {
        updateTermHandler: {
            type: Function,
            required: true
        }
    },
    data(){
        return{
            term : ''
        }
    },
    methods:{
        changeHandler(e){
            this.term  = e.target.value
            this.updateTermHandler(this.term)
        }
    }
}
</script>

<style scoped>
 .search-input{
    margin-top: 2rem;
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfaf5;
    box-shadow: 15px 15px rgba(0, 0, 0, 0.15);
 }
</style>