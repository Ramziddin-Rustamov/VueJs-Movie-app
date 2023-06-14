<template>
  <div class="btn-group py-3">
      <PrimaryButton 
      v-for="btn in filterButtons"
      class="btn"
      type="button" 
      :class="[filterName==btn.name ? 'btn-dark':'btn-outline-primary']"
      @click="FilterHandler(btn.name)"
      :key="btn.name"
      >
       {{btn.title}}
       </PrimaryButton>
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