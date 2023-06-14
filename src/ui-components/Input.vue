<template>
        <input type="text" class='form-control' :value="modelValue" @input="updateInput" />
</template>
<script>
export default {
    name:"Input",
    props:{
        modelValue :[Number, String ]
    },
    methods:{
        updateInput(e){
            this.$emit('updateModelValue',e.target.value)
        }
    }

}
</script>
<style>
    
</style>