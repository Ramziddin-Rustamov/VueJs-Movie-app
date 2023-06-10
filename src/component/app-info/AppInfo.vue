<template>
    <div class="app-info">
     <p class="fs-3 text-uppercase">All movies {{ allMoviesCount }}</p>  
     <p class="fs-3 text-uppercase">Already seen movies {{ favouriteMoviesCount }}</p>  
    </div>
</template>
<script>
export default{
  props:{
    allMoviesCount:{
        type: Number,
        required :true
    },   
    favouriteMoviesCount:{
            type:Number,
            required:true
        }
  }
}
</script>

<style scoped>
.app-info{
    padding: 1.5rem;
    border-radius: 4px;
    background-color: #fcfaf5;
    box-shadow: 15px 15px rgba(0, 0, 0, 0.15);
}
</style>