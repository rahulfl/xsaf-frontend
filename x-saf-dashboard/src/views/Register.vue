<template>
<section class="bg-[url('/public/background.png')] bg-cover bg-center">
  <div class="flex flex-col items-center justify-center p-[50px] font-medium font-Manrope text-left mx-auto md:h-screen lg:py-0">
      <div class="w-[820px] h-[719px] bg-white rounded-[8px] shadow p-[48px]">
          <div class="w-[179.26px] h-[48px]">
                <div class="flex gap-2">
                    <img class="" src="/public/images/Vector.svg" alt="image description">
                    <img class="" src="/public/images/Group.svg" alt="image description">
                </div>
          </div>
          <div class="p-[48px] w-[624px] h-[379px] space-y-[32px]">
              <div class="text-[32px] text-[#0F0F0F]">
                  Create your X-SAF account
              </div>
              <form class="w-[624px] h-[309px] space-y-[24px]" action="#" @submit.prevent="handleSubmit">
                    <div class="w-[624px] h-[87px] flex gap-[24px]">
                        <div class="flex flex-col w-[300px] h-[87px]">
                            <label for="name" class="text-[16px] text-[#0F0F0F] pb-[12px]">Name</label>
                            <input type="name" name="name" id="name" v-model="name" class="w-[300px] h-[56px] bg-[#F8F9FA] text-[#74797C] text-[16px] border border-[#DDDDDD] rounded-[4px] focus:bg-white focus:ring-0 focus:ring-[#DDDDDD] focus:border-[#DDDDDD] p-[16px]" placeholder="Enter your Name">
                            <span id="name_error" ref="name_error" class="text-rose-400 text-center">{{name_error}}</span>
                        </div>
                        <div class="flex flex-col w-[300px] h-[87px]">
                            <label for="email" class="text-[16px] text-[#0F0F0F] pb-[12px]">Email</label>
                            <input type="text" name="email" id="email" v-model="email" class="w-[300px] h-[56px] bg-[#F8F9FA] text-[#74797C] text-[16px] border border-[#DDDDDD] rounded-[4px] focus:bg-white focus:ring-0 focus:ring-[#DDDDDD] focus:border-[#DDDDDD] p-[16px]" placeholder="Enter your email">
                            <p id="email_error" ref="email_error" class="text-rose-400 text-center">{{email_error}}</p>
                        </div>
                  </div>
                  <div class="w-[624px] h-[87px] flex gap-[24px]">
                        <div class="flex flex-col w-[300px] h-[87px]">
                            <label for="password" class="text-[16px] text-[#0F0F0F] pb-[12px]">Password</label>
                            <input type="password" name="password" id="password" v-model="password" placeholder="Enter your password" class="w-[300px] h-[56px] bg-[#F8F9FA] text-[#74797C] text-[16px] border border-[#DDDDDD] rounded-[4px] focus:bg-white focus:ring-0 focus:ring-[#DDDDDD] focus:border-[#DDDDDD] p-[16px]">
                            <p id="password_error" ref="password_error" class="text-rose-400 text-center">{{password_error}}</p>
                        </div>
                        <div class="flex flex-col w-[300px] h-[87px]">
                            <label for="confirmPassword" class="text-[16px] text-[#0F0F0F] pb-[12px]">Confirm Password</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" v-model="confirmPassword" placeholder="Re-enter your password" class="w-[300px] h-[56px] bg-[#F8F9FA] text-[#74797C] text-[16px] border border-[#DDDDDD] rounded-[4px] focus:bg-white focus:ring-0 focus:ring-[#DDDDDD] focus:border-[#DDDDDD] p-[16px]">
                        </div>
                   </div>
                  <div class="w-[624px] h-[87px] flex gap-[24px]">
                        <div class="flex flex-col w-[300px] h-[87px]">
                            <label for="user_type_id" class="text-[16px] text-[#0F0F0F] pb-[12px]">User type</label>
                            <select id="user_type_id" ref="user_type_id" v-model="user_type_id" class="w-[300px] h-[56px] bg-[#F8F9FA] text-[#74797C] text-[16px] border border-[#DDDDDD] rounded-[4px] focus:bg-white focus:ring-0 focus:ring-[#DDDDDD] focus:border-[#DDDDDD] p-[16px]">
                                    <option selected>Select</option>
                                    <option v-for="u_type in user_type" :value="u_type.user_type_id" :key="u_type.user_type_id">{{u_type.name}}</option>
                            </select>
                            <p id="user_type_id_error" ref="user_type_id_error" class="text-rose-400 text-center">{{user_type_id_error}}</p>
                        </div>
                  </div>
                  <div class="flex flex-col items-center justify-between pt-[48px]">
                        <button type="submit" class="w-[624px] h-[56px] text-white bg-[#12B87C] focus:ring-0 focus:outline-none rounded-[4px] text-[16px] px-[24px] py-[16px] text-center">Sign up</button>
                        <p class="text-[16px] font-medium text-[#0F0F0F] pt-[20px]">Have an account? <router-link to="/" class="text-[16px] text-[#12B87C] hover:underline">Sign in</router-link> </p>      
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>

</template>

<script setup>
const user_type = [
    {"user_type_id":2,"name":"Trader"},
    {"user_type_id":3,"name":"Customer"},
    {"user_type_id":4,"name":"Supplier"}
]
</script>

<script>
import axios from 'axios';
import {useRouter} from 'vue-router';

export default{
    name: "Register",
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            user_type_id: '',
            name_error:'',
            email_error:'',
            password_error:'',
            user_type_id_error: ''
        }
    },
    methods: {
        async handleSubmit(){
            if(this.user_type_id == 'Select' || this.user_type_id== ''){
                this.user_type_id = null;
            }
            try{
                let token = localStorage.getItem('token');
                const response = await axios.post('register', 
                    {
                        "name": this.name,
                        "email": this.email,
                        "password": this.password,
                        "password_confirmation": this.confirmPassword,
                        "user_type_id" : this.user_type_id
                    },
                    {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.$router.push('/');
            }
            catch (error) { 
                if(error.response.data.data.name){
                    this.name_error = error.response.data.data.name[0];
                }
                else{
                    this.name_error = "";
                }
                if(error.response.data.data.email){
                    this.email_error = error.response.data.data.email[0];
                }
                else{
                    this.email_error = "";
                }
                if(error.response.data.data.password){
                    this.password_error = error.response.data.data.password[0];
                }
                else{
                    this.password_error = "";
                }
                if(error.response.data.data.user_type_id){
                    this.user_type_id_error = error.response.data.data.user_type_id[0];
                }
                else{
                    this.user_type_id_error ="";
                }
            }
        }
    } 
}
</script>