<template>
    <p></p>
    <p></p>
    <div class=" container d-flex justify-content-center align-items-center"
         :class="{ 'right-panel-active': isRegister }"
         style="height: 80vh;" id="container">
        <div dir="rtl" lang="ar" class="form-container sign-up-container">
            <form @submit.prevent="signUp">
                <h1 mb-5>انشاء حساب جديد</h1>
                <!-- <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div> -->
                <span>يبدو أنك ذو حظ سيء لانك خلال كل هذه المدة لم يكن لديك حساب على موقعنا...</span>
                <input type="text" placeholder="الإسم الكامل" @input="checkName" v-model="name"/>
                <input type="email" v-model="email" @input="checkEmail" placeholder="البريد الإلكتروني"/>
                <input type="text" placeholder="رقم الهاتف" v-model="phone" @input="checkPhone"/>
                <input type="password" v-model="password" @input="checkPassword" placeholder="كلمة المرور"/>
<!--                <button type="submit">إنشاء حساب</button>-->

                <button style="margin: 3em;" type="submit" class="btn btn-primary btn-lg" id="load"
                        :class="{ 'is-loading': loading }">
                            <span v-if="loading">
                              <i class="fa fa-circle-o-notch fa-spin"></i>جار إنشاء حساب
                            </span>
                    <span v-else> إنشاء حساب</span>
                </button>


                <span v-if="showAlertEmail" class="alert" style=" color:Tomato;">{{ alertMessageEmail }}</span>
                <span v-if="showAlertPassword" class="alert" style="color:Tomato;">{{ alertMessagePassword }}</span>
                <span v-if="showAlertName" class="alert" style="color:Tomato;">{{ alertMessageName }}</span>
                <span v-if="showAlertPhone" class="alert" style="color:Tomato;">{{ alertMessagePhone }}</span>
            </form>
        </div>
        <div dir="rtl" lang="ar" class="form-container sign-in-container">

            <form @submit.prevent="logIn">
                <h1>تسجيل دخول</h1>
                <!-- <div class="social-container">
                <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
              </div> -->
                <span>أهلا بك من جديد، لقد أعددنا من أجلك أحدث ما يجري في وطننا العربي</span>
                <input type="email" v-model="email" @input="checkEmail" placeholder="البريد الإلكتروني"/>
                <input type="password" v-model="password" @input="checkPassword" placeholder="كلمة المرور"/>
                <!-- <a href="#">نسيت كلمة المرور</a> -->
                <!--                <button type="submit">تسجيل دخول</button>-->


                <button style="margin: 3em;" type="submit" class="btn btn-primary btn-lg" id="load"
                        :class="{ 'is-loading': loading }">
                            <span v-if="loading">
                              <i class="fa fa-circle-o-notch fa-spin"></i>جار تسجيل الدخول
                            </span>
                    <span v-else> تسجيل دخول</span>
                </button>


                <b-form-input v-model="number" ref="refText"></b-form-input>
                <!-- <div :class="{ 'pointer': isCursorPointer }" @mouseover="setCursorPointer" @mouseleave="setCursorDefault" style="width: 200px; height: 200px; background-color: lightblue;"></div> -->
                <span v-if="showAlertEmail" class="alert" style=" color:Tomato;">{{ alertMessageEmail }}</span>
                <span v-if="showAlertPassword" class="alert" style="color:Tomato;">{{ alertMessagePassword }}</span>
            </form>

        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1 style="color:white">أهلاً بك صديقي</h1>
                    <p style="color:white">من الرائع انك قد قررت الانضمام الى مجتمعنا، انت لا تعلم كم نحن متحمسين لخدمتك
                        في
                        موقنا</p>
                    <button @click="isRegister = !isRegister" class="ghost" id="signIn">تسجيل دخول</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1 style="color: white;">أهلاً بك مرة أخرى</h1>
                    <p style="color: white;">صديقي العزيز خلال غيابك عملنا على جمع جميع الاخبار من مصادرها الموثوقة
                        وقمنا
                        بترتيبها وتنظيمها في مكان واحد من أجلك يا صديقي</p>
                    <button @click="isRegister = !isRegister" class="ghost" id="signUp">انشاء حساب</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped src="@/../public/frontend/assets/css/auth.css">
.pointer {
    cursor: pointer;
}
</style>

<script>

import axios from 'axios';
import updateTransUser from '@/reactive/save_user';
import {baseUrl} from '@/reactive/api.js';

export default {
    data() {
        return {
            loading: false,
            email: '',
            password: '',
            name: '',
            phone: '',
            showModal: true,
            isRegister: false,
            showAlertPassword: false,
            showAlertEmail: false,
            showAlertName: false,
            showAlertPhone: false,
            alertMessagePassword: '',
            alertMessageEmail: '',
            alertMessageName: '',
            alertMessagePhone: '',
            isCursorPointer: true,
        }
    },
    mounted() {
        // this.scrape();

    },
    methods: {
        async signUp() {
            this.checkEmail();
            this.checkPassword();
            this.checkName();
            this.checkPhone();
            if (!this.showAlertEmail && !this.showAlertPassword && !this.showAlertName && !this.showAlertPhone) {
                this.loading = true;
                let result = await axios.post(`${baseUrl.url}/api/users/signup`, {
                    email: this.email,
                    password: this.password,
                    name: this.name,
                    phone: this.phone
                }).then(response => {
                    updateTransUser({
                        _id: response.data.user._id,
                        name: response.data.user.name,
                        email: response.data.user.email,
                        phone: response.data.user.phone,
                        verifyEmail: response.data.user.verifyEmail,
                        token: response.data.user.token,
                    });
                    this.$router.push('/verifyEmail');
                    this.loading = false
                }).catch(error => {
                    this.loading = false;
                    this.alertMessagePassword = error.response.data.message;
                    this.showAlertPassword = true;
                    console.log(error.response.data.message);
                })
                this.loading = false
                console.log(result);
            }

        },
        async logIn() {
            this.checkEmail();
            this.checkPassword();
            if (!this.showAlertEmail && !this.showAlertPassword) {
            this.loading = true
                let result = await axios.post(`${baseUrl.url}/api/users/login`, {
                    email: this.email,
                    password: this.password
                }).then(async response => {
                    console.log(response.data.email);
                    if (response.data.verifyEmail == false) {
                        updateTransUser({
                            _id: response.data._id,
                            name: response.data.name,
                            email: response.data.email,
                            phone: response.data.phone,
                            verifyEmail: response.data.verifyEmail,
                            token: response.data.token,
                        });
                        const headers = {'Authorization': `Bearer ${response.data.token}`}
                        let result = await axios.get(`${baseUrl.url}/api/users/verifyEmail`, {headers})
                            .then(response => {
                                this.alertMessageCode = 'We have re-sent the code to your email address';
                                console.log(response.data.email);
                                this.minutes = 3;
                            }).catch(error => {
                                console.log('---------------------------');
                                this.alertMessageCode = error.response.data.message;
                                this.showAlertCode = true;
                                console.log(error.response.data.message);
                            });
                        console.log(result);
                        this.$router.push('/verifyEmail');
                    } else {
                        updateTransUser({
                            _id: response.data._id,
                            name: response.data.name,
                            email: response.data.email,
                            phone: response.data.phone,
                            verifyEmail: response.data.verifyEmail,
                            token: response.data.token,
                        });
                        this.$router.push('/homePage');
                    }
                    this.loading = false
                    // this.$router.push({ name: 'login', query: { redirect: '/homePage' } })
                }).catch(error => {
                    this.alertMessagePassword = error.response.data.message;
                    this.showAlertPassword = true;
                    console.log('---------------------------');
                    console.log(error.response.data.message);
                    this.loading = false
                })
                console.log(result);
                this.loading = false
            }
            this.loading = false
        },
        checkEmail() {
            if (this.email === '') {
                this.alertMessageEmail = "Please enter your email.";
                this.showAlertEmail = true;
            } else if (!this.emailPattern()) {
                this.alertMessageEmail = "The email address is invalid.";
                this.showAlertEmail = true;
            } else if (!this.email.endsWith('@gmail.com')) {
                this.alertMessageEmail = "Please enter a valid Gmail address end @gmail.com.";
                this.showAlertEmail = true;
            } else {
                this.showAlertEmail = false;
            }
        },
        emailPattern() {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(this.email);
        },
        checkPassword() {
            const minLength = 8;
            const maxLength = 50;
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
            if (this.password === '') {
                return "Please enter a password.";
            } else if (this.password.length < minLength) {
                this.alertMessagePassword = `Your password must be at least ${minLength} characters long.`;
                this.showAlertPassword = true;
            } else if (this.password.length > maxLength) {
                this.alertMessagePassword = `Your password must be less than ${maxLength} characters long.`;
                this.showAlertPassword = true;
            } else if (!passwordRegex.test(this.password)) {
                this.alertMessagePassword = "Your password must contain at least one uppercase letter, one lowercase letter, and one number.";
                this.showAlertPassword = true;
            } else {
                console.log('-----------------------------------');
                this.showAlertPassword = false;
            }

        },
        checkName() {
            const minLength = 8;
            const maxLength = 50;
            if (this.name === '') {
                this.alertMessageName = "Please enter your name.";
                this.showAlertName = true;
            } else if (this.name.length < minLength) {
                this.alertMessageName = `Your name must be at least ${minLength} characters long.`;
                this.showAlertName = true;
            } else if (this.name.length > maxLength) {
                this.alertMessageName = `Your name must be less than ${maxLength} characters long.`;
                this.showAlertName = true;
            } else {
                this.showAlertName = false;
            }
        },
        checkPhone() {
            if (this.phone === '') {
                this.alertMessagePhone = "Please enter a phone number.";
                this.showAlertPhone = true;
            } else {
                const regex = /^\+[0-9]{12}$/; // Regular expression for a valid phone number
                const isValidate = regex.test(this.phone);
                if (!isValidate) {
                    this.alertMessagePhone = "Phone number is invalid. hent number +970592815701";
                    this.showAlertPhone = true;
                } else {
                    this.showAlertPhone = false;
                }
            }
        },
        async scrape() {
            console.log(`${baseUrl.url}/api/news/policy`)
            try {
                await axios.post(`${baseUrl.url}/api/news/policy`, {})
                await axios.post(baseUrl.url + '/api/news/economy', {})
                await axios.post(baseUrl.url + '/api/news/sports', {})
            } catch (e) {
                console.log(e)
            }
            console.log('2')
        }

    },

}

</script>
<style>
.is-loading {
    pointer-events: none;
    opacity: 0.6;
}
</style>
