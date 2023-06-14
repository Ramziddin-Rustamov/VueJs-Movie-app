<template>
    <Box>
     <p class="fs-3 text-uppercase">All movies {{ allMoviesCount }}</p>  
     <p class="fs-3 text-uppercase">Already seen movies {{ favouriteMoviesCount }}</p>  
    </Box>
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
</style>