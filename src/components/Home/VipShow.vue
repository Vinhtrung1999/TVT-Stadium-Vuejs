<template>
    <div>
        <h2 class="text-center mt-3">VIP Stadiums</h2>
        <div class="show-AD bg-white d-lg-flex d-sm-block border border-1 align-items-center">
            <div id="carouselExampleDark" class="carousel carousel slide w-100 p-3" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <template v-for="(item, index) in VIPShow" :key="index">
                        <div 
                            class="carousel-item"
                            data-bs-interval="10000"
                            :class="[index == 0 ? 'active' :'']">
                            <img 
                                :src="item.image" 
                                class="d-block w-100" 
                                height="400"
                                alt="..."
                                draggable="false">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>{{ item.name }}</h5>
                                <p>{{ $filters.filterMoney(item.price) }}</p>
                            </div>
                        </div>                        
                    </template>
                    
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="vip-des w-100 p-3" style="font-size:1.2rem">
                The 6,400-seat stadium that will serve as home to Des Moines' new USL Championship pro soccer team is envisioned as the linchpin of a massive redevelopment of downtown's west end.
                <br>
                Construction of the stadium, once slated to begin this summer, won't start until later in the year. But it's still expected to be complete in time for the team's first games in spring 2024.
                <br>
                According to plans Krause +, the development arm of the company that owns the team and the Kum & Go convenience store chain, presented to the city in October, the facility will sit south of Martin Luther King Jr. Drive and just east of the Des Moines River. The land is part of the long-disused and now cleared Dico industrial property, a remediated Superfund site.
            </div>
        </div>
        <div class="text-center mt-3">
            <router-link to='/products'>
                <button class="btn btn-outline-secondary px-5 fw-bold">VIEW STADIUMS</button>
            </router-link>            
        </div>
    </div>
</template>

<script>
export default {
    props:[
        'VIPShow'
    ]
}
</script>

<style scoped>
</style>