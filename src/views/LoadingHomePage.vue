<template>
    <div dir="rtl" lang="ar" class="loading-page">
        <div class="counter">
            <p>جار التحميل...</p>
        </div>
    </div>
</template>
<style scoped src="@/../public/frontend/assets/css/loading-page.css"></style>
<script>
import axios from "axios";
import {baseUrl} from "@/reactive/api";

export default {
    data() {
        return {
            counter: 0,
            intervalId: null
        };
    },
    mounted() {
        this.reRoutUser();
        this.getData();
    },
    methods: {
        reRoutUser() {
            if (!localStorage.token) {
                this.$router.push('/authPage');
            }
        },
        async getData() {
            axios.post(`${baseUrl.url}/api/news/policy`).then().catch()
            axios.post(`${baseUrl.url}/api/news/economy`).then().catch()
            axios.post(`${baseUrl.url}/api/news/sport`).then().catch()
            axios.get(`${baseUrl.url}/api/news/home`)
                .then(response => {
                    console.log(response.data)
                    localStorage.setItem("homeNEWS", JSON.stringify(response.data));
                    // newsCache.news = response.data;
                    // this.news = newsCache.news;
                    this.$router.push('/homePage');
                })

                .catch(error => {
                    console.log(error);
                });
        },

    }
    // destroyed() {
    //   clearInterval(this.intervalId);
    // }
};
</script>