<template>
  <!-- LOADER -->
  <!-- <div id="preloader">
    <img class="preloader" src="images/loader.gif" alt="" />
  </div> -->
  <!-- end loader -->
  <!-- END LOADER -->

    <div dir="rtl" lang="ar" id="master-app">

        <!-- end header -->
        <section class="section first-section">
            <div class="container-fluid">
                <div class="masonry-blog clearfix">
                    <div class="left-side">

                        <div class="masonry-box post-media">
                            <img :src="news.sport[0].image" alt="" class="img-fluid"/>
                            <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-pink"><router-link to="/sport"><a href="" title="">{{
                                            news.sport[0].type
                                            }}</a> </router-link></span>
                                        <h4 style="cursor: pointer">
                                            <a @click="goToDetails(this.news.sport[0])">{{ news.sport[0].title }}</a>
                                        </h4>
                                        <small><a>{{ news.sport[0].date }} </a></small>
                                        <small><a href="blog-author.html" title="">{{
                                            news.sport[0].author
                                            }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                </div>
                                <!-- end shadow-desc -->
                            </div>
                            <!-- end shadow -->
                        </div>
                        <!-- end post-media -->
                    </div>
                    <!-- end left-side -->

                    <div class="center-side">
                        <div class="masonry-box post-media">
                            <img :src="news.politics[0].image" alt="" class="img-fluid"/>
                            <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">

                                        <!-- <span class="bg-pink"><a href="blog-category-01.html" title="">{{ news.politics[0].type }}</a></span> -->
                                        <span class="bg-pink"><router-link to="/politics"><a href="" title="">{{
                                            news.politics[0].type
                                            }}</a> </router-link></span>
                                        <h4 style="cursor: pointer">
                                            <a @click="goToDetails(this.news.politics[0])">{{
                                                news.politics[0].title
                                                }}</a>
                                        </h4>
                                        <small><a >{{ news.politics[0].date }}</a></small>
                                        <small><a>{{
                                            news.politics[0].author
                                            }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                </div>
                                <!-- end shadow-desc -->
                            </div>
                            <!-- end shadow -->
                        </div>
                        <!-- end post-media -->

                        <div v-for="newsItem in [news.politics[1], news.politics[2]]" :key="newsItem"
                             class="masonry-box small-box post-media">
                            <img :src="newsItem.image" alt="" class="img-fluid"/>
                            <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-pink"><a href="blog-category-01.html" title="">{{
                                            newsItem.type
                                            }}</a></span>
                                        <h4 style="cursor: pointer">
                                            <a @click="goToDetails(newsItem)">{{ newsItem.title }}</a>
                                        </h4>
                                    </div>
                                    <!-- end meta -->
                                </div>
                                <!-- end shadow-desc -->
                            </div>
                            <!-- end shadow -->
                        </div>
                        <!-- end post-media -->


                        <!-- end post-media -->
                    </div>
                    <!-- end left-side -->

                    <div class="right-side hidden-md-down">
                        <div class="masonry-box post-media">
                            <img :src="news.sport[1].image" alt="" class="img-fluid"/>
                            <div class="shadoweffect">
                                <div class="shadow-desc">
                                    <div class="blog-meta">
                                        <span class="bg-aqua"><a href="blog-category-01.html"
                                                                 title="">{{ news.sport[1].type }}</a></span>
                                        <h4 style="cursor: pointer">
                                            <a @click="goToDetails(this.news.sport[1])">{{ news.sport[1].title }}</a>
                                        </h4>
                                        <small><a >{{ news.sport[1].date }}</a></small>
                                        <small><a >{{
                                            news.sport[1].author
                                            }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                </div>
                                <!-- end shadow-desc -->
                            </div>
                            <!-- end shadow -->
                        </div>
                        <!-- end post-media -->
                    </div>
                    <!-- end right-side -->
                </div>
                <!-- end masonry -->
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="section-title">
                            <h3 class="color-aqua">
                                <router-link to="/sport"><a href="" title="">{{ news.sport[0].type }}</a></router-link>
                            </h3>
                        </div>
                        <!-- end title -->

                        <div class="row">
                            <div v-for="newsItem in [news.sport[2], news.sport[3]]" :key="newsItem"
                                 class="col-lg-12 col-md-12 col-sm-12 col-xs-12">


                                <h4 style="cursor: pointer">
                                    <a @click="goToDetails(newsItem)">
                                        <div class="post-media">
                                            <a>
                                                <img :src="newsItem.image" alt="" class="img-fluid"/>
                                                <div class="hovereffect">
                                                    <span></span>
                                                </div>
                                                <!-- end hover -->
                                            </a>
                                        </div>
                                        <!-- end media -->
                                        <div class="blog-meta big-meta">
                                            <h4>
                                                <a>{{ newsItem.title }}</a>
                                            </h4>
                                            <p>
                                                {{ newsItem.body }}
                                            </p>
                                            <small><a href="blog-category-01.html" title="">{{
                                                newsItem.type
                                                }}</a></small>
                                            <small><a>{{ newsItem.date }}</a></small>
                                            <small><a>{{ newsItem.author }}</a></small>
                                        </div>
                                        <!-- end meta -->
                                    </a>
                                </h4>
                                <hr class="invis"/>
                                <!-- end blog-box -->
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end col -->

                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div class="section-title">
                            <h3 class="color-pink">
                                <router-link to="/politics"><a href="" title="">{{ news.politics[0].type }}</a>
                                </router-link>
                                <!-- <a href="blog-category-01.html" title="">{{ news.politics[0].type }}</a> -->
                            </h3>
                        </div>
                        <!-- end title -->
                        <div class="row">
                            <div
                                    v-for="newsItem in [news.politics[3], news.politics[4], news.politics[5], news.politics[6], news.politics[7], news.politics[8], news.politics[9], news.politics[10]]"
                                    :key="newsItem" class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <h4 style="cursor: pointer">
                                    <a @click="goToDetails(newsItem)">
                                        <div class="post-media">
                                            <a title="">
                                                <img :src="newsItem.image" alt="" class="img-fluid"/>
                                                <div class="hovereffect">
                                                    <span></span>
                                                </div>
                                                <!-- end hover -->
                                            </a>
                                        </div>
                                        <!-- end media -->
                                        <div class="blog-meta">
                                            <h4>
                                                <a title="">{{ newsItem.title }}</a>
                                            </h4>
                                            <small><a title="">{{ newsItem.type }}</a></small>
                                            <small><a title="">{{ newsItem.date }}</a></small>
                                        </div>
                                        <!-- end meta -->
                                    </a>
                                </h4>
                                <!-- end blog-box -->

                                <hr class="invis"/>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->

                <hr class="invis1"/>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="banner-spot clearfix">
                            <div class="banner-img">
                                <img
                                        src="https://img.freepik.com/free-vector/ramadan-kareem-arabic-golden-banner_1017-31088.jpg?size=626&ext=jpg&ga=GA1.2.1958355492.1677405070&semt=ais"
                                        alt="" class="img-fluid"/>
                            </div>
                            <!-- end banner-img -->
                        </div>
                        <!-- end banner -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->

                <hr class="invis1"/>

                <div class="row">
                    <div class="col-lg-9">
                        <div class="blog-list clearfix">
                            <div class="section-title">
                                <h3 class="color-green">
                                    <router-link to="/Economic"><a href="" title="">{{ news.economic[0].type }}</a>
                                    </router-link>
                                    <!-- <a href="blog-category-01.html" title="">{{ news.economic[0].type }}</a> -->
                                </h3>
                            </div>
                            <!-- end title -->

                            <div v-for="newsItem in [news.economic[0], news.economic[1], news.economic[2]]"
                                 :key="newsItem"
                                 class="blog-box row">
                                <h4 style="cursor: pointer">
                                    <a  @click="goToDetails(newsItem)">
                                    <div class="col-md-4">
                                        <div class="post-media">
                                            <a>
                                                <img :src="newsItem.image" alt="" class="img-fluid"/>
                                                <div class="hovereffect"></div>
                                            </a>
                                        </div>
                                        <!-- end media -->
                                    </div>
                                    <!-- end col -->

                                    <div class="blog-meta big-meta col-md-8">
                                        <h4>
                                            <a>{{ newsItem.title }}</a>
                                        </h4>
                                        <p>
                                            {{ newsItem.details }}
                                        </p>
                                        <small><a >{{ newsItem.type }}</a></small>
                                        <small><a >{{ newsItem.date }}</a></small>
                                        <small><a >{{ newsItem.author }}</a></small>
                                    </div>
                                    <!-- end meta -->
                                    <hr class="invis"/>
                                    </a>
                                </h4>

                            </div>
                            <!-- end blog-box -->
                        </div>
                        <!-- end blog-list -->

                        <hr class="invis"/>


                        <!-- end blog-list -->
                    </div>
                    <!-- end col -->


                    <!-- end col -->
                </div>
                <!-- end row -->

                <hr class="invis1"/>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="banner-spot clearfix">
                            <div class="banner-img">
                                <img height="1"
                                     src="https://img.freepik.com/free-vector/ramadan-kareem-arabic-golden-banner_1017-31088.jpg?size=626&ext=jpg&ga=GA1.2.1958355492.1677405070&semt=ais"
                                     alt="" class="img-fluid"/>
                            </div>
                            <!-- end banner-img -->
                        </div>
                        <!-- end banner -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>
    </div>
</template>
<script>
// import {localStorage} from '@localStorage'
// import {transUser} from '@/reactive/transfer_user'
// import {newsCache} from '@/reactive/transfer_news'
// import {baseUrl} from '@/reactive/api.js'
// import axios from 'axios';

export default {
    data() {
        return {
            news: JSON.parse(localStorage.getItem("homeNEWS")),

        }
    },

    mounted() {
        // Call the method to fetch data when the component is mounted
        this.reRoutUser();

        // this.getData();
    },
    methods: {
        reRoutUser() {
            if (!this.news) {
                this.$router.push('/loadingHome');
            }
        },
        goToDetails(data) {
            localStorage.setItem('detailsNews', JSON.stringify(data));
                this.$router.push('/details');
        }
    }

}
</script>

