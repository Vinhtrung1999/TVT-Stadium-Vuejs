<template>
    <div class="col-lg-6 col-sm-12 d-lg-flex d-sm-block">
        <div 
            style="width: 100%;"
            class="border border-1 border-secondary fs-4 bg-white p-3"
            >
            <div class="item-svd d-flex p-2">
                <div class="item-title" style="width: 40%;">ID</div>
                <div class="item-content">{{ svdInfo.idSvd }}</div>
            </div>

            <div class="item-svd d-flex p-2">
                <div class="item-title" style="width: 40%;">Tag</div>
                <div class="item-content">{{ svdInfo.name }}</div>
            </div>

            <div class="item-svd d-flex p-2">
                <div class="item-title" style="width: 40%;">Capacity</div>
                <div class="item-content">{{ svdInfo.capacity }}</div>
            </div>

            <div class="item-svd d-flex p-2">
                <div class="item-title" style="width: 40%;">Type</div>
                <div class="item-content">{{ svdInfo.type ? 'VIP' : 'Normal' }}</div>
            </div>

            <div class="item-svd d-flex p-2">
                <div class="item-title" style="width: 40%;">Price</div>
                <div class="item-content">{{ $filters.filterMoney(svdInfo.price) }}</div>
            </div>

            <div class="item-svd d-flex p-2">
                <div class="item-title" style="width: 40%;">Status</div>
                <div 
                    class="item-content"
                    :class="[svdInfo.status ? 'text-danger' : 'text-success']">
                        {{ svdInfo.status ? 'Ordered' : 'Available' }}
                </div>
            </div>
            <div class="text-end p-2">
                <button class="btn btn-secondary" @click="goBack()">Back</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['svdInfo'],
    methods:{
        goBack(){
            this.$router.push('/products')
        }
    }
}
</script>

<style>

</style>