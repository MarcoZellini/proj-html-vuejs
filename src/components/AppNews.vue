<script>

export default {
    name: 'AppNews'
}

</script>


<template>
    <div id="latest_news">
        <div class="slider container_90">

            <div class="commands container_90">
                <div class="prev" @click="prevImage"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        style="height:20px">
                        <path
                            d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                    </svg>
                </div>

                <div class="container">
                    <h1 class="dotted">Latest News</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div class="divider"></div>
                    <div class="row slider">
                        <div class="col-4">
                            <div class="card">
                                <div class="card-top">
                                    <img class="img-fluid" src="../assets/img/h1-blog-img-03.jpg" alt="">
                                    <div class="tag">
                                        <font-awesome-icon :icon="['fas', 'tag']" />
                                        <span>business leading</span>
                                    </div>
                                </div>

                                <small>
                                    <font-awesome-icon :icon="['far', 'fa-clock']" />
                                    <span>May 5, 2019</span>
                                </small>
                                <small>
                                    <font-awesome-icon :icon="['far', 'user']" />
                                    <span>Amanda Doe</span>
                                </small>
                                <h4>next investment</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat soluta quod
                                    voluptatibus.
                                </p>
                                <a href="#" class="more">read more</a>
                            </div>
                        </div>
                        <!-- /.col-4 -->
                        <div class="col-4">
                            <div class="card">
                                <div class="card-top">
                                    <img class="img-fluid" src="../assets/img/h1-blog-img-04.jpg" alt="">
                                    <div class="tag">
                                        <font-awesome-icon :icon="['fas', 'tag']" />
                                        <span>business leading</span>
                                    </div>
                                </div>
                                <small>
                                    <font-awesome-icon :icon="['far', 'fa-clock']" />
                                    <span>May 5, 2019</span>
                                </small>
                                <small>
                                    <font-awesome-icon :icon="['far', 'user']" />
                                    <span>Amanda Doe</span>
                                </small>
                                <h4>team building</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat soluta quod
                                    voluptatibus.
                                </p>
                                <a href="#" class="more">read more</a>
                            </div>
                        </div>
                        <!-- /.col-4 -->
                        <div class="col-4">
                            <div class="card">
                                <div class="card-top">
                                    <img class="img-fluid" src="../assets/img/h1-blog-img-01.jpg" alt="">
                                    <div class="tag">
                                        <font-awesome-icon :icon="['fas', 'tag']" />
                                        <span>business leading</span>
                                    </div>
                                </div>
                                <small>
                                    <font-awesome-icon :icon="['far', 'fa-clock']" />
                                    <span>May 5, 2019</span>
                                </small>
                                <small>
                                    <font-awesome-icon :icon="['far', 'user']" />
                                    <span>Amanda Doe</span>
                                </small>
                                <h4>new business day</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fugiat soluta
                                    quod voluptatibus.
                                </p>
                                <a href="#" class="more">read more</a>
                            </div>
                        </div>
                        <!-- /.col-4 -->
                    </div>
                </div>

                <div class="next" @click="nextImage"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                        style="height:20px">
                        <path
                            d="M4 15a1 1 0 001 1h19.586l-4.292 4.292a1 1 0 001.414 1.414l6-6a.99.99 0 00.292-.702V15c0-.13-.026-.26-.078-.382a.99.99 0 00-.216-.324l-6-6a1 1 0 00-1.414 1.414L24.586 14H5a1 1 0 00-1 1z" />
                    </svg>
                </div>
            </div>
            <!-- /.commands -->
        </div>

    </div>
</template>