<template>
    <div dir="rtl" lang="ar" :key="rerender"
         :class="{ 'app-header': true, 'd-none': (this.$route.path === '/'||this.$route.path === '/loadingHome'||this.$route.path === '/verifyEmail' || this.$route.path == '/ourTeam' || this.$route.path == '/authPage') }">
        <div class="collapse top-search" id="collapseExample">
            <div class="card card-block">
                <div class="newsletter-widget text-center">
                    <form class="form-inline">
                        <input type="text" class="form-control" placeholder=" ما الذي تبحث عنه؟ "/>
                        <!-- <button type="submit" class="btn btn-primary">
                          <i class="fa fa-search"></i>
                        </button> -->
                    </form>
                </div>
                <!-- end newsletter -->
            </div>
        </div>
        <!-- end top-search -->

        <div class="topbar-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div class="topsocial">
                            <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                <div class="topsearch text-right">
                                    <a data-toggle="collapse" href="#collapseExample" aria-expanded="false"
                                       aria-controls="collapseExample"><i class="fa fa-search"></i> بحث </a>
                                </div>
                                <!-- end search -->
                            </div>
                            <!-- end col -->

                        </div>
                        <!-- end social -->
                    </div>
                    <!-- end col -->

                    <div class="col-lg-4 hidden-md-down">
                        <div class="topmenu text-center">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <router-link to="/ourTeam">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="blue"
                                             class="bi bi-people-fill"
                                             viewBox="0 0 16 16">
                                            <path
                                                    d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                        </svg>
                                        <span style="font-size: 16px;">     فريقنا    </span></router-link>
                                </li>
                                <li class="list-inline-item">
                                    <router-link to="/profile">
                                        <i class="fa fa-user-circle-o" style="font-size: 15px;"></i>
                                        <span style="font-size: 16px;">     الملف الشخصي     </span></router-link>
                                </li>

                            </ul>
                            <!-- end ul -->
                        </div>
                        <!-- end topmenu -->
                    </div>
                    <!-- end col -->


                </div>
                <!-- end row -->
            </div>
            <!-- end header-logo -->
        </div>
        <!-- end topbar -->

        <div class="header-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="logo">
                            <router-link to="/homePage"><img height="200"
                                                             src="../../../public/frontend/assets/images/logo.png"
                                                             alt=""/></router-link>
                        </div>
                        <!-- end logo -->
                    </div>
                </div>
                <!-- end row -->
            </div>
            <!-- end header-logo -->
        </div>
        <!-- end header -->

        <header class="header">
            <div class="container">
                <nav class="navbar navbar-inverse navbar-toggleable-md">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#cloapediamenu"
                            aria-controls="cloapediamenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-md-center" id="cloapediamenu">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link color-pink-hover" to="/homePage">الرئيسية</router-link>
                                <!-- <a class="nav-link color-pink-hover" href="index.html">Home</a> -->
                            </li>
<!--                            <li class="nav-item dropdown has-submenu menu-large hidden-md-down hidden-sm-down hidden-xs-down">-->
<!--                                <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown"-->
<!--                                   aria-haspopup="true"-->
<!--                                   aria-expanded="false">الفئات</a>-->
<!--                                <ul class="dropdown-menu megamenu" aria-labelledby="dropdown01">-->
<!--                                    <li>-->
<!--                                        <div class="mega-menu-content clearfix">-->
<!--                                            <div class="tab">-->
<!--                                                <button class="tablinks active"-->
<!--                                                        onclick="openCategory(event, 'politics')">-->
<!--                                                    السياسة-->
<!--                                                </button>-->
<!--                                                <button class="tablinks" onclick="openCategory(event, 'economic')">-->
<!--                                                    الأقتصاد-->
<!--                                                </button>-->
<!--                                                <button class="tablinks" onclick="openCategory(event, 'sport')">-->
<!--                                                    الرياضة-->
<!--                                                </button>-->
<!--                                                &lt;!&ndash; <button class="tablinks" onclick="openCategory(event, 'cat04')">-->
<!--                                                  Architecture-->
<!--                                                </button>-->
<!--                                                <button class="tablinks" onclick="openCategory(event, 'cat05')">-->
<!--                                                  Recipes-->
<!--                                                </button> &ndash;&gt;-->
<!--                                            </div>-->

<!--                                            <div class="tab-details clearfix">-->
<!--                                                <div id="politics" class="tabcontent active">-->
<!--                                                    <div class="row">-->
<!--                                                        <div v-for="newsItem in news.politics" :key="newsItem"-->
<!--                                                             class="col-lg-3 col-md-6 col-sm-12 col-xs-12">-->
<!--                                                            <h4 style="cursor: pointer">-->
<!--                                                                <a @click="goToDetails(newsItem)">-->
<!--                                                                    <div class="blog-box">-->
<!--                                                                        <div class="post-media">-->
<!--                                                                            <a>-->
<!--                                                                                <img :src="newsItem.image" alt=""-->
<!--                                                                                     class="img-fluid"/>-->
<!--                                                                                <div class="hovereffect"></div>-->
<!--                                                                                &lt;!&ndash; end hover &ndash;&gt;-->
<!--                                                                                <span class="menucat">{{-->
<!--                                                                                    newsItem.author-->
<!--                                                                                    }}</span>-->
<!--                                                                            </a>-->
<!--                                                                        </div>-->
<!--                                                                        &lt;!&ndash; end media &ndash;&gt;-->
<!--                                                                        <div class="blog-meta">-->
<!--                                                                            <h4>-->
<!--                                                                                <a>{{-->
<!--                                                                                    newsItem.title-->
<!--                                                                                    }}</a>-->
<!--                                                                            </h4>-->
<!--                                                                        </div>-->
<!--                                                                        &lt;!&ndash; end meta &ndash;&gt;-->
<!--                                                                    </div>-->
<!--                                                                </a>-->
<!--                                                            </h4>-->
<!--                                                            &lt;!&ndash; end blog-box &ndash;&gt;-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                    &lt;!&ndash; end row &ndash;&gt;-->
<!--                                                </div>-->
<!--                                                <div id="economic" class="tabcontent">-->
<!--                                                    <div class="row">-->
<!--                                                        <div v-for="newsItem in news.economic" :key="newsItem"-->
<!--                                                             class="col-lg-3 col-md-6 col-sm-12 col-xs-12">-->
<!--                                                            <h4 style="cursor: pointer">-->
<!--                                                                <a @click="goToDetails(newsItem)">-->
<!--                                                                    <div class="blog-box">-->
<!--                                                                        <div class="post-media">-->
<!--                                                                            <a>-->
<!--                                                                                <img :src="newsItem.image" alt=""-->
<!--                                                                                     class="img-fluid"/>-->
<!--                                                                                <div class="hovereffect"></div>-->
<!--                                                                                &lt;!&ndash; end hover &ndash;&gt;-->
<!--                                                                                <span class="menucat">{{-->
<!--                                                                                    newsItem.author-->
<!--                                                                                    }}</span>-->
<!--                                                                            </a>-->
<!--                                                                        </div>-->
<!--                                                                        &lt;!&ndash; end media &ndash;&gt;-->
<!--                                                                        <div class="blog-meta">-->
<!--                                                                            <h4>-->
<!--                                                                                <a>{{-->
<!--                                                                                    newsItem.title-->
<!--                                                                                    }}</a>-->
<!--                                                                            </h4>-->
<!--                                                                        </div>-->
<!--                                                                        &lt;!&ndash; end meta &ndash;&gt;-->
<!--                                                                    </div>-->
<!--                                                                </a>-->
<!--                                                            </h4>-->
<!--                                                            &lt;!&ndash; end blog-box &ndash;&gt;-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                    &lt;!&ndash; end row &ndash;&gt;-->
<!--                                                </div>-->
<!--                                                <div id="sport" class="tabcontent">-->
<!--                                                    <div class="row">-->
<!--                                                        <div v-for="newsItem in news.sport" :key="newsItem"-->
<!--                                                             class="col-lg-3 col-md-6 col-sm-12 col-xs-12">-->
<!--                                                            <h4 style="cursor: pointer">-->
<!--                                                                <a @click="goToDetails(newsItem)">-->
<!--                                                                    <div class="blog-box">-->
<!--                                                                        <div class="post-media">-->
<!--                                                                            <a>-->
<!--                                                                                <img :src="newsItem.image" alt=""-->
<!--                                                                                     class="img-fluid"/>-->
<!--                                                                                <div class="hovereffect"></div>-->
<!--                                                                                &lt;!&ndash; end hover &ndash;&gt;-->
<!--                                                                                <span class="menucat">{{-->
<!--                                                                                    newsItem.author-->
<!--                                                                                    }}</span>-->
<!--                                                                            </a>-->
<!--                                                                        </div>-->
<!--                                                                        &lt;!&ndash; end media &ndash;&gt;-->
<!--                                                                        <div class="blog-meta">-->
<!--                                                                            <h4>-->
<!--                                                                                <a>{{-->
<!--                                                                                    newsItem.title-->
<!--                                                                                    }}</a>-->
<!--                                                                            </h4>-->
<!--                                                                        </div>-->
<!--                                                                        &lt;!&ndash; end meta &ndash;&gt;-->
<!--                                                                    </div>-->
<!--                                                                </a>-->
<!--                                                            </h4>-->
<!--                                                            &lt;!&ndash; end blog-box &ndash;&gt;-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                    &lt;!&ndash; end row &ndash;&gt;-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            &lt;!&ndash; end tab-details &ndash;&gt;-->
<!--                                        </div>-->
<!--                                        &lt;!&ndash; end mega-menu-content &ndash;&gt;-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </li>-->

                            <li class="nav-item">
                                <router-link class="nav-link color-pink-hover" to="/politics">السياسية</router-link>
                                <!-- <a
                                  class="nav-link color-pink-hover"
                                  href="blog-category-01.html"
                                  >Politics</a
                                > -->
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link color-red-hover" to="/Economic">الاقتصادية</router-link>
                                <!-- <a class="nav-link color-red-hover" href="blog-category-02.html"
                                  >Economic</a -->
                                <!-- > -->
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link color-aqua-hover" to="/sport">الرياضية</router-link>
                                <!-- <a
                                  class="nav-link color-aqua-hover"
                                  href="blog-category-03.html"
                                  >Sport</a
                                > -->
                            </li>
                            <!-- <li class="nav-item">
                              <router-link class="nav-link color-green-hover" to="/travel">Travel</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link class="nav-link color-yellow-hover" to="/vlogs">Vlogs</router-link>
                            </li>
                            <li class="nav-item">
                              <router-link class="nav-link color-grey-hover" to="/health">Health</router-link>
                            </li> -->
                        </ul>
                    </div>
                </nav>
            </div>
            <!-- end container -->
        </header>
        <!-- end header -->
    </div>
</template>
<script>
import axios from "axios";
import {baseUrl} from "@/reactive/api.js";
import {transNEWS} from "@/reactive/news_category";

export default {
    name: "AppHeader",
    data() {
        return {
            news: {},
            rerender: 0
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            axios.get(`${baseUrl.url}/api/news/category`)
                .then(response => {
                    console.log(response)
                    this.news = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        goToDetails(data) {
            localStorage.setItem('detailsNews', JSON.stringify(data));
            transNEWS.detailsNews = JSON.stringify(data);
            if (this.$route.path === '/details') {
                this.$router.reload();
            }
            this.$router.push('/details');
        }
    }
};
</script>
