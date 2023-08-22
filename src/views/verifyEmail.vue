<template>
    <section class="verifymail">
        <div class="container-fluid">
            <div class="row justify-content-center align-items-center" style="min-height: 85vh">
                <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div class="card bg-white border-0 shadow p-2">
                        <div class="card-header border-0 bg-white pb-0">
                            <h2><strong>Confirm your email</strong></h2>
                            <p class="text-muted">An email has been sent to you containing an activation code</p>
                        </div>
                        <div class="card-body pt-0">
                            <form>
                                <div class="form-group py-2">
                                    <label for="text">Code</label>
                                    <input placeholder="****" @input="checkCode" class="form-control my-1"
                                           v-model="code"
                                           autocomplete="off" name="code" id="email" autofocus required/>
                                    <small class="form-text text-muted">Enter your code</small>
                                </div>
                            </form>
                            <span v-if="showAlertCode" class="alert" style="color:Tomato;">{{ alertMessageCode }}</span>


                            <button @click="sendCode" type="submit"
                                    class="btn btn-primary border-0 py-2 px-3 w-100 btn-lg" id="load"
                                    :class="{ 'is-loading': loading }">
                            <span v-if="loading">
                              <i class="fa fa-circle-o-notch fa-spin"></i>جار التحقق من الكود
                            </span>
                                <span v-else> تأكيد</span>
                            </button>


                            <!--                            <div class="pt-2">-->
                            <!--                                -->
                            <!--                                <button @click="sendCode" class="btn btn-primary border-0 py-2 px-3 w-100">-->
                            <!--                                    Verify-->
                            <!--                                </button>-->
                            <!--                            </div>-->
                            <div class="timer-container">
                                <p v-if="minutes != 0 || seconds != 0" class="timer">{{ timer }}</p>
                                <p @click="reSendCode" v-if="minutes == 0 && seconds == 0" style="color:blue"
                                   class="timer">
                                    resend</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.timer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    margin-top: 30px;
}

.timer {
    font-size: 1rem;
    text-align: center;
}
</style>
<script>
import axios from 'axios';
import {baseUrl} from "@/reactive/api";
export default {
    name: 'verifyEmail',
    data() {
        return {
            loading: false,
            seconds: 0,
            minutes: 0,
            hours: 0,
            targetTime: 0,
            code: '',
            alertMessageCode: '',
            showAlertCode: false,
        }
    },
    computed: {
        timer() {
            return `${this.padNumber(this.hours)}:${this.padNumber(this.minutes)}:${this.padNumber(this.seconds)}`
        }
    },
    mounted() {

        this.targetTime = (this.hours * 3600) + (this.minutes * 60) + this.seconds;
        this.interval = setInterval(() => {
            if (this.seconds === 0 && this.minutes === 0 && this.hours === 0) {
                clearInterval(this.interval);
                // Timer has reached target time, do something here...
            } else if (this.seconds === 0 && this.minutes > 0) {
                this.seconds = 59;
                this.minutes--;
            } else if (this.seconds === 0 && this.minutes === 0 && this.hours > 0) {
                this.seconds = 59;
                this.minutes = 59;
                this.hours--;
            } else {
                this.seconds--;
            }
        }, 1000)
    },
    methods: {
        async reSendCode() {
            const headers = {
                'Authorization': `Bearer ${localStorage.token}`
            };
            const result = await axios.get(`${baseUrl.url}/api/users/verifyEmail`, {headers})
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
            console.log('------------++++++++++++++++++++', result);
        },
        async sendCode() {
            console.log('-----------------------------------------',localStorage.token)
            this.loading = true;
            this.checkCode();
            if (!this.showAlertCode) {
                let result = await axios.post(`${baseUrl.url}/api/users/verifyEmail`, {
                        code: this.code
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.token}`,
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    }
                ).then(response => {
                    console.log(response.data.email);
                    this.$router.push('/homePage');
                    // this.loading = false;

                }).catch(error => {
                    this.alertMessageCode = error.response.data.message;
                    this.showAlertCode = true;
                    console.log('---------------------------');
                    console.log(error.response.data.message);
                    // this.loading = false;

                })
                console.log(result);
                // this.loading = false;

            }
        },
        checkCode() {

            const regex = /^\D*(\d\D*){4}$/;
            let result = regex.test(this.code);
            if (this.code == '') {
                this.showAlertCode = true;
                this.alertMessageCode = 'Please enter 4 number code'
            } else if (!result) {
                this.showAlertCode = true,
                    this.alertMessageCode = 'Input must be exactly 4 digits'
            } else {
                this.showAlertCode = false
            }
        },
        padNumber(number) {
            return number.toString().padStart(2, '0')
        }
    }
}
</script>




