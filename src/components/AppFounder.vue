<script>

export default {
    name: 'AppFounder'
}

</script>

<template>
    <section id="founder">
        <div class="container">
            <div class="row">

                <div class="slider">
                    <img class="img-fluid" src="../assets/img/h1-img-01.jpg" alt="">
                    <div class="commands container_90">
                        <div class="prev" @click="prevImage">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" style="height:20px">
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

                <div class="founder_info">
                    <h2 class="name">jason bickford</h2>
                    <small class="role">Founder and Executive Director</small>
                    <div class="divider"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cupiditate asperiores
                        explicabo provident rerum ab?
                    </p>
                    <div>
                        <ul class="social">
                            <li>
                                <a href="#">
                                    <font-awesome-icon :icon="['fab', 'linkedin-in']" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <font-awesome-icon :icon="['fab', 'facebook-f']" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <font-awesome-icon :icon="['fab', 'twitter']" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img class="signature img-fluid" src="../assets/img/signature.png" alt="Signature">
                </div>
            </div>
        </div>
    </section>
</template>