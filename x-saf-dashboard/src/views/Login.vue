<template>
<section class="bg-[url('/public/background.png')] bg-cover bg-center">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-[480px] h-[646px] bg-white rounded-[8px] p-[48px] space-y-[32px] shadow">
            <div class="w-[179.26px] h-[48px]">
                <div class="flex gap-2">
                    <img class="" src="/public/images/Vector.svg" alt="image description">
                    <img class="" src="/public/images/Group.svg" alt="image description">
                </div>
            </div>
          <div class="w-[384px] h-[320px] space-y-[20px] font-Manrope font-medium">
              <div class="text-[32px] text-left text-[#0F0F0F]">
                  Log in to your account
              </div>
              <form class="w-[384px] h-[198px] space-y-[24px] text-left" action="#" @submit.prevent="handleSubmit">
                  <div class="w-[384px] h-[87px] space-y-[12px]">
                      <label for="email" class="text-[#0F0F0F] text-[16px]">Email</label>
                      <input type="text" name="email" id="email" v-model="email" class="bg-[#F8F9FA] text-[#74797C] rounded-[4px] focus:bg-white focus:border-[#DDDDDD] focus:ring-0 focus:ring-[#DDDDDD] border border-[#DDDDDD] w-[384px] h-[56px] p-[16px]" placeholder="">
                      <span id="email_error" ref="email_error" class="text-rose-400">{{email_error}}</span>
                  </div>
                  <div class="w-[384px] h-[87px] space-y-[12px]">
                      <label for="password" class="text-[#0F0F0F] text-[16px]">Password</label>
                      <input type="password" name="password" id="password" v-model="password" placeholder="" class="bg-[#F8F9FA] text-[#74797C] rounded-[4px] focus:bg-white focus:border-[#DDDDDD] focus:ring-0 focus:ring-[#DDDDDD] border border-[#DDDDDD] w-[384px] h-[56px] p-[16px]">
                      <span id="password_error" ref="password_error" class="text-rose-400">{{password_error}}</span>
                  </div>
                  <div class="flex items-center justify-between w-[384px] h-[20px] pt-[25px]">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input v-model="rememberMe" id="rememberMe" aria-describedby="remember" type="checkbox" class="w-[15px] h-[15px] border border-[#74797C] focus:ring-0">
                          </div>
                          <div class="ml-3">
                            <label for="remember" class="text-[#74797C] text-[16px] ">Remember me</label>
                          </div>
                      </div>
                      <router-link to="" class="text-[16px] font-medium text-[#12B87C] hover:underline">Forgot password?</router-link>
                  </div>
                  <div class="w-[384px] h-[100px] space-y-[16px] text-center pt-[30px]">
                    <button type="submit" class="w-[384px] h-[56px] text-white bg-[#12B87C] rounded-[4px] px-[24px] py-[16px] text-center">Log in</button>
                    <p class="text-[16px] text-[#74797C] pt-[10px]">
                        Don’t have an account yet? <router-link to="/register" class="text-[#12B87C] hover:underline">Sign up</router-link>
                    </p>
                  </div>
              </form>
          </div>
      </div>
  </div>
</section>

</template>


<script>
import axios from 'axios';
import {useRouter} from 'vue-router';

export default{
    name: "Login",
    async created() {
        let token = localStorage.getItem('token');
        if(token){
            let redirect = localStorage.getItem('redirect');
            if(redirect!= null){
                this.$router.push('/'+ redirect);
            }
            else{
                this.$router.push('/');
            }
        }
    },
    data() {
        return {
            email: '',
            password: '',
            email_error:'',
            password_error:'',
            rememberMe: false
        }
    },
    mounted() {
        // Check if a email is saved in localStorage and autofill the field
        const savedemail = localStorage.getItem('email');
        if (savedemail) {
            this.email = savedemail;
            this.rememberMe = true;
        }
    },
    methods: {
        async handleSubmit() {
            // Handle your login logic here
            if (this.rememberMe) {
                // Save the email in localStorage
                localStorage.setItem('email', this.email);
            } else {
                // Clear the email from localStorage if not "Remember Me"
                localStorage.removeItem('email');
            }
            try{
                let token = localStorage.getItem('token');
                const response = await axios.post('login', 
                    {
                        email:this.email,
                        password: this.password
                    },
                    {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                localStorage.setItem('token',response.data.data.authorisation.access_token);
                let redirect = localStorage.getItem('redirect');
                if(redirect!= null){
                    this.$router.push('/'+ redirect);
                }
                else{
                    this.$router.push('/transactions');
                }
            }
            catch (error) {
                if(error.response.data.errors.email){
                    this.email_error = error.response.data.errors.email[0];
                }
                else{
                    this.email_error = "";
                }
                if(error.response.data.errors.password){
                    this.password_error = error.response.data.errors.password[0];
                }
                else{
                    this.password_error = "";
                }
                if(error.response){
                    this.$router.push('/');
                }
            }
        }
    }
}
</script>
