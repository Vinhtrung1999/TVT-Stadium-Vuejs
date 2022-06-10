<template>
    <div>
        <h1>Recommend Stadium</h1>
        <div class="rcm-bar">
            <template v-for="(item, index) in dataResponse_rcm" :key="index">
                <div class="rcm-item mx-3">
                    <div class="rcm-item-img">
                        <router-link :to="'/products/'+item.idSvd" draggable="false">
                            <img 
                                :src="item.image"
                                alt=""
                                width="300"
                                height="150"
                                draggable="false">
                        </router-link>
                    </div>                  
                    <div class="rcm-item-title">{{ svdInfo_rcm.name }}</div>  
                </div>
            </template>
            
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'svdInfo',
        'dataResponse'],
    data:() => {
        return{
            svdInfo_rcm: null,
            dataResponse_rcm: []
        }
    },
    watch:{
        svdInfo(newValue, oldValue){
            this.svdInfo_rcm = newValue
        },
        dataResponse(newValue, oldValue){
            newValue.forEach((val) => {
                if(val.type == this.svdInfo_rcm.type){
                    this.dataResponse_rcm.push(val)
                }
            })
            
        }
    }
}
</script>

<style scoped>
    .rcm-bar{
        display: flex;
        margin: 10px;
        overflow-x: scroll;
    }
</style>