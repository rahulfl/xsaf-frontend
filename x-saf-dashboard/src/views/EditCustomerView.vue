<template>

<!-- heading starts -->
<div class="justify-between gap-1 flex font-Manrope h-[70px]">
        <div class="h-[38px] justify-start items-center gap-4 flex text-[#0F0F0F] font-medium font-Manrope">
            <div class="w-[32px] h-[32px] relative">
            <img class="w-[32px] h-[32px]" src="/public/images/customers.svg" alt="image description">
            
            </div>
            <div class="text-[32px] leading-[38.40px]">Customers</div>
        </div>
</div>
<!-- heading ends-->

<!--- form starts -->
<div class="relative overflow-x-auto pt-[48px] font-Manrope">
        <div class="w-full h-[68px] flex-col justify-start items-start gap-[24px] inline-flex">
            <div class="self-stretch justify-between items-end inline-flex">
                <div class="text-[#0F0F0F] text-[20px] font-medium font-Manrope leading-normal">Add Customer</div>
                <div class="justify-start items-center gap-[16px] flex">
                    <button @click="goToCustomerPage" type="button" class="w-[78px] h-[44px] text-[#74797C] bg-[#F8F9FA] border border-[#74797C] hover:bg-[#DDDDDD] focus:ring-0 font-medium text-[14px] rounded-[4px] px-[16px] py-[10px]">Cancel</button>
                    <button @click="submitForm" type="button" class="w-[143px] h-[44px] text-white text-[14px] bg-[#12B87C] hover:bg-emerald-400 focus:ring-0 font-medium rounded-[4px] text-[14px] px-[16px] py-[10px]">Save customer</button>
                </div>
            </div>
            <div class="self-stretch h-[0px] border border-neutral-200"></div>
        </div>  

        <div class="w-[632px] h-[680px] flex-col justify-start items-start pt-[48px] space-y-[48px]">
            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                    <label for="name" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Name</label>
                    <input type="text" id="name" ref="name" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                    <p id="error" ref="name_error" class="text-[#EE506D]">{{name_error}}</p>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                    <label for="contact_person" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Contact person</label>
                    <input type="text" id="contact_person" ref="contact_person" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                </div>
            </div>

            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                    <label for="email" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Email</label>
                    <input type="text" id="email" ref="email" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                    <p id="error" ref="email_error" class="text-[#EE506D]">{{email_error}}</p>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                    <label for="phone_no" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Phone</label>
                    <input type="text" id="phone_no" ref="phone_no" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                </div>
            </div>
        
            <div class="h-[87px] w-[350px] flex-col justify-start items-start space-y-[12px] flex">
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <label for="address" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Address</label>
                        <input type="text" id="address" ref="address" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[60px] hover:bg-white"/>
                    </div>
                </div>
            </div>
        
            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                    <label for="city" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">City</label>
                    <input type="text" id="city" ref="city" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                    <label for="state" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">State</label>
                    <input type="text" id="state" ref="state" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                </div>
            </div>
        
            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                    <label for="postal_code" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Postal code</label>
                    <input type="text" id="postal_code" ref="postal_code" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                    <label for="country_code" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Country code</label>
                    <input type="text" id="country_code" ref="country_code" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                </div>
            </div>
        </div>  

        <div class="w-full h-[44px] justify-end items-center flex pt-[120px]">
                <div class="justify-end items-center gap-[16px] flex">
                    <button @click="goToCustomerPage" type="button" class="w-[78px] h-[44px] text-[#74797C] bg-[#F8F9FA] border border-[#74797C] hover:bg-[#DDDDDD] focus:ring-0 font-medium text-[14px] rounded-[4px] px-[16px] py-[10px]">Cancel</button>
                    <button @click="submitForm" type="button" class="w-[143px] h-[44px] text-white text-[14px] bg-[#12B87C] hover:bg-emerald-400 focus:ring-0 font-medium rounded-[4px] text-[14px] px-[16px] py-[10px]">Save customer</button>
                </div>
        </div>
        <div class="pt-[64px]"></div>
      
</div>

<!---form ends -->

</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { useRoute } from 'vue-router'

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>

<script>
import axios from 'axios';

export default {
    name: "EditCustomerView",
    methods: {
        goToCustomerPage() {
            this.$router.push("/customers");
        },
        submitForm(){
            let token = localStorage.getItem('token');
            axios.put('customer/'+this.t_id, 
               {
                    "name": this.$refs.name.value,
                    "email": this.$refs.email.value,
                    "phone_no": this.$refs.phone_no.value,
                    "contact_person_name": this.$refs.contact_person.value,
                    "address": this.$refs.address.value,
                    "city": this.$refs.city.value,
                    "state": this.$refs.state.value,
                    //"country_id": this.$refs.country_code.value,
                    "postal_code": this.$refs.postal_code.value
                },
                {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                this.$router.push("/customers");
            })
            .catch(error => {
                // Handle errors
                this.errors = error.response.data.data;
                if(this.errors){
                    if(this.errors.name){this.name_error = this.errors.name[0];} else if(this.errors.name==undefined){this.name_error = "";}
                    if(this.errors.email){this.email_error = this.errors.email[0];} else if(this.errors.email==undefined){this.email_error = "";}
                }
            });
        },
    },
    data() {
        return {
            errors: [],
            name_error: null,
            email_error: null,
            t_id: null,
        };
    },
    async created() {
        const route = useRoute();
        localStorage.setItem('redirect','edit-customer?id='+route.query.id);
        let token = localStorage.getItem('token');
        if(token){
            try {
                // Getting the URL parameters and splitting the key and value 
                let queryString = window.location.search;
                let paramString = queryString.split('?')[1];
                let params_arr = paramString.split('&');
                for (let i = 0; i < params_arr.length; i++) {

                    let pair = params_arr[i].split('=');
                    this.t_id = pair[1];
                    
                    // GET request for retrieving customer details (id as parameter) 
                    const customer_edit = await axios.get('customer/'+pair[1],{
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    const customer = customer_edit.data.data[0];

                    // Setting all input values to the stored values 
                    this.$refs.name.value = customer.name;
                    this.$refs.email.value = customer.email;
                    this.$refs.phone_no.value = customer.phone_no;
                    this.$refs.contact_person.value = customer.contact_person_name;
                    this.$refs.address.value = customer.address;
                    this.$refs.city.value = customer.city;
                    this.$refs.state.value = customer.state;
                    //this.$refs.country_code.value = customer.country_id;
                    this.$refs.postal_code.value = customer.postal_code;
                }
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