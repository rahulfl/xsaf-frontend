<template>

<!-- headings starts-->
<div class="justify-between gap-1 flex font-Manrope font-medium ">
        <div class="h-[38px] w-[456.5] justify-start items-center gap-[32px] flex text-[#0F0F0F]">
            <div class="w-[32px] h-[32px] relative">
                <svg class="w-[32px] h-[32px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"/>
                </svg>
            </div>
            <div class="text-[32px] ">Transactions</div>
        </div>
</div>
<!-- headings ends-->

<!--- form starts -->
<div class="relative overflow-x-auto pt-[48px] font-Manrope">
        <div class="w-full h-[68px] flex-col justify-start items-start gap-[24px] inline-flex">
            <div class="self-stretch justify-between items-end inline-flex">
                <div class="text-[#0F0F0F] text-[20px] font-medium font-Manrope leading-normal">Add Transactions</div>
                <div class="justify-start items-center gap-[16px] flex">
                    <button @click="goToTransactionsPage" type="button" class="w-[78px] h-[44px] text-[#74797C] bg-[#F8F9FA] border border-[#74797C] hover:bg-[#DDDDDD] focus:ring-0 font-medium text-[14px] rounded-[4px] px-[16px] py-[10px]">Cancel</button>
                    <button @click="submitForm" type="button" class="w-[143px] h-[44px] text-white text-[14px] bg-[#12B87C] hover:bg-emerald-400 focus:ring-0 font-medium rounded-[4px] text-[14px] px-[16px] py-[10px]">Save transaction</button>
                </div>
            </div>
            <div class="self-stretch h-[0px] border border-neutral-200"></div>
        </div>       
        
        <div class="w-[632px] h-[1470px] flex-col justify-start items-start pt-[48px] space-y-[48px]">
            <div class="h-[147px] w-[300px] flex-col justify-end items-start gap-[16px] flex">
                <div class="h-[87px] flex-col justify-start items-start gap-[12px] flex">
                    <label for="customer" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F]">Customer</label>
                    <select id="customer" ref="customer" v-model="customer_id_val" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] block w-[300px] h-[56px] p-[16px] hover:bg-white focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white">
                            <option selected>Select</option>
                            <option v-for="cust in customer.data" :value="cust.id" :key="cust.id">{{cust.name}}</option>
                    </select>
                </div>
                <p id="error" ref="customer_error" class="text-[#EE506D]">{{customer_error}}</p>
                <div class="justify-start items-start inline-flex ">
                    <div class="relative">
                        <div class="absolute inset-y-0 flex items-center pl-[12px] pointer-events-none">
                            <img class="w-[20px] h-[20px]" src="/public/images/add_green.svg" alt="image description">
                        </div>
                        <button @click="" type="button" class="w-[112px] h-[44px] text-[#12B87C] bg-[#F8F9FA] border border-[#12B87C] focus:outline-none focus:ring-0 focus:ring-[#12B87C] font-medium text-[14px] py-[10px] pl-[12px] rounded-[4px] hover:bg-green-100">Add new</button>
                    </div> 
                </div>
            </div>

            <div class="h-[87px] w-[300px] flex-col justify-start items-start gap-[12px] flex">
                <label for="uId" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F]">UID</label>
                <input type="text" id="uId" ref="uId" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white" placeholder="fihd048485jshdkjhf"/>
                <p id="error" ref="uid_error" class="text-[#EE506D]">{{uid_error}}</p>
            </div>

            <div id="date-range-picker" class="w-[632px] flex gap-[32px]">
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <div class="absolute inset-y-0 start-[270px] pt-[48px] flex items-center pointer-events-none">
                            <img class="w-[16.67px] h-[18.33px]" src="/public/images/calendar.svg" alt="image description">
                        </div>
                        <label for="purchaseDate" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Purchase date</label>
                        <input datepicker datepicker-autohide datepicker-format="yyyy-mm-dd" id="purchaseDate" name="purchaseDate" ref="purchaseDate" type="text" class="bg-[#F8F9FA] font-Manrope border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#74797C] focus:border-[#74797C] active:bg-white focus:bg-white block w-[300px] h-[56px] ps-[16px] hover:bg-white" placeholder="2024-01-20">
                        <p id="error" ref="purchase_date_error" class="text-[#EE506D]">{{purchase_date_error}}</p>
                    </div>
                </div>
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <div class="absolute inset-y-0 start-[270px] pt-[48px] flex items-center pointer-events-none">
                            <img class="w-[16.67px] h-[18.33px]" src="/public/images/calendar.svg" alt="image description">
                        </div>
                        <label for="deliveryDate" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Delivery date</label>
                        <input datepicker datepicker-autohide datepicker-format="yyyy-mm-dd" id="deliveryDate" name="deliveryDate" ref="deliveryDate" type="text" class="bg-[#F8F9FA] font-Manrope border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#74797C] focus:border-[#74797C] active:bg-white focus:bg-white block w-[300px] h-[56px] ps-[16px] hover:bg-white" placeholder="2024-01-22">
                        <p id="error" ref="delivery_date_error" class="text-[#EE506D]">{{delivery_date_error}}</p>
                    </div>
                </div>
            </div>

            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <label for="fuel" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Fuel</label>
                        <input type="text" id="fuel" ref="fuel" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white" placeholder="kerosene"/>
                        <p id="error" ref="fuel_error" class="text-[#EE506D]">{{fuel_error}}</p>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="location" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Location</label>
                        <input type="text" id="location" ref="location" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white" placeholder="Zurich"/>
                        <p id="error" ref="location_error" class="text-[#EE506D]">{{location_error}}</p>
                </div>
            </div>

            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                    <div class="relative">
                        <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                            <div class="absolute inset-y-0 start-4 pt-[40px] flex items-center justify-right pointer-events-none">
                                <div class="text-[12px] pl-56 pt-3 text-[#0F0F0F]">tonne</div>
                            </div>
                            <label for="quantity" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Quantity</label>
                            <input type="text" id="quantity" ref="quantity" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] pr-[66px] hover:bg-white" placeholder="X.X"/>
                        </div>
                    </div>
                    <p id="error" ref="quantity_error" class="text-[#EE506D]">{{quantity_error}}</p>
                </div>
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                    <div class="relative">
                        <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                            <div class="absolute inset-y-0 start-4 pt-[40px] flex items-center justify-right pointer-events-none">
                                <div class="text-[12px] pl-[200px] pt-3 text-[#0F0F0F]">USD/tonne</div>
                            </div>
                            <label for="price" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Price</label>
                            <input type="text" id="price" ref="price" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[90px] hover:bg-white" placeholder="X.X"/>
                        </div>
                    </div>
                    <p id="error" ref="price_error" class="text-[#EE506D]">{{price_error}}</p>
                </div>
            </div>

            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                    <label for="trader" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Trader</label>
                    <select id="trader" ref="trader" v-model="trader_val" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] block w-[300px] h-[56px] p-[16px] hover:bg-white focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white">
                            <option selected>Select</option>
                            <option v-for="trade in trader.data" :key="trade.id" :value="trade.id">{{trade.name}}</option>
                    </select>
                    <p id="error" ref="trader_id_error" class="text-[#EE506D]">{{trader_id_error}}</p>
                </div>
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                    <label for="trackingId" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Tracking ID</label>
                    <input type="text" id="trackingId" ref="trackingId" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[90px] hover:bg-white" placeholder="rhif348ffjs"/>
                    <p id="error" ref="tracking_id_error" class="text-[#EE506D]">{{tracking_id_error}}</p>
                </div>
            </div>

            <div class ="w-[632px]"><div class="self-stretch h-[0px] border border-neutral-200"></div></div>
            
            <div class="w-[350px] h-[147px] flex-col justify-end items-start space-y-[16px] flex">
                <div class="h-[87px] w-[300px] flex-col justify-start items-start gap-[12px] flex">
                    <label for="cdrProvider" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F]">CDR provider</label>
                    <select id="cdrProvider" ref="cdrProvider" v-model="cdr_provider_val" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] block w-[300px] h-[56px] p-[16px] hover:bg-white focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white">
                            <option selected>Select</option>
                            <option v-for="cdr in cdrProvider.data" :key="cdr.id" :value="cdr.id">{{cdr.name}}</option>
                    </select>
                </div>
                <p id="error" ref="cdr_provider_id_error" class="text-[#EE506D]">{{cdr_provider_id_error}}</p>
                <div class="justify-start items-start inline-flex">
                    <div class="relative">
                        <div class="absolute inset-y-0 flex items-center pl-[12px] pointer-events-none">
                            <img class="w-[20px] h-[20px]" src="/public/images/add_green.svg" alt="image description">
                        </div>
                        <button @click="" type="button" class="w-[112px] h-[44px] text-[#12B87C] bg-[#F8F9FA] border border-[#12B87C] focus:outline-none focus:ring-0 focus:ring-[#12B87C] font-medium text-[14px] py-[10px] pl-[12px] rounded-[4px] hover:bg-green-100">Add new</button>
                    </div> 
                </div>
            </div>

            <div class="h-[87px] w-[300px] flex-col justify-start items-start space-y-[12px] flex">
                <label for="cdrId" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F]">CDR ID</label>
                <input type="text" id="cdrId" ref="cdrId" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white" placeholder="hsdg3443dfdfd"/>
                <p id="error" ref="cdr_id_error" class="text-[#EE506D]">{{cdr_id_error}}</p>
            </div>

            <div class="h-[87px] w-[350px] flex-col justify-start items-start space-y-[12px] flex">
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <div class="absolute inset-y-0 start-4 pt-[40px] flex items-center justify-right pointer-events-none">
                            <div class="text-[12px] pl-[230px] pt-3 text-[#0F0F0F]">CO2/t</div>
                        </div>
                        <label for="carbonIntensityUpstream" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Carbon intensity upstream</label>
                        <input type="text" id="carbonIntensityUpstream" ref="carbonIntensityUpstream" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[60px] hover:bg-white" placeholder="X.X"/>
                    </div>
                </div>
                <p id="error" ref="carbon_intensity_upstream_error" class="text-[#EE506D]">{{carbon_intensity_upstream_error}}</p>
            </div>

            <div class="h-[87px] w-[300px] flex-col justify-start items-start space-y-[12px] flex">
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <div class="absolute inset-y-0 start-4 pt-[40px] flex items-center justify-right pointer-events-none">
                            <div class="text-[12px] pl-[230px] pt-3 text-[#0F0F0F]">tonne</div>
                        </div>
                        <label for="carbonRemoved" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Carbon removed</label>
                        <input type="text" id="carbonRemoved" ref="carbonRemoved" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[60px] hover:bg-white" placeholder="X.X"/>
                    </div>
                </div>
                <p id="error" ref="carbon_removed_error" class="text-[#EE506D]">{{carbon_removed_error}}</p>
            </div>
        </div>
        <div class="w-full h-[44px] justify-end items-center flex pt-[180px]">
                <div class="justify-end items-center gap-[16px] flex">
                    <button @click="goToTransactionsPage" type="button" class="w-[78px] h-[44px] text-[#74797C] bg-[#F8F9FA] border border-[#74797C] hover:bg-[#DDDDDD] focus:ring-0 font-medium text-[14px] rounded-[4px] px-[16px] py-[10px]">Cancel</button>
                    <button @click="submitForm" type="button" class="w-[143px] h-[44px] text-white text-[14px] bg-[#12B87C] hover:bg-emerald-400 focus:ring-0 font-medium rounded-[4px] text-[14px] px-[16px] py-[10px]">Save transaction</button>
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
    name: "AddTransactionsView",
    methods: {
        goToTransactionsPage() {
            this.$router.push("/transactions");
        },
        goToAddCustomerPage() {
           
        },
        submitForm(){
            axios.put('transaction/'+this.t_id, 
               {
                    "customer_id": this.$refs.customer.value,
                    "uid": this.$refs.uId.value,
                    "purchase_date": this.$refs.purchaseDate.value,
                    "delivery_date": this.$refs.deliveryDate.value,
                    "fuel": this.$refs.fuel.value,
                    "location": this.$refs.location.value,
                    "quantity": this.$refs.quantity.value,
                    "unit_id": 1,
                    "price": this.$refs.price.value,
                    "trader_id": this.$refs.trader.value,
                    "tracking_id": this.$refs.trackingId.value,
                    "cdr_provider_id": this.$refs.cdrProvider.value,
                    "cdr_id": this.$refs.cdrId.value,
                    "carbon_intensity_upstream": this.$refs.carbonIntensityUpstream.value,
                    "carbon_removed": this.$refs.carbonRemoved.value
                }
            )
            .then(response => {
                this.$router.push("/transactions");
            })
            .catch(error => {
                // Handle errors
                this.errors = error.response.data.data;
                if(this.errors){
                    if(this.errors.customer_id){this.customer_error = this.errors.customer_id[0];} else if(this.errors.customer_id==undefined){this.customer_error = "";}
                    if(this.errors.uid){this.uid_error = this.errors.uid[0];} else if(this.errors.uid==undefined){this.uid_error = "";}
                    if(this.errors.purchase_date){this.purchase_date_error = this.errors.purchase_date[0];} else if(this.errors.purchase_date==undefined){this.purchase_date_error = "";}
                    if(this.errors.delivery_date){this.delivery_date_error = this.errors.delivery_date[0];} else if(this.errors.delivery_date==undefined){this.delivery_date_error = "";}
                    if(this.errors.fuel){this.fuel_error = this.errors.fuel[0];} else if(this.errors.fuel==undefined){this.fuel_error = "";}
                    if(this.errors.location){this.location_error = this.errors.location[0];} else if(this.errors.location==undefined){this.location_error = "";}
                    if(this.errors.quantity){this.quantity_error = this.errors.quantity[0];} else if(this.errors.quantity==undefined){this.quantity_error = "";}
                    if(this.errors.price){this.price_error = this.errors.price[0];} else if(this.errors.price==undefined){this.price_error = "";}
                    if(this.errors.trader_id){this.trader_id_error = this.errors.trader_id[0];} else if(this.errors.trader_id==undefined){this.trader_id_error = "";}
                    if(this.errors.tracking_id){this.tracking_id_error = this.errors.tracking_id[0];} else if(this.errors.tracking_id==undefined){this.tracking_id_error = "";}
                    if(this.errors.cdr_provider_id){this.cdr_provider_id_error = this.errors.cdr_provider_id[0];} else if(this.errors.cdr_provider_id==undefined){this.cdr_provider_id_error = "";}
                    if(this.errors.cdr_id){this.cdr_id_error = this.errors.cdr_id[0];} else if(this.errors.cdr_id==undefined){this.cdr_id_error = "";}
                    if(this.errors.carbon_intensity_upstream){this.carbon_intensity_upstream_error = this.errors.carbon_intensity_upstream[0];} else if(this.errors.carbon_intensity_upstream==undefined){this.carbon_intensity_upstream_error = "";}
                    if(this.errors.carbon_removed){this.carbon_removed_error = this.errors.carbon_removed[0];} else if(this.errors.carbon_removed==undefined){this.carbon_removed_error = "";}
                }
            });
            
        }
    },
    data() {
        return {
            customer: [],
            trader: [],
            cdrProvider: [],
            customer_id_val : null,
            cdr_provider_val : null,
            trader_val : null,
            t_id: null,
            errors: [],
            customer_error: null,
            uid_error: null,
            purchase_date_error: null,
            delivery_date_error: null,
            fuel_error: null,
            location_error: null,
            quantity_error: null,
            price_error: null,
            trader_id_error: null,
            tracking_id_error: null,
            cdr_provider_id_error: null,
            cdr_id_error: null,
            carbon_intensity_upstream_error: null,
            carbon_removed_error: null
        };
    },
    async created() {
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
                    
                    // GET request for retrieving transaction details (id as parameter) 
                    const transaction_edit = await axios.get('transaction/'+pair[1]);
                    const transaction = transaction_edit.data.data[0];

                    // Setting all input values to the stored values 
                    this.customer_id_val = transaction.customer_id; 
                    this.$refs.uId.value = transaction.uid;
                    this.$refs.purchaseDate.value = transaction.purchase_date;
                    this.$refs.deliveryDate.value = transaction.delivery_date;
                    this.$refs.fuel.value = transaction.fuel;
                    this.$refs.location.value = transaction.location;
                    this.$refs.quantity.value = transaction.quantity; 
                    this.$refs.price.value = transaction.price;
                    this.trader_val = transaction.trader_id; 
                    this.$refs.trackingId.value = transaction.tracking_id;
                    this.cdr_provider_val = transaction.transaction_cdr_detail.cdr_provider_id;
                    this.$refs.cdrId.value = transaction.transaction_cdr_detail.cdr_id;
                    this.$refs.carbonIntensityUpstream.value = transaction.transaction_cdr_detail.carbon_intensity_upstream;
                    this.$refs.carbonRemoved.value = transaction.transaction_cdr_detail.carbon_removed;
                }

                // Dropdowns 
                const response_customer = await axios.get('customer');
                this.customer = response_customer.data;
                const response_trader = await axios.get('trader');
                this.trader = response_trader.data;
                const response_cdrProvider = await axios.get('supplier');
                this.cdrProvider = response_cdrProvider.data;
            } 
            catch (error) {
                console.error(error);
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