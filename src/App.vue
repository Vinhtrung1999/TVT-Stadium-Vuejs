<template>
	<div class="bg-base">
		<Header></Header>
		<div class="img-base"></div>
		<div class="container">
			<router-view></router-view>
		</div>
		<Contact/>
		<Footer></Footer>	
	</div>
</template>

<script>
import Header from './components/share/Header.vue'
import Footer from './components/share/Footer.vue'
import Contact from './components/share/Contact.vue'

export default {
	components:{
		Header,
		Contact,
		Footer
	}
}
</script>

<style>
	body{
		font-family: 'Exo 2', sans-serif;
		font-weight: 600;
		font-size: 100%;
	}

	.mouse-hover:hover{
		opacity: .9;
		cursor: pointer;
	}
	.link-custom{
		text-decoration: none;
		color: #000000;
	}
	.bg-base{
		position: relative;
	}
	.img-base{
		background-image: url('https://t4.ftcdn.net/jpg/01/03/58/23/360_F_103582325_RvLnlmw0jiS6I0eY5XVlH6kNqlL0M1Td.jpg');
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: -1;
	}
	    .load{
        animation: load .8s ease-out infinite;
    }

    .slider-left-enter-active,
    .slider-left-leave-active {
        animation: slide-on .3s ease-in forwards;
    }

    .slider-left-enter-from,
    .slider-left-leave-to {
        animation: slide-off .3s ease-out forwards;
    }

    @keyframes load {
        0%{
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
</style>