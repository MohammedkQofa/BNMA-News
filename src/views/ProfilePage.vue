<template>
    <div dir="rtl" lang="ar" class="container">
        <div class="main-body">
            <div class="row gutters-sm">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img
                                        :src="image"

                                        alt="Admin"
                                        class="rounded-circle"
                                        width="200"
                                />
                                <div class="mt-3">
                                    <h4>BNMA NEWS</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">الأسم الكامل</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">{{ name }}</div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">البريد الإلكتروني</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">{{ email }}</div>
                            </div>
                            <hr/>

                            <div class="row">
                                <div class="col-sm-3">
                                    <h6 class="mb-0">رقم الهاتف</h6>
                                </div>
                                <div class="col-sm-9 text-secondary">{{ phone }}</div>
                            </div>
                            <hr/>
                            <div class="row">
                                <div class="col-sm-12">
                                    <router-link class="btn btn-primary" to="/editProfile"
                                    >تعديل
                                    </router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- <script>
import axios from "axios";
import { transUser } from "@/reactive/transfer_user";
export default {
  name: "ProfileView",
  setup() {
    const user = transUser;
    return {
      user,
    };
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      image: "",
      verifyEmail: "true"
    };
  },
  created() {
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        const headers = {
          Authorization: `Bearer ${this.user.token}`,
        };
        console.log(headers);
        const response = await axios.get(
          "http://localhost:8000/api/profile/getProfile",
          { headers }
        );
        console.log(response)
        this.name = response.data.name;
        this.email = response.data.email;
        this.phone = response.data.phone;
        this.image = response.data.image;
        this.verifyEmail = response.data.verifyEmail
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script> -->

<script>
import axios from "axios";
import {transUser} from "@/reactive/save_user";
import {baseUrl} from "@/reactive/api";

export default {
    name: "ProfileView",

    setup() {
        const user = transUser;

        return {
            user,
        };
    },

    data() {
        return {
            name: localStorage.name,
            email: localStorage.email,
            phone: localStorage.phone,
            image: localStorage.image ?? "https://bootdey.com/img/Content/avatar/avatar7.png",
        };
    },
    mounted() {
        console.log(localStorage.image )
    },
    created() {
        const cachedUserData = localStorage.getItem("userProfile");

        if (cachedUserData) {
            this.updateUserData(JSON.parse(cachedUserData));
        } else {
            this.fetchUserProfile();
        }
    },

    methods: {
        async fetchUserProfile() {
            try {
                const headers = {
                    Authorization: `Bearer ${this.user.token}`,
                };

                const response = await axios.get(
                    `${baseUrl.url}/api/profile/getProfile`,
                    {headers}
                );

                this.updateUserData(response.data);
                localStorage.setItem("userProfile", JSON.stringify(response.data));
            } catch (error) {
                console.error(error);
            }
        },

        updateUserData(userData) {
            this.name = userData.name;
            this.email = userData.email;
            this.phone = userData.phone;
            this.image = userData.image;
        },
    },
};
</script>
