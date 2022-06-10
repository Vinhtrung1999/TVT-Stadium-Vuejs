<template>
    <div class="mt-3">
        <transition v-show="!status_page">
            <div class=" text-center p-5" style="height: 85vh">
                <i class="fa-solid fa-spinner fs-1 load"></i>
            </div>        
        </transition>
        <transition name="show-list">
            <div v-show="status_page">
                <div class="row">
                    <template v-for="(item, index) in list_stadiums_show" :key="index">
                        <CardProduct :item="item" />
                    </template>
                </div>
                <div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item">
                                <button
                                    data-num="0"
                                    class="page-link"
                                    @click="changePage($event)"
                                >1</button>
                            </li>
                            <li class="page-item">
                                <button
                                    data-num="1"
                                    class="page-link"
                                    @click="changePage($event)"
                                >2</button>
                            </li>
                            <li class="page-item">
                                <button
                                    data-num="2"
                                    class="page-link"
                                    @click="changePage($event)"
                                >3</button>
                            </li>

                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>        
        </transition>

           

    </div>
</template>

<script>
import axios from 'axios'
import CardProduct from './CardProduct.vue'

export default {
    components:{
        CardProduct
    },
    data: () => {
        return {
            list_stadiums: null,
            length: 0,
            list_stadiums_show: null,
            n_start: 0,
            n_end: 6,
            status_page: false
        }
    },
    async created(){
        let response = await axios.get('https://tvt-stadium.herokuapp.com/api/svd/getSvd')
        this.list_stadiums = response.data.data
        this.list_stadiums_show = response.data.data.slice(this.n_start, this.n_end)
        this.length = response.data.data.length
        this.status_page = !this.status_page
    },
    computed:{
        custom(){
            return this.msg + ' Com'
        }
    },
    methods: {
        changePage(event){
            let numPage = event.target.dataset.num
            
            let start = this.n_start + (6 * parseInt(numPage))
            if(start >= this.length)
                start = this.length
            let end = this.n_end + (6 * parseInt(numPage))
            if(end >= this.length)
                end = this.length
            console.log(start)
            console.log(end)
            this.list_stadiums_show = this.list_stadiums.slice(start, end)
        },
    },
}
</script>

<style scoped>
    .show-list-enter-active,
    .show-list-leave-active {
        animation: slide-on-img .3s ease-in;
    }

    @keyframes slide-on-img {
        0%{

            transform: translateY(100px);
        }
        100%{

            transform: translateY(0px);
        }
    }
</style>