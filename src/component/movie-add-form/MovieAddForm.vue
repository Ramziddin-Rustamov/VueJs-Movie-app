<template>
    <div class="movie-add-form pt-4 mt-3">
        <h3>Add new one ! </h3>
        <form action="" class="add-form d-flex">
            <input type="text"  class="form-control new-movie-label" placeholder="What type ?">
            <input type="text"  class="form-control new-movie-label" placeholder="How many times was seen ?">
            <button class="btn btn-outline-dark">Add</button>
        </form>
    </div>
</template>

<script>
export default {
    
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