<template>
    <div class="footer-page">
        <div class="footer-logo">
            <img src="/XztNn3f.png" alt="">
        </div>
        <div class="footer-content">
            <div>CÔNG TY TNHH CUNG CẤP SÂN BÓNG ĐÁ TVT-STADIUM</div>
            <div>ĐỊA CHỈ: XXX LÊ THÁNH TÔN, PHƯỜNG XXX, QUẬN XX, TP HỒ CHÍ MINH</div>
            <div>THÔNG TIN LIÊN HỆ: (+84) 55022404</div>
            <div>EMAIL: TVT_STADIUM.OFFICAL@gmail.com</div>
            <div>QUY ĐỊNH ĐẶT SÂN: THEO DÕI THÔNG TIN TRÊN WEBSITE</div>
            <div>THỜI GIAN MỞ CỬA: 5:00 A.M - 23:59 P.M</div>
            <div>THÔNG TIN CUNG CẤP CHÍNH THỐNG - CHỐNG CHỈ ĐỊNH TRÊN TẤT CẢ WEBSITE KHÁC</div>
            <div>SẢN PHẨM ĐỘC QUYỀN ĐƯỢC ĐĂNG KÝ - COPYRIGHT © 2022 TVT-STADIUM ® ALL RIGHT RESERVED</div>
            <div>NGƯỜI ĐẠI DIỆN: TRẦN VĨNH TRUNG</div>
        </div>
        <div class="social-media">
            <div class="pd-5"><i class="fa-brands fa-facebook"></i></div>
            <div class="pd-5"><i class="fa-brands fa-facebook-messenger"></i></div>
            <div class="pd-5"><i class="fa-brands fa-instagram-square"></i></div>
            <div class="pd-5"><i class="fa-brands fa-twitter"></i></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .footer-page{
        background-image:linear-gradient(45deg, #ffffffd6 50%, #8b8b8b6c), url('/asad.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        font-size: .9rem;
    }

    @media only screen and (max-width: 600px) {
        .footer-page{
            display: block;
            font-size: .75rem;
            text-align: center;
            font-weight: 800;
        }
        .pd-5{
            display: inline;
            margin: 20px;
        }
    }
</style>