<template>
  	<nav class="navbar navbar-expand-lg navbar-light bg-header sticky-top shadow-sm bg-body rounded">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/XztNn3f.png" alt="" draggable="false" height="33">
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link
                            to="/"
                            class="nav-link px-5 fs-5"
                            active-class="active"
                        >Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link
                            to="/products"
                            class="nav-link px-5 fs-5"
                            active-class="active"
                        >Products</router-link>
                    </li>
                </ul>
            </div>
        </div>
	</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
    .bg-header{
        background-image:linear-gradient(45deg, #ffffffd6 50%, #8b8b8b6c), url('/asad.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .active{
        border: solid 1px #ffffffd6;
        background-color: #48484862;
        border-radius: 5px;
        color: #ffffff !important;
    }
</style>