<template>
    <div class="mb-5 col-lg-4 col-md-6 col-sm-12 mouse-hover">
        <div class="card mx-auto border border-1 shadow-sm" style="width: 90%">
            <router-link :to="'/products/'+item.idSvd" draggable="false">
                <img :src='item.image' class="card-img-top" width="250" height="200" draggable="false">
            </router-link>
            
            <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <div class="card-text d-flex justify-content-between p-1">
                    <div class="text-start">{{ $filters.filterMoney(item.price) }}</div>
                    <div class="text-end fs-2">
                        <i 
                            class="fa-solid" 
                            :class="[item.status
                                    ?'fa-circle-xmark text-danger' 
                                    :'fa-circle-check text-success']"></i>
                    </div>
                </div>
                <div class="text-end text-white">
                    <router-link :to="'/products/'+item.idSvd">
                        <button class="btn btn-primary px-5">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        'item': Object()
    },
    data: () => {
        return{
            icon: true
        }
    },
    methods: {
        changeIcon(){
            this.icon = !this.icon
        }
    },
}
</script>

<style>

</style>