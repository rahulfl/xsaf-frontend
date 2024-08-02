<template>
    <div class="w-screen h-screen flex font-Manrope"> 
        <!--- Left Bar -->
        <div class="w-[347px] h-[1039px] bg-white text-[#0F0F0F]" v-show="showSide">
            <!--- Side bar top left Heading-->
            <div class="w-[347px] h-[112px] p-[32px] bg-white justify-start inline-flex">
                <div class="w-[179.26px] h-[48px] relative">
                    <div class="flex gap-2">
                        <img class="" src="/public/images/Vector.svg" alt="image description">
                        <img class="" src="/public/images/Group.svg" alt="image description">
                    </div>
                </div>
            </div>
            <!-- Left sidebar nav items-->
            <div class="h-[927px] w-[347px] bg-white px-[32px] py-[24px]">
                <div class="flex flex-col justify-between w-[283px] h-[332px] gap-[8px]">
                    <router-link to="" class="inline-flex relative items-start w-[283px] h-[60px] p-[20px] font-medium text-[16px] text-[#0F0F0F] font-Manrope rounded-[8px] hover:bg-gray-100 active:bg-[#D9EBFF] focus:bg-[#D9EBFF] gap-[24px]">
                        <img class="w-[17.5px] h-[20px]" src="/public/images/dashboard.svg" alt="image description">
                            Dashboard
                    </router-link>
                    <router-link to="/transactions" class="inline-flex relative items-start w-[283px] h-[60px] p-[20px] font-medium text-[16px] text-[#0F0F0F] font-Manrope rounded-[8px] hover:bg-gray-100 active:bg-[#D9EBFF] focus:bg-[#D9EBFF] gap-[24px]">
                        <img class="w-[17.5px] h-[20px]" src="/public/images/transactions.svg" alt="image description">
                            Transactions
                    </router-link>
                    <router-link to="" class="inline-flex relative items-start w-[283px] h-[60px] p-[20px] font-medium text-[16px] text-[#0F0F0F] font-Manrope rounded-[8px] hover:bg-gray-100 active:bg-[#D9EBFF] focus:bg-[#D9EBFF] gap-[24px]">
                        <img class="w-[17.5px] h-[20px]" src="/public/images/customers.svg" alt="image description">
                            Customers
                    </router-link>
                    <router-link to="" class="inline-flex relative items-start w-[283px] h-[60px] p-[20px] font-medium text-[16px] text-[#0F0F0F] font-Manrope rounded-[8px] hover:bg-gray-100 active:bg-[#D9EBFF] focus:bg-[#D9EBFF] gap-[24px]">
                        <img class="w-[17.5px] h-[20px]" src="/public/images/traders.svg" alt="image description">
                            Traders
                    </router-link>
                    <router-link to="" class="inline-flex relative items-start w-[283px] h-[60px] p-[20px] font-medium text-[16px] text-[#0F0F0F] font-Manrope rounded-[8px] hover:bg-gray-100 active:bg-[#D9EBFF] focus:bg-[#D9EBFF] gap-[24px]">
                        <img class="w-[17.5px] h-[20px]" src="/public/images/suppliers.svg" alt="image description">
                            Suppliers
                    </router-link>
                </div>
                <!--Bottom left sidebar items-->
                <div class="flex w-[176px] h-[65px] p-[24px] gap-[32px] pt-[530px]">
                    <router-link to="" class="inline-flex items-center font-medium text-[14px] text-[#0F0F0F] font-Manrope">
                        About
                    </router-link>
                    <router-link to="" class="inline-flex items-center font-medium text-[14px] text-[#0F0F0F] font-Manrope">
                        Contact
                    </router-link>
                </div>
            </div>
        </div>
        <div class="w-full h-full font-Manrope">
            <!--Top menu-->
            <div class="h-[112px] bg-white flex text-left w-full p-[32px]">
                <div class="h-[46px] w-[378px] flex items-center">
                    <!--Main menu stats-->
                    <div class="relative overflow-x">
                        <div class="w-[600px] h-[66px] justify-start items-center gap-[48px] inline-flex font-medium text-[#0F0F0F]">
                            <div class="rounded-[2px] flex-col justify-center items-start">
                                <div class="text-[14px] leading-[36.80px]">X-SAF Price</div>
                                <div class="text-[16px] leading-tight">18.2 USD/t</div>
                            </div>
                            <div class="rounded-[2px] flex-col justify-center items-start">
                                <div class="text-[14px] leading-[36.80px]">Balance</div>
                                <div class="text-[16px] leading-tight">205.5 X-SAF</div>
                            </div>
                            <div class="rounded-[2px] flex-col justify-center items-start">
                                <div class="text-[14px] leading-[36.80px]">Carbon Removed</div>
                                <div class="text-[16px] leading-tight">1047.32 t</div>
                            </div>
                        </div>
                    </div>

                    <div class="w-[188px] h-[48px] gap-[32px] absolute top-10 right-5">
                        <!-- User login -->
                        <div class="w-[200px] ">
                            <div class="flex items-center justify-start space-x-4" >
                                <img class="w-[40px] h-[40px] relative rounded-[115.44px]" src="/man_dp.jpg" />
                                <div class="font-semibold dark:text-white text-left">
                                    <div v-if="user">{{user.name}}</div>
                                </div>
                                <svg @click="toggleDrop" class="h-[24px] w-[24px] text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="5" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="19" cy="5" r="1" />  <circle cx="5" cy="12" r="1" />  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" />  <circle cx="5" cy="19" r="1" />  <circle cx="12" cy="19" r="1" />  <circle cx="19" cy="19" r="1" /></svg>
                            </div>

                            <!-- Drop down -->
                            <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1 text-left" role="none">
                                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                    <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                                    <form method="POST" action="#" role="none">
                                        <button type="submit" @click="handleSignout" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--body section-->
            <div class="h-[1960] bg-[#F8F9FA] p-[32px] overflow-y-auto">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Main',
    data() {
        return {
            showDropDown: false,
            showSide: true,
            user: null
        }
    },
    methods: {
        // hide show side bar
        toggleSideBar() {
            this.showSide = !this.showSide
        },
        // toggle user
        toggleDrop() {
            this.showDropDown = !this.showDropDown
        },
        handleSignout() {
            localStorage.removeItem('token');
            this.$router.push('/');
        }
    },
    async created() {
        let token = localStorage.getItem('token');
        if(token){
            try{
                const response = await axios.get('user');
                this.user = response.data.data.user;
            }
            catch(error){

            }
        }
        else{
            this.$router.push("/");
        }
    }
}

</script>

<style>

</style>