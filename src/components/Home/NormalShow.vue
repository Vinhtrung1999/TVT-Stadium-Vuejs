<template>
    <div>
        <h2 class="text-center mt-3">Normal Stadiums</h2>
        <div class="show-AD bg-white d-lg-flex d-sm-block border border-1 align-items-center">
            <div class="vip-des w-100 p-3" style="font-size:1.2rem">
                Construction of a 6,300-seat professional soccer stadium is expected to start next summer, with the first kick in spring 2024, a representative of developer Krause+ told city officials Tuesday. 
                <br>
                Development of the surrounding 60 acres on the southwestern edge of downtown will be "pushed along" by the USL Championship stadium's progress, Nate Easter, director of commercial development for Krause+, told the city's Urban Design Review Board. The envisioned stadium district encompasses the now nearly demolished former Dico Superfund site and is roughly bounded by Fleur Drive to the west, Southwest 11th Street to the east, Martin Luther King Jr. Parkway to the north and the Raccoon River to the south. 
                <br>
                "We are very early in, I wouldn't even say the design phase, but the conceptual development phase," Easter said. "We are a little further along with the stadium."
            </div>
            <div id="carousel-Normal" class="carousel carousel slide w-100 p-3" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carousel-Normal" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carousel-Normal" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carousel-Normal" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <template v-for="(item, index) in NMShow" :key='index'>
                        <div 
                            class="carousel-item" 
                            data-bs-interval="10000"
                            :class="[index == 0 ? 'active' : '']">
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
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel-Normal" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel-Normal" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
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
        'NMShow'
    ]
}
</script>

<style>

</style>