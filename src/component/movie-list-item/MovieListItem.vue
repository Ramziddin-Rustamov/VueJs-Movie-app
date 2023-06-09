<template>
       <li class="list-group-item favourite d-flex justify-content-between ">
        <span class="list-group-item-label ">Label</span>
        <input type="number" class="list-group-item-input" defaultValue="111" >
        <div class=" justify-content-center d-flex align-items-center ">
            <button type="button" class="btn-cookie btn-sm">
                <i class="fas fa-cookie"></i>
            </button>
            <button type="button" class="btn-trash btn-sm">
                <i class="fas fa-trash"></i>
            </button>
            <button type="button" class="btn-star btn-sm">
                <i class="fas fa-star"></i>
            </button>
        </div>
        </li>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .list-group-item{
        padding: 15px 20px;
        border-bottom: 1px solid #3d3d3d;
        border: 0;
    }
    .list-group-item:last-child{
        border-bottom: none;
    }
    .list-group-item span{
        line-height: 35px;
        font-size: 20px;
        cursor: pointer;
        width: 550px;
    }
    .list-group-item input{
        line-height: 35px;
        outline: none;
        font-size: 20px;
        text-align: center;
        border: 0;
    }

    .list-group-item button{
        width: 35px;
        height: 35px;
        margin: 3px;
        font-size: 17px;
        cursor: pointer;
        border: none;
    }
    .list-group-item .btn-cookie{
        color: rgb(208, 188, 107);
    }
    .list-group-item .btn-trash{
        color: rgb(185, 27, 27);
    }
    .list-group-item .btn-star{
        widows: 35px;
        height: 35px;
        text-align: center;
        line-height: 15px;
        font-size: 15px;
        color: rgb(235, 190, 11);
        transition: 0.3s all;
        transform: translateX(30px);
        opacity: 0;
    }
    .list-group-item.like .btn-star{
        opacity: 1;
        transform: translateX(0);
    }
    .list-group-item.favourite .list-group-item-label,
    .list-group-item.favourite .list-group-item-input{
        color: rgb(208, 188, 107);
    }
</style>