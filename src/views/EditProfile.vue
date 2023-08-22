<template>
    <p></p>
    <p></p>
    <div class="EditProfileView container d-flex justify-content-center align-items-center"
         :class="{ 'right-panel-active': true }"
         style="height: 80vh;" id="container">
        <div dir="rtl" class="container">
            <form action="">
                <div class="main-body">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex flex-column align-items-center text-center">
                                        <label for="image-input" class="image-label">
                                            <img :src="editProfileView.image" alt="Admin"
                                                 class="rounded-circle p-1 bg-primary" width="200"/>
                                        </label>
                                        <input type="file" id="image-input" @change="onFileChange" accept="image/*"
                                               style="display: none;">
                                        <div class="mt-3">
                                            <h4>اضغط على الصورة لتغييرها🥲</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">الإسم الكامل</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" v-model="editProfileView.userName"/>
                                        </div>
                                    </div>
                                    <!--                  <div class="row mb-3">-->
                                    <!--                    <div class="col-sm-3">-->
                                    <!--                      <h6 class="mb-0">البريد الإلكتروني</h6>-->
                                    <!--                    </div>-->
                                    <!--                    <div class="col-sm-9 text-secondary">-->
                                    <!--                      <input type="text" class="form-control" :value="editProfileView.email" />-->
                                    <!--                    </div>-->
                                    <!--                  </div>-->

                                    <div class="row mb-3">
                                        <div class="col-sm-3">
                                            <h6 class="mb-0">رقم الهاتف</h6>
                                        </div>
                                        <div class="col-sm-9 text-secondary">
                                            <input type="text" class="form-control" v-model="editProfileView.phone"/>
                                        </div>
                                    </div>
                                    <!--                  <div class="row mb-3">-->
                                    <!--                    <div class="col-sm-3">-->
                                    <!--                      <h6 class="mb-0">العنوان</h6>-->
                                    <!--                    </div>-->
                                    <!--                    <div class="col-sm-9 text-secondary">-->
                                    <!--                      <input type="text" class="form-control" value="Palestine, Gaza, baytlahia" />-->
                                    <!--                    </div>-->
                                    <!--                  </div>-->
                                    <div class="row">
                                        <div class="col-sm-3"></div>
                                        <div class="col-sm-9 text-secondary">
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <p class="btn btn-primary" @click="uploadImage()">حفظ
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <br/><br/>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import {baseUrl} from "@/reactive/api";

export default {
    name: "EditProfileView",
    data() {
        return {
            editProfileView: {
                userName: localStorage.name,
                phone: localStorage.phone,
                email: localStorage.email,
                image: this.selectedFile??localStorage.image??'https://bootdey.com/img/Content/avatar/avatar7.png',
            },
            selectedFile: null,
        };
    },
    methods: {
        onFileChange(event) {
            this.selectedFile = event.target.files[0];
        },
        uploadImage() {
            console.log(this.editProfileView.userName)
            localStorage.name = this.editProfileView.userName
            localStorage.phone = this.editProfileView.phone
            const formData = new FormData();
            if (this.selectedFile) {
                formData.append('image', this.selectedFile);
            }
            formData.append('name', this.editProfileView.userName);
            formData.append('phone', this.editProfileView.phone);


            // Make an API request with the form data containing the image and additional data
            // For example, using Axios:
            axios.put(baseUrl.url + '/api/profile/editProfile', formData, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.token
                }
            })
                .then(response => {
                    console.log(baseUrl.url + '/' + response.data.image['userImage'])
                    // console.log('Image uploaded successfully:', response.data);
                    localStorage.image = baseUrl.url + '/' + response.data.image['userImage']
                    this.$router.push('/profile');

                })
                .catch(error => {
                    console.error('Error uploading image:', error);
                });

        }
    }
};

</script>
