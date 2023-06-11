<template>
  <div class="btn-group py-3">
      <!-- <button class="btn" :class="[filterName=='all' ? 'btn-primary':'btn-outline-primary']" type="button" @click="FilterHandler('all')">All</button>
      <button class="btn" :class="[filterName=='popular' ? 'btn-primary':'btn-outline-primary']" type="button" @click="FilterHandler('popular')">Famous !</button>
      <button class="btn" :class="[filterName=='mostViewers' ? 'btn-primary':'btn-outline-primary']"  type="button"  @click="FilterHandler('mostViewers')">Most Seen ! </button> -->
      <button 
      v-for="btn in filterButtons"
      class="btn"
      type="button" 
      :class="[filterName==btn.name ? 'btn-dark':'btn-outline-primary']"
      @click="FilterHandler(btn.name)"
      :key="btn.name"
      >
       {{btn.title}}
       </button>
    </div>
</template>
<script>
export default {
  props:{
    updateFilterHandler:{
      type:Function,
      required:true
    },
    filterName:{
      type : String,
      required : true
    }
  },
    data(){
      return {
        filter: "all",
        filterButtons : [
          {
            'title':'All',
            'name':'all',
          },
          {
            'title':'Popular',
            'name':'popular',
          },
          {
            'title':'Most Viewed',
            'name':'mostViewers',
          }
        ]
      }
    },
    methods:{
      FilterHandler(filterType){
        this.filter = filterType
        this.updateFilterHandler(this.filter)
      }
    }
}
</script>
<style>
    
</style>