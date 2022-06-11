<template>
    <transition v-show="!status_page">
        <div class=" text-center p-5" style="height: 85vh">
            <i class="fa-solid fa-spinner fs-1 load"></i>
        </div>        
    </transition>
    
    <div class="my-3" v-show="status_page">
        <transition name="slide-show" v-show="status_page">
            <SlideShow :SlideShow="SlideShow" />
        </transition>
        <transition name="VIP-show" v-show="status_page">
            <VipShow :VIPShow='VIPShow'/>
        </transition>
        <transition name="NM-show" v-show="status_page">
            <NormalShow :NMShow="NMShow"/>
        </transition>
        <Owner />
        <VideoIntro />
    </div>    
    
</template>

<script>
import axios from 'axios'
import SlideShow from './SlideShow.vue'
import VipShow from './VipShow.vue'
import NormalShow from './NormalShow.vue'
import VideoIntro from './VideoIntro.vue'
import Owner from './Owner.vue'

export default {
    data: () => {
        return {
            status_page: false,
            listStadiums: [],
            listSlideShow: [],
            listVIP: [],
            listNM: []
        }
    },
    async created(){
        let response = await axios.get('https://tvt-stadium.herokuapp.com/api/svd/getSvd')
        this.listStadiums = response.data.data
        this.status_page = !this.status_page
    },
    computed:{
        SlideShow(){
            let pic_1 = Math.floor(Math.random() * this.listStadiums.length)
            let pic_2 = Math.floor(Math.random() * this.listStadiums.length)
            let pic_3 = Math.floor(Math.random() * this.listStadiums.length)
            this.listStadiums.forEach((val, index) => {
                if(index == pic_1 || index == pic_2 || index == pic_3){
                    this.listSlideShow = [...this.listSlideShow, val]
                }
            })

            if(this.listSlideShow.length && this.listSlideShow.length < 3){
                this.listSlideShow = [...this.listSlideShow, this.listStadiums[0]]
            }

            return this.listSlideShow
        },
        VIPShow(){
            let tempArr = this.listStadiums.filter((x) => x.type == 1)
            let pic_1 = Math.floor(Math.random() * tempArr.length)
            let pic_2 = Math.floor(Math.random() * tempArr.length)
            let pic_3 = Math.floor(Math.random() * tempArr.length)

            tempArr.forEach((val, index) => {
                if(index == pic_1 || index == pic_2 || index == pic_3){
                    this.listVIP = [...this.listVIP, val]
                }
            })

            if(this.listVIP.length && this.listVIP.length < 3){
                this.listVIP = [...this.listVIP, tempArr[0]]
            }

            return this.listVIP
        },
        NMShow(){
            let tempArr = this.listStadiums.filter((x) => x.type == 0)
            let pic_1 = Math.floor(Math.random() * tempArr.length)
            let pic_2 = Math.floor(Math.random() * tempArr.length)
            let pic_3 = Math.floor(Math.random() * tempArr.length)

            tempArr.forEach((val, index) => {
                if(index == pic_1 || index == pic_2 || index == pic_3){
                    this.listNM = [...this.listNM, val]
                }
            })

            if(this.listNM.length && this.listNM.length < 3){
                this.listNM = [...this.listNM, tempArr[0]]
            }

            return this.listNM
        }
    },
    components:{
        SlideShow,
        VipShow,
        NormalShow,
        VideoIntro,
        Owner
    }
}
</script>

<style scoped>
    .slide-show-enter-active,
    .slide-show-leave-active {
        animation: slideshow .6s ease-in;
    }

    @keyframes slideshow{
        0%{

            transform: translatex(100px);
        }
        100%{

            transform: translatex(0px);
        }
    }

    .VIP-show-enter-active,
    .VIP-show-leave-active {
        animation: VIPshow .6s ease-in;
    }

    @keyframes VIPshow{
        0%{

            transform: translateX(-100px);
        }
        100%{

            transform: translateX(0px);
        }
    }

    .NM-show-enter-active,
    .NM-show-leave-active {
        animation: NMshow .6s ease-in;
    }

    @keyframes NMshow{
        0%{

            transform: translateX(100px);
        }
        100%{

            transform: translateX(0px);
        }
    }
</style>