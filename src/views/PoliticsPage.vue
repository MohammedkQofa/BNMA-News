<template>
    <div dir="rtl" lang="ar" id="politics" class="politics-page">
        <div class="page-title wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2>
                            الأخبار السياسية
                        </h2>
                    </div>
                    <!-- end col -->
                    <div
                        class="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down"
                    >
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">الصفحة الرئيسئة</a></li>
                            <li class="breadcrumb-item"><a href="#"></a></li>
                            <li class="breadcrumb-item active">السياسة</li>
                        </ol>
                    </div>
                    <!-- end col -->

                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </div>
        <!-- end page-title -->

        <section class="section wb">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div class="page-wrapper">
                            <div
                                v-for="(item, index) in news.slice(
                  pagNumber == 1 ? 0 : (pagNumber - 1) * 10,
                  pagNumber == 1 ? 10 : pagNumber * 10
                )"
                                :key="index"
                                class="blog-list clearfix"
                            >
                                <h4 style="cursor: pointer">
                                    <a @click="goToDetails(item)">
                                        <div class="blog-box row">
                                            <div class="col-md-4">
                                                <div class="post-media">
                                                    <router-link to="/details"><img :src="item.image" alt=""
                                                                                    class="img-fluid"/>
                                                        <div class="hovereffect"></div>
                                                    </router-link>
                                                </div>
                                                <!-- end media -->
                                            </div>
                                            <!-- end col -->
                                            <div class="blog-meta big-meta col-md-8">
                                                <h4>
                                                    <router-link to="/details">{{ item.title }}</router-link>
                                                </h4>
                                                <p>{{ item.body }}</p>
                                                <small
                                                ><a href="blog-category-01.html" title="">{{
                                                        item.type
                                                    }}</a></small
                                                >
                                                <small
                                                ><a href="" title="">{{ item.date }}</a></small
                                                >
                                                <small><a href="blog-author.html" title="">{{ item.author }}</a></small>
                                            </div>
                                            <!-- end meta -->
                                            <div v-show="index == 2" class="row">
                                                <div>
                                                    <br/>
                                                    <div class="col-lg-10 offset-lg-1">
                                                        <div class="banner-spot clearfix">
                                                            <div class="banner-img">
                                                                <img
                                                                    src="../../public\frontend\assets\upload/ramadan1.jpg"
                                                                    alt=""
                                                                    class="img-fluid"
                                                                />
                                                            </div>
                                                            <!-- end banner-img -->
                                                        </div>
                                                        <!-- end banner -->
                                                        <!-- <hr class="invis"> -->
                                                    </div>
                                                    <!-- end col -->
                                                </div>
                                            </div>
                                            <!-- end row -->
                                        </div>
                                    </a>
                                </h4>
                                <!-- end blog-box -->

                                <hr class="invis"/>
                            </div>
                            <!-- end blog-list -->
                        </div>
                        <!-- end page-wrapper -->

                        <hr class="invis"/>

                        <div class="row">
                            <div class="col-md-12">
                                <nav aria-label="Page navigation">
                                    <ul class="pagination justify-content-start">
                                        <li
                                            @click="pagNumber == 1 ? pagNumber : pagNumber--"
                                            class="page-item"
                                        >
                                            <router-link class="page-link" to="/politics"
                                            >السابق
                                            </router-link
                                            >
                                        </li>
                                        <li
                                            v-for="index in Math.ceil(news.length / 10)"
                                            :key="index"
                                            @click="pagNumber = index"
                                            class="page-item"
                                        >
                                            <router-link class="page-link" to="/politics">{{
                                                    index
                                                }}
                                            </router-link>
                                        </li>
                                        <li
                                            @click="
                        Math.ceil(news.length / 10) == pagNumber
                          ? pagNumber
                          : pagNumber++
                      "
                                            class="page-item"
                                        >
                                            <router-link class="page-link" to="/politics"
                                            >التالي
                                            </router-link
                                            >
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <!-- end col -->
                        </div>
                        <!-- end row -->
                    </div>
                    <!-- end col -->

                    <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div class="sidebar">
                            <div class="widget">
                                <h2 class="widget-title">بحث</h2>
                                <form class="form-inline search-form">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            v-model="textSearch"
                                            class="form-control"
                                            placeholder="             البحث في الموقع"
                                        />
                                    </div>
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                            <!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">المشاركات الاخيرة</h2>
                                <div class="blog-list-widget">
                                    <div class="list-group">
                                        <div
                                            class="list-group-item list-group-item-action flex-column align-items-start"
                                        >
                                            <div
                                                class="w-100 justify-content-between"
                                                v-for="(item, index) in news.slice(0, 5)"
                                                :key="index"
                                            >
                                                <img
                                                    :src="item.imageUrl"
                                                    alt=""
                                                    class="img-fluid float-left"
                                                />
                                                <h5 class="mb-1">{{ item.title }}</h5>
                                                <small>{{ item.date }}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- end blog-list -->
                            </div>
                            <!-- end widget -->

                            <div class="widget">
                                <h2 class="widget-title">دعاية</h2>
                                <div class="banner-spot clearfix">
                                    <div class="banner-img">
                                        <img
                                            src="../../public\frontend\assets\upload/ramadan.jpg"
                                            alt=""
                                            class="img-fluid"
                                        />
                                    </div>
                                    <!-- end banner-img -->
                                </div>
                                <!-- end banner -->
                            </div>
                            <!-- end widget -->
                        </div>
                        <!-- end sidebar -->
                    </div>
                    <!-- end col -->
                </div>
                <!-- end row -->
            </div>
            <!-- end container -->
        </section>

    </div>
    <!-- end wrapper -->
</template>
<script>
import axios from "axios";
import {baseUrl} from "@/reactive/api";

export default {
    name: "PoliticsPage",
    // computed: {
    //     transNEWS() {
    //         return transNEWS
    //     }
    // },
    data() {
        return {
            pagNumber: 1,
            textSearch: "",
            news: [],
        };
    },
    mounted() {
        // Call the method to fetch data when the component is mounted

        this.reRoutUser();
        this.getData();
    },
    methods: {
        reRoutUser() {
            if (!localStorage.token) {
                this.$router.push('/loadingHome');
            }
        },
        getData() {
            axios.get(`${baseUrl.url}/api/news/policy`)
                .then(response => {
                    this.news = response.data;
                    // newsCache.news = response.data;
                    // this.news = newsCache.news;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        goToDetails(data) {
            localStorage.setItem('detailsNews', JSON.stringify(data));
            this.$router.push('/details');
            window.history.go()
        }

    }
};
</script>