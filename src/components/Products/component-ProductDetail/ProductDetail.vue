<template>
    <div>
        <transition v-show="!status_page">
            <div class=" text-center p-5" style="height: 85vh">
                <i class="fa-solid fa-spinner fs-1 load"></i>
            </div>        
        </transition>
        <div v-show="status_page" class="row mt-3">
            <transition name="slider-left" v-show="status_page">
                <ImgDetail :svdInfo="svdInfo" :img_show_props="img_show" />
            </transition>
            <transition name="slider-right" v-show="status_page">
                <InfoDetail :svdInfo="svdInfo" />
            </transition>

            <transition name="slider-final" v-show="status_page">
                <ProductRecommend :svdInfo="svdInfo" :dataResponse="dataResponse"/>
            </transition>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import ImgDetail from './ImgDetail.vue'
import InfoDetail from './InfoDetail.vue'
import ProductRecommend from './ProductRecommend.vue'


export default {
    data: () => {
        return{
            dataResponse: null,
            svdInfo : {
                capacity: 0,
                idSvd: "",
                image: "",
                image_detail_1: "",
                image_detail_2: "",
                name: "",
                price: 0,
                status: 0,
                type: 0,
            },
            img_show : "",          
            status_page: false,
            idSvd_param: ''
        }
    },
    async mounted(){
        this.idSvd_param = this.$route.params.idSvd
        
        let response = await axios.get(`https://tvt-stadium.herokuapp.com/api/svd/getSvd`)
        response.data.data.forEach((val) => {
            if(val.idSvd == this.idSvd_param){
                this.svdInfo = val
            }
        })
        this.dataResponse = response.data.data
        this.img_show = this.svdInfo.image
        this.status_page = !this.status_page
    },
    components:{
        ImgDetail,
        InfoDetail,
        ProductRecommend
    },
    watch:{
        async '$route'(to, from){
            this.status_page = !this.status_page
            this.idSvd_param = to.params.idSvd
            let response = await axios.get(`https://tvt-stadium.herokuapp.com/api/svd/getSvd`)
            response.data.data.forEach((val) => {
                if(val.idSvd == this.idSvd_param){
                    this.svdInfo = val
                }
            })
            this.dataResponse = response.data.data
            this.img_show = this.svdInfo.image
            this.status_page = !this.status_page
        }
    }

}
</script>

<style scoped>
    .slider-left-enter-active,
    .slider-left-leave-active {
        animation: slide-on .3s ease-in forwards;
    }
    @keyframes slide-on {
        0%{
            opacity: .3;
            transform: translateX(-20px);
        }
        100%{
            opacity: .8;
            transform: translateX(0px);
        }
    }

    .slider-right-enter-active,
    .slider-right-leave-active {
        animation: slide-on-r .3s ease-in forwards;
    }

    @keyframes slide-on-r {
        0%{
            opacity: .3;
            transform: translateX(20px);
        }
        100%{
            opacity: .8;
            transform: translateX(0px);
        }
    }

    .slider-final-enter-active,
    .slider-final-leave-active {
        animation: slide-final-r .3s ease-in forwards;
    }

    @keyframes slide-final-r {
        0%{
            opacity: .3;
            transform: translateY(10px);
        }
        100%{
            opacity: .8;
            transform: translateY(0px);
        }
    }
</style>