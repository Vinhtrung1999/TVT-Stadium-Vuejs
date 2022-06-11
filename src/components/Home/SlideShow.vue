<template>
    <div id="carouselExampleIndicators" class="carousel slide m-auto" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <template v-for="(item, index) in SlideShow" :key="index">
                <div class="carousel-item" :class="[index == 0 ? ' active' : '']">
                <img 
                    :src="item.image" 
                    class="d-block w-100"
                    height="500"
                    style="" 
                    alt="..."
                    draggable="false">
                </div>  
                <div class="carousel-caption d-none d-md-block">
                    <h5>WELCOME TO TVT-STADIUM....</h5>
                </div>              
            </template>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    props:[
        'SlideShow'
    ]

}
</script>

<style scoped>
    .slide{
        width: 70%;
    }
    @media screen and (max-width: 800px) {
        .slide{
            width: 100%;
        }
    }
</style>