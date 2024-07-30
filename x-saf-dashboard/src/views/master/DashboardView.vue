<template>
    <div class="w-screen h-screen flex"> 
        <!--- Side bar Heading-->
        <div class="w-[260px] h-full bg-white text-black" v-show="showSide">
            <div class="w-[300px] h-28 p-8 bg-white justify-start items-center inline-flex">
                <div class="w-[179.26px] h-12 relative p-3 pt-3">
                    <div class="w-[160px] h-[45.81px] absolute">
                        <img class="" src="/public/X-SAF-logo.png" alt="image description">
                    </div>
                </div>
            </div>
            <!--Top left sidebar items-->
             <div class="h-[calc(130vh-50px)] bg-white py-[20px]">
                <div class="flex flex-col justify-between h-full px-[30px] space-y-[10px]">
                    <div class="flex flex-col justify-between space-y-[10px]">
                        <div class="h-[calc(100vh-50px)]">
                            <router-link to="/" class="inline-flex relative items-center py-[10px] px-[10px] gap-4 w-full text-sm font-medium font-['Manrope'] rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out">
                                <svg class="h-6 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="4" y1="12" x2="20" y2="12" />
                                </svg>
                                Dashboard
                            </router-link>
                            <router-link to="/transactions" class="inline-flex relative items-center py-[10px] px-[10px] gap-4 w-full text-sm font-medium font-['Manrope'] rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out">
                                <svg class="h-6 w-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"/>
                                </svg>
                                Transactions
                            </router-link>
                            <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] gap-4 w-full text-sm font-medium font-['Manrope'] rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                                <svg class="h-6 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                                Customers
                            </router-link>
                            <router-link to="/message" class="inline-flex relative items-center py-[10px] px-[10px] gap-4 w-full text-sm font-medium font-['Manrope'] rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                                <svg class="h-6 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                                    <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="4" y1="19" x2="20" y2="19" />  <polyline points="4 15 8 9 12 11 16 6 20 10" />
                                </svg>
                                Traders
                            </router-link>
                            <router-link to="/download" class="inline-flex relative items-center py-[10px] px-[10px] gap-4 w-full text-sm font-medium font-['Manrope'] rounded-md rounded-b-lg hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                                <svg class="h-6 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                                </svg>
                                Suppliers
                            </router-link>
                        </div>
                        <!--Bottom left sidebar items-->
                        <div class="h-[50px] font-['Manrope']">
                            <div class="flex">
                                <router-link to="/about" class="inline-flex absolute items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                                    About
                                </router-link>
                                <router-link to="/contact" class="inline-flex absolute items-center py-[10px] px-[70px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out">
                                    Contact
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-gray-400 font-['Manrope']">
            <!--Top menu-->
            <div class="h-[110px] bg-white flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b pt-5">
                <!-- Hambuger menu -->
                <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class=" w-[25px] h-[25px]">
                    <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </div> 
                <!--Main menu stats-->
                <div class="relative overflow-x">
                    <div class="w-[600px] h-[66px] justify-start items-center gap-12 inline-flex pl-7">
                        <div class="rounded-sm flex-col justify-center items-start gap-2.5">
                            <div class="text-stone-950 text-sm font-medium font-['Manrope'] leading-[36.80px]">X-SAF Price</div>
                            <div class="text-stone-950 text-base font-medium font-['Manrope'] leading-tight">18.2 USD/t</div>
                        </div>
                        <div class="rounded-sm flex-col justify-center items-start gap-2.5">
                            <div class="text-stone-950 text-sm font-medium font-['Manrope'] leading-[36.80px]">Balance</div>
                            <div class="text-stone-950 text-base font-medium font-['Manrope'] leading-tight">205.5 X-SAF</div>
                        </div>
                        <div class="rounded-sm flex-col justify-center items-start gap-2.5 ">
                            <div class="text-stone-950 text-sm font-medium font-['Manrope'] leading-[36.80px]">Carbon Removed</div>
                            <div class="text-stone-950 text-base font-medium font-['Manrope'] leading-tight">1047.32 t</div>
                        </div>
                    </div>
                </div>

                <div class="w-[calc(100%-30px)] flex justify-end">
                    <!-- User login -->
                    <div class="w-[200px] ">
                        <div class="flex items-center justify-start space-x-4" @click="toggleDrop">
                            <img class="w-10 h-10 relative rounded-[115.44px]" src="/man_dp.jpg" />
                            <div class="font-semibold dark:text-white text-left">
                                <div>Username</div>
                            </div>
                            <svg class="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="5" cy="5" r="1" />  <circle cx="12" cy="5" r="1" />  <circle cx="19" cy="5" r="1" />  <circle cx="5" cy="12" r="1" />  <circle cx="12" cy="12" r="1" />  <circle cx="19" cy="12" r="1" />  <circle cx="5" cy="19" r="1" />  <circle cx="12" cy="19" r="1" />  <circle cx="19" cy="19" r="1" /></svg>
                        </div>

                        <!-- Drop down -->
                        <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div class="py-1 text-left" role="none">
                                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                                <form method="POST" action="#" role="none">
                                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--body section-->
            <div class="h-[calc(130vh-50px)] bg-gray-50 p-[20px] overflow-y-auto">
                <div class=" rounded-md p-[20px] h-full">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            showDropDown: false,
            showSide: true
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
        }
    }
}

</script>

<style>

</style>