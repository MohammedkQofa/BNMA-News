<template>
    <div dir="rtl" lang="ar"
        :class="{ 'app-footer': true, 'd-none': (this.$route.path == '/' || this.$route.path === '/loadingHome' || this.$route.path == '/verifyEmail' || this.$route.path == '/ourTeam' || this.$route.path == '/authPage' || this.$route.path == '/profile' || this.$route.path == '/editProfile') }">
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="widget">
                            <h2 class="widget-title">المشاركات الاخيرة</h2>
                            <div class="blog-list-widget">
                                <div class="list-group">
                                    <a v-for="items in recentPosts" :key="items"
                                        class="list-group-item list-group-item-action flex-column align-items-start">
                                        <div class="w-100 justify-content-between">
                                            <router-link to="/details">
                                                <img :src="items.image" alt="" class="img-fluid float-left">
                                                <h5 class="mb-1">{{ items.title }}</h5>
                                                <small>{{ items.date }}</small>
                                            </router-link>
                                        </div>
                                    </a>

                                </div>
                            </div><!-- end blog-list -->
                        </div><!-- end widget -->
                    </div><!-- end col -->

                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="widget">
                            <h2 class="widget-title">منشورات شائعة</h2>
                            <div class="blog-list-widget">
                                <div class="list-group">
                                    <a v-for="items in popularPosts" :key="items"
                                        class="list-group-item list-group-item-action flex-column align-items-start">
                                        <div class="w-100 justify-content-between">
                                            <router-link to="/details">
                                                <img :src="items.image" alt="" class="img-fluid float-left">
                                                <h5 class="mb-1">{{ items.title }}</h5>
                                                <small>{{ items.date }}</small>
                                            </router-link>
                                        </div>

                                    </a>

                                </div>
                            </div><!-- end blog-list -->
                        </div><!-- end widget -->
                    </div><!-- end col -->

                    <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div class="widget">
                            <h2 class="widget-title">الفئات الشعبية</h2>
                            <div class="link-widget">
                                <ul>
                                    <li>
                                        <router-link to="/politics"><a href="" title=""> الأخبار السياسية
                                                ({{ count.politics }})</a>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/sport"><a href="" title="">الاخبار الرياضية ({{ count.sport
                                        }})</a>
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="/Economic"><a href="">الاخبار الاقتصادية ({{ count.economic
                                        }})</a></router-link>
                                    </li>
                                </ul>
                            </div><!-- end link-widget -->
                        </div><!-- end widget -->
                    </div><!-- end col -->
                </div><!-- end row -->

                <hr class="invis1">

                <div dir="ltr" lang="en" class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="widget">
                            <div class="footer-text text-center">
                                <router-link to="/homePage"><img src="../../../public/frontend/assets/images/logo.png"
                                        alt="" /></router-link>
                                <!-- <a href="index.html" @click.><img src="../../../public/frontend/assets/images/logo.png" alt="" class="img-fluid"></a> -->
                                <p>هو موقع اخبار يهتم بالاخبار السياسية والاقتصادية والرياضية يحتوي على العديد من
                                    الميزات</p>
                                <div class="social">
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i
                                            class="fa fa-facebook"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i
                                            class="fa fa-twitter"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Instagram"><i
                                            class="fa fa-instagram"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google Plus"><i
                                            class="fa fa-google-plus"></i></a>
                                    <a href="#" data-toggle="tooltip" data-placement="bottom" title="Pinterest"><i
                                            class="fa fa-pinterest"></i></a>
                                </div>

                                <hr class="invis">

                                <!-- <div class="newsletter-widget text-center">
                                    <form class="form-inline">
                                        <input type="text" class="form-control" placeholder="أدخل عنوان بريدك الالكتروني">
                                        <button type="submit" class="btn btn-primary">Subscribe <i class="fa fa-envelope-open-o"></i></button>
                                    </form>
                                </div> -->
                            </div><!-- end footer-text -->
                        </div>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="col-md-12 text-center">
                        <br>
                        <div class="copyright">&copy; Cloapedia. Design: <a href="http://html.design">HTML Design</a>.</div>
                    </div>
                </div> -->
            </div><!-- end container -->
        </footer><!-- end footer -->


    </div>
</template>
<script>
import axios from "axios";
import { baseUrl } from '@/reactive/api.js'

export default {
    name: "AppFooter",
    data() {
        return {
            pagNumber: 1,
            textSearch: "",
            popularPosts: [],
            recentPosts: [],
            count: {}
        };
    },
    mounted() {
        this.getCount();
        this.getPopularAndRecentPosts();
    },
    methods: {
        getCount() {
            axios.get(`${baseUrl.url}/api/news/count`)
                .then(response => {
                    this.count = response.data;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getPopularAndRecentPosts() {
            axios.get(`${baseUrl.url}/api/news/recentPosts`)
                .then(response => {
                    this.recentPosts = response.data['latestNews'];
                    this.popularPosts = response.data['popularPosts'];
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>
  