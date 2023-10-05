<script>

export default {
    name: 'AppTestimonials'
}

</script>


<template>
    <div id="testimonials">
        <h1>testimonials</h1>
        <div class="slider container_90">
            <div class="container">
                <div class="card">
                    <img src="../assets/img/h3-img-04.png" alt="">
                    <h5>cynthia clark</h5>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium asperiores quis repellat
                        eius, ad suscipit molestias temporibus quos.
                    </p>
                    <div class="slider_menu">
                        <div>01</div>
                        <div class="slider_bars">
                            <div class="bar active"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                        <div>03</div>
                    </div>
                </div>
            </div>
            <!-- /.container -->
            <div class="commands">
                <div class="prev" @click="prevImage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="height:20px;">
                        <path
                            d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                    </svg>
                </div>
                <div class="next" @click="nextImage">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="height:20px">
                        <path
                            d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                    </svg>
                </div>
            </div>
        </div>
        <!-- /.slider container_90 -->
    </div>
</template>