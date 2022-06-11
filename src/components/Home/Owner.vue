<template>
    <div class="mt-3">
        <div class="text-center bg-white m-auto p-3 ownerTag border border-1">
            <img class="rounded-circle" width="100" height="100" src="/owner.jpg" alt="" draggable="false">
            <div>
                <p>This is <b class="text-danger">Tran Vinh Trung</b>'s personal product, please do not copy or attack. Thank you!</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .ownerTag{
        width: 30%;
    }
    @media screen and (max-width: 800px) {
        .ownerTag{
            width: 60%;
        }
    }
</style>