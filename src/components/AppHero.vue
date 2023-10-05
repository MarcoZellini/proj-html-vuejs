<script>

export default {
    name: 'AppHero',
    data() {
        return {
            sliderIntervalID: null,
            indexActiveSlide: 0,
            slides: [
                '03.jpg',
                '02.png',
            ]
        }
    },
    methods: {
        getImageUrl(name) {
            return new URL(`../assets/img/rev-slider-main-home-img-${name}`, import.meta.url).href
        },
        nextImage() {
            if (this.indexActiveSlide < this.slides.length - 1) {
                this.indexActiveSlide++;
            } else {
                this.indexActiveSlide = 0;
            }
        },
        prevImage() {
            if (this.indexActiveSlide > 0) {
                this.indexActiveSlide--;
            } else {
                this.indexActiveSlide = this.slides.length - 1;
            }
        },
        startSlider() {
            this.sliderIntervalID = setInterval(() => {
                this.nextImage();
            }, 4000);
        },
        stopSlider() {
            clearInterval(this.sliderIntervalID);
        }
    },
    mounted() {
        this.startSlider();
    },
}

</script>

<template>
    <section id="hero">
        <div class="slider" @mouseover="this.stopSlider" @mouseleave="this.startSlider">
            <img class="img-fluid" :src="getImageUrl(this.slides[this.indexActiveSlide])" alt="">
            <div class="commands container_90">
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
            <div class="container">
                <div class="row">
                    <div class="col-7">
                        <div class="hero_content">
                            <h1 class="dotted">Our Team</h1>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt exercitationem
                                architecto
                                rem
                                cupiditate rerum cumque qui molestias porro modi? Iure quae blanditiis neque eius id
                                omnis
                                fugit sed
                                iusto quidem!
                            </p>
                            <div class="links">
                                <a href="#"><span class="text">read more</span><span class="arrow">&rarr;</span></a>
                                <a href="#"><span class="text">purchase</span><span class="arrow">&rarr;</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>