<template>

<!-- heading begins-->
<div class="justify-between gap-1 flex font-Manrope h-[70px]">
        <div class="h-[38px] justify-start items-center gap-4 flex text-[#0F0F0F] font-medium font-Manrope">
            <div class="w-[32px] h-[32px] relative">
                <img class="w-[32px] h-[32px]" src="/public/images/suppliers.svg" alt="image description">
            </div>
            <div class="text-[32px] leading-[38.40px]">Suppliers</div>
        </div>
</div>
<!-- heading ends-->

<!--- form starts -->
<div class="relative overflow-x-auto pt-[48px] font-Manrope">
        <div class="w-full h-[68px] flex-col justify-start items-start gap-[24px] inline-flex">
            <div class="self-stretch justify-between items-end inline-flex">
                <div class="text-[#0F0F0F] text-[20px] font-medium font-Manrope leading-normal">Add supplier</div>
                <div class="justify-start items-center gap-[16px] flex">
                    <button @click="goToSuppliersPage" type="button" class="w-[78px] h-[44px] text-[#74797C] bg-[#F8F9FA] border border-[#74797C] hover:bg-[#DDDDDD] focus:ring-0 font-medium text-[14px] rounded-[4px] px-[16px] py-[10px]">Cancel</button>
                    <button @click="submitForm" type="button" class="w-[143px] h-[44px] text-white text-[14px] bg-[#12B87C] hover:bg-emerald-400 focus:ring-0 font-medium rounded-[4px] text-[14px] px-[16px] py-[10px]">Save supplier</button>
                </div>
            </div>
            <div class="self-stretch h-[0px] border border-neutral-200"></div>
        </div>  

        <div class="w-[632px] h-[100px] flex-col justify-start items-start pt-[48px] space-y-[48px]">
            <div class="h-[87px] w-[350px] flex-col justify-start items-start space-y-[12px] flex">
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <label for="name" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Name</label>
                        <input type="text" id="name" ref="name" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[60px] hover:bg-white"/>
                        <p id="error" ref="name_error" class="text-[#EE506D]">{{name_error}}</p>
                    </div>
                </div>
            </div>
        </div>  

        <div class="w-full h-[44px] justify-end items-center flex pt-[120px]">
                <div class="justify-end items-center gap-[16px] flex">
                    <button @click="goToSuppliersPage" type="button" class="w-[78px] h-[44px] text-[#74797C] bg-[#F8F9FA] border border-[#74797C] hover:bg-[#DDDDDD] focus:ring-0 font-medium text-[14px] rounded-[4px] px-[16px] py-[10px]">Cancel</button>
                    <button @click="submitForm" type="button" class="w-[143px] h-[44px] text-white text-[14px] bg-[#12B87C] hover:bg-emerald-400 focus:ring-0 font-medium rounded-[4px] text-[14px] px-[16px] py-[10px]">Save supplier</button>
                </div>
        </div>
        <div class="pt-[64px]"></div>
      
</div>

<!---form ends -->

</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<script>
import axios from 'axios';

export default {
    name: "AddSupplierView",
    methods: {
        goToSuppliersPage() {
            this.$router.push("/suppliers");
        },
        submitForm(){
            axios.post('supplier', 
                {
                    "name": this.$refs.name.value,
                }
            )
            .then(response => {
                this.$router.push("/suppliers");
            })
            .catch(error => {
                // Handle errors
                this.errors = error.response.data.data;
                if(this.errors){
                    if(this.errors.name){this.name_error = this.errors.name[0];} else if(this.errors.name==undefined){this.name_error = "";}
                }
            });
        },
    },
    data() {
        return {
            errors: [],
            name_error: null
        };
    },
    async created() {
        localStorage.setItem('redirect','add-supplier');
        let token = localStorage.getItem('token');
        if(token){
            try {

            } 
            catch (error) {
                console.error(error);
                if(error.response.data.message =="Unauthenticated."){
                    localStorage.removeItem('token');
                    this.$router.push('/');
                }
            }
        }
        else{
            this.$router.push("/");
        }
    }
};
</script>

<style>

</style> 