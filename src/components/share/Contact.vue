<template>
    <div class="contact-sheet">
        <a href="tel:0855022404">
            <button class="btn btn-success rounded-circle fs-1 px-3 text-white btn-ring">               
                <i class="fa-solid fa-phone-volume"></i>  
            </button>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .contact-sheet{
        position: fixed;
        z-index: 1000;
        bottom: 20px;
        right: 10px;
    }

    .btn-ring{
        animation: ring 1s ease infinite;
    }



    @keyframes ring {
        0%{
            transform: rotate(0deg);
            box-shadow: 0px 0px 3px 3px #d7d7d79d;
        }
        
        50%{
            transform: rotate(-20deg);
            box-shadow: 0px 0px 5px 10px #e3e3e3a3;
        }

        100%{
            transform: rotate(0deg);
            box-shadow: 0px 0px 3px 3px #d7d7d79d;
        }
    }
</style>