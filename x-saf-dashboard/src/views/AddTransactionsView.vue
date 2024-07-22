<template>

<!-- headings starts-->
<div class="justify-between gap-1 flex">
        <div class="h-[38px] justify-start items-center gap-4 flex">
            <div class="w-8 h-8 relative">
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"/>
                </svg>
            </div>
            <div class="text-stone-950 text-[32px] font-medium font-['Manrope'] leading-[38.40px]">Transactions</div>
        </div>
</div>
<!-- headings ends-->

<!--- form starts -->
<div class="relative overflow-x-auto pt-7">

        <div class="w-full h-[68px] flex-col justify-start items-start gap-6 inline-flex">
            <div class="self-stretch justify-between items-end inline-flex">
                <div class="text-stone-950 text-xl font-medium font-['Manrope'] leading-normal">Add Transactions</div>
                <div class="justify-start items-center gap-4 flex">
                    <button @click="goToTransactionsPage" type="button" class="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
                    <button @click="submitForm" type="button" class="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-1 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Save transaction</button>
                </div>
            </div>
            <div class="self-stretch h-[0px] border border-neutral-200"></div>
        </div>       
        
        <div class="w-[632px] h-[1250px] flex-col justify-start items-start gap-12 p-3 pt-9">
        
            <div class="flex-col justify-end items-start gap-4 flex">
                <div class="h-[87px] flex-col justify-start items-start gap-3 flex">
                    <label for="customer" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Customer</label>
                    <select id="customer" ref="customer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option v-for="cust in customer.data" :value="cust.id" :key="cust.id">{{cust.name}}</option>
                    </select>
                </div>
                <div class="justify-start items-start inline-flex">
                    <button type="button" class="text-green-500 bg-white border border-green-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">+ Add new</button>
                </div>
            </div>
            <div class="h-[87px] flex-col justify-start items-start gap-3 flex pt-3">
                <label for="uId" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">UID</label>
                <input type="text" id="uId" ref="uId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="fihd048485jshdkjhf" required />
            </div>
            

            <div id="date-range-picker" date-rangepicker datepicker-format="yyyy-mm-dd" class="flex pt-8 gap-8">
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pt-7 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <label for="purchaseDate" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Purchase date</label>
                        <input id="purchaseDate" name="purchaseDate" ref="purchaseDate" type="text" datepicker-format="dd-mm-yyyy" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2024-01-20">
                    </div>
                </div>
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pt-7 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <label for="deliveryDate" class="block text-base font-['Manrope'] pr-48 font-medium text-gray-900 dark:text-white">Delivery date</label>
                        <input id="deliveryDate" name="deliveryDate" ref="deliveryDate" type="text" datepicker-format="dd-mm-yyyy" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2024-01-22">
                    </div>
                </div>
            </div>

            <div class="self-stretch justify-start items-start gap-8 inline-flex pt-8">
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="fuel" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Fuel</label>
                        <input type="text" id="fuel" ref="fuel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="kerosene" required />
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="location" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Location</label>
                        <input type="text" id="location" ref="location" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Zurich" required />
                </div>
            </div>
            <div class="self-stretch justify-start items-start gap-8 inline-flex pt-8">
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                    <div class="relative">
                        <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                            <div class="absolute inset-y-0 start-0 flex items-center justify-right ps-3 pt-7 pointer-events-none">
                                <div class="text-sm pl-56 pt-2">tonne</div>
                            </div>
                            <label for="quantity" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Quantity</label>
                            <input type="text" id="quantity" ref="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="X.X" required />
                        </div>
                    </div>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                    <div class="relative">
                        <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                            <div class="absolute inset-y-0 start-0 flex items-center justify-right ps-3 pt-7 pointer-events-none">
                                <div class="text-sm pl-48 pt-2">USD/tonne</div>
                            </div>
                            <label for="price" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="text" id="price" ref="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="X.X" required />
                        </div>
                    </div>
                </div>
            </div>
            <div class="self-stretch justify-start items-start gap-8 inline-flex pt-8">
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                    <label for="trader" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Trader</label>
                    <select id="trader" ref="trader" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option v-for="trade in trader.data" :key="trade.id" :value="trade.id">{{trade.name}}</option>
                           
                    </select>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                    <label for="trackingId" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Tracking ID</label>
                    <input type="text" id="trackingId" ref="trackingId" class="bg-gray-50 border border-rose-500 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2.5 dark:bg-rose-700 dark:border-rose-600 dark:placeholder-rose-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder="rhif348ffjs" required />
                </div>
            </div>

            <div class ="pt-8 w-[635px]"><div class="self-stretch h-[0px] border border-neutral-200"></div></div>

            <div class="flex-col justify-end items-start gap-4 flex pt-8">
                <div class="h-[87px] flex-col justify-start items-start gap-3 flex">
                    <label for="cdrProvider" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">CDR provider</label>
                    <select id="cdrProvider" ref="cdrProvider" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select</option>
                            <option v-for="cdr in cdrProvider.data" :key="cdr.id" :value="cdr.id">{{cdr.name}}</option>
                    </select>
                </div>
                <div class="justify-start items-start inline-flex">
                    <button type="button" class="text-green-500 bg-white border border-green-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">+ Add new</button>
                </div>
            </div>
            <div class="h-[87px] flex-col justify-start items-start gap-3 flex pt-8">
                <label for="cdrId" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">CDR ID</label>
                <input type="text" id="cdrId" ref="cdrId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="hsdg3443dfdfd" required />
            </div>
            <div class="h-[87px] flex-col justify-start items-start gap-3 flex pt-10">
            <div class="relative">
                        <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                            <div class="absolute inset-y-0 start-0 flex items-center justify-right ps-3 pt-7 pointer-events-none">
                                <div class="text-sm pl-56 pt-2">CO2/t</div>
                            </div>
                <label for="carbonIntensityUpstream" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Carbon intensity upstream</label>
                <input type="text" id="carbonIntensityUpstream" ref="carbonIntensityUpstream" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="X.X" required />
            </div></div></div>
            <div class="h-[87px] flex-col justify-start items-start gap-3 flex pt-12">
                <div class="relative">
                            <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                                <div class="absolute inset-y-0 start-0 flex items-center justify-right ps-3 pt-7 pointer-events-none">
                                    <div class="text-sm pl-56 pt-2">tonne</div>
                                </div>
                                <label for="carbonRemoved" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Carbon removed</label>
                                <input type="text" id="carbonRemoved" ref="carbonRemoved" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="X.X" required />
                            </div>
                </div>
            </div>
        </div>
         <div class="w-full h-11 justify-end items-center gap-4 inline-flex pt-28">
                <div class="justify-start items-center gap-4 flex">
                    <button @click="goToTransactionsPage" type="button" class="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
                    <button @click="submitForm" type="button" class="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-1 focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Save transaction</button>
                </div>
        </div>
</div>

<!---form ends -->


<!-- buttons starts -->



<!-- buttons end -->

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
        submitForm(){
            axios.post('http://127.0.0.1:8000/api/v1/transaction', 
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
            );
            this.$router.push("/transactions");
        }
    },
    data() {
        return {
            customer: [],
            trader: [],
            cdrProvider: []
        };
    },
    async mounted() {
        try {
            const response_customer = await axios.get('http://127.0.0.1:8000/api/v1/customer');
            this.customer = response_customer.data;
            const response_trader = await axios.get('http://127.0.0.1:8000/api/v1/trader');
            this.trader = response_trader.data;
            const response_cdrProvider = await axios.get('http://127.0.0.1:8000/api/v1/supplier');
            this.cdrProvider = response_cdrProvider.data;
        } 
        catch (error) {
            console.error(error);
        }
    }
};
</script>

<style>

</style> 