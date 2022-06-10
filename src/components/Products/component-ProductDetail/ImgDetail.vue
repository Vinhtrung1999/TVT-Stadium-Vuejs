<template>
    <div class="col-lg-6 col-sm-12 d-lg-flex d-sm-block">
        <div class="img-show">
            <transition name="img-show">
                <img 
                    v-show="show_img"
                    :src='img_show' 
                    alt="Image show" 
                    style="height:300px; width: 600px;" 
                    class="shadow-sm img-fluid"
                    draggable="false">                        
            </transition>
            
        </div>
        <div class="img-stack p-1">
            <img 
                draggable="false"
                @click="changeImage($event)" 
                :data-img="svdInfo.image"
                :data-tag="1" 
                class="d-lg-block d-sm-inline m-2 img-fluid mouse-hover" 
                :src='svdInfo.image' 
                :class="{'border border-3 border-primary': img_1_active}"
                alt=""
                style="height:80px;"
                width="150">
            <img 
                draggable="false"
                @click="changeImage($event)"
                :data-img="svdInfo.image_detail_1" 
                :data-tag="2"
                class="d-lg-block d-sm-inline m-2 img-fluid  mouse-hover" 
                :src='svdInfo.image_detail_1' 
                :class="{'border border-3 border-primary': img_2_active}"
                alt=""
                style="height:80px;" 
                width="150">
            <img 
                draggable="false"
                @click="changeImage($event)" 
                :data-img="svdInfo.image_detail_2" 
                :data-tag="3"
                class="d-lg-block d-sm-inline m-2 img-fluid  mouse-hover" 
                :src='svdInfo.image_detail_2' 
                :class="{'border border-3 border-primary': img_3_active}"
                alt=""
                style="height:80px;" 
                width="150">
        </div>
    </div>
</template>

<script>
export default {
    props:{
        svdInfo: Object(),
        img_show_props: String
    },
    data:() => {
        return {
            img_show: "",
            img_1_active: true,
            img_2_active: false,
            img_3_active: false,
            show_img: true    
        }
    },
    methods: {
        changeImage (event){
            this.show_img = !this.show_img
            this.img_show = event.target.dataset.img
            let numTag = event.target.dataset.tag
            if(numTag == 1){
                this.img_1_active = true
                this.img_2_active = false
                this.img_3_active = false
            }
            else if(numTag == 2){
                this.img_1_active = false
                this.img_2_active = true
                this.img_3_active = false
            }
            else{
                this.img_1_active = false
                this.img_2_active = false
                this.img_3_active = true
            }

            setTimeout(() => {
                this.show_img = !this.show_img
            }, 200)


            
        }
    },
    watch:{
        img_show_props(newQuestion, oldQuestion) {
            this.img_show = this.img_show_props
        }
    }
}
</script>

<style scoped>

    .img-show-enter-active,
    .img-show-leave-active {
        animation: slide-on-img .3s ease-in;
    }

    .img-show-enter-from,
    .img-show-leave-to {
        animation: slide-off-img .3s ease-out;
        opacity: .8;
    }

    @keyframes slide-on-img {
        0%{

            transform: translateX(-10px);
        }
        100%{

            transform: translateX(0px);
        }
    }

    @keyframes slide-off-img {
        0%{

            transform: translateX(0px);
        }
        100%{

            transform: translateX(-10px);
        }
    }



</style>