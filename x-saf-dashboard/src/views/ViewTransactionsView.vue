<template>

<!-- headings starts-->
<div class="justify-between gap-1 flex font-Manrope font-medium pb-[32px]">
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

<div class="h-[500px]">
    <div class="w-full h-[448px] rounded flex-col justify-start items-start gap-y-[16px] inline-flex pt-[32px] pl-[24px] pb-[32px] pr-[24px] font-Manrope bg-white">
                    <div class="w-full h-[182px] space-x-[16px] text-left">
                        <div class="h-[182px] w-[calc(49.2%)] px-[24px] pt-[24px] pb-[32px] bg-[#F8F9FA] rounded-[4px] flex-col justify-start items-start gap-y-[24px] inline-flex" id="box-shadow">
                            <div class="h-[19px] w-[560px] text-[#0F0F0F] text-[16px] font-medium font-Manrope leading-tight">{{ transaction.quantity }}t {{ transaction.fuel }}</div>
                            <div class="w-[560px] h-[83px] flex-col justify-start items-start gap-y-[16px] flex font-Manrope">
                                <div v-if="transaction && transaction.transaction_cdr_detail" class="h-[17px] w-[560px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">Carbon intensity upstream: </span><span class="text-[#0F0F0F] text-[14px] font-medium"> {{ transaction.transaction_cdr_detail.carbon_intensity_upstream }}t co2 ({{transaction.transaction_cdr_detail.carbon_intensity_upstream/100}} co2/t)</span></div>
                                <div class="h-[17px] w-[560px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">Tracking ID: </span><span class="text-[#0F0F0F] text-[14px] font-medium"> {{ transaction.tracking_id }}</span></div>
                                <div v-if="transaction && transaction.trader" class="h-[17px] w-[560px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">Fuel provided by: </span><span class="text-[#0F0F0F] text-[14px] font-medium"> {{ transaction.trader.name }}</span></div>
                            </div>
                        </div>

                        <div class="h-[182px] w-[calc(49%)] rounded-[4px] px-[24px] pt-[24px] pb-[32px] bg-[#12B87C]/10 flex-col justify-end items-start gap-y-[24px] inline-flex" id="box-shadow">
                            <div v-if="transaction && transaction.transaction_cdr_detail" class="h-[19px] w-[433px] text-[#0F0F0F] text-[16px] font-medium leading-tight">{{ transaction.transaction_cdr_detail.carbon_removed?transaction.transaction_cdr_detail.carbon_removed:'0'}}t of Carbon Removal</div>
                            <div class="h-[83px] w-[433px] flex-col justify-start items-start gap-y-[16px] flex">
                                <div class="h-[17px] w-[433px] self-stretch text-[#74797C] text-[14px] font-medium">Matching Down & Upstream co2 emissions</div>
                                <div v-if="transaction && transaction.transaction_cdr_detail" class="h-[17px] w-[433px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">CDR ID: </span><span class="text-[#0F0F0F] text-[14px] font-medium">{{ transaction.transaction_cdr_detail.cdr_id}}</span></div>
                                <div v-if="transaction && transaction.transaction_cdr_detail" class="h-[17px] w-[433px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">CDR provided by: </span><span class="text-[#0F0F0F] text-[14px] font-medium">{{ transaction.transaction_cdr_detail.cdr_provider.name }}</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full h-[184px] space-x-[16px] inline-flex font-Manrope font-medium text-left">
                        <div class="h-[184px] w-[calc(33%)] px-[24px] pt-[24px] pb-[32px] bg-[#F8F9FA] rounded-[4px] gap-y-[32px]">
                            <div class="text-[16px] text-[#0F0F0F]">{{ carbonTotal() }}t of Kerosene Emissions</div>
                            <div class="chart-container">
                                <div class="bar">
                                    <div class="bar-part bar-value1" :style="{ width: ((carbonUpstream()/carbonTotal()) * 100) + '%' }">
                                        <span></span>
                                    </div>
                                    <div class="bar-part bar-value2" :style="{ width: ((carbonDownstream()/carbonTotal()) * 100) + '%' }">
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                            <div class="label-container">
                                <div class="label">
                                    <div class="label-box" style="background-color: #EE506D;"></div>
                                    <span class="text-[12px] w-[90px]">{{ carbonUpstream() }}t Upstream</span>
                                </div>
                                <div class="label">
                                    <div class="label-box" style="background-color: #B5334A;"></div>
                                    <span class="text-[12px] w-[110px]">{{ carbonDownstream() }}t Downstream</span>
                                </div>
                            </div>
                        </div>

                        <div class="h-[184px] w-[calc(33%)] px-[24px] pt-[24px] pb-[32px] bg-[#F8F9FA] rounded-[4px] gap-y-[32px]">
                            <div v-if="transaction && transaction.transaction_cdr_detail" class="text-[16px] text-[#0F0F0F]">{{ transaction.transaction_cdr_detail.carbon_removed?transaction.transaction_cdr_detail.carbon_removed:'0' }}t of Carbon Removal</div>
                            <div class="chart-container">
                                <div class="bar">
                                    <div class="bar-part bar-value3" :style="{ width: 100 + '%' }">
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                            <div class="label-container">
                                <div v-if="transaction && transaction.transaction_cdr_detail" class="label">
                                    <span class="text-[12px] w-[200px]">Provided by {{ transaction.transaction_cdr_detail.cdr_provider.name}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="h-[184px] w-[calc(33%)] px-[24px] pt-[24px] pb-[32px] bg-[#F8F9FA] rounded-[4px] gap-y-[32px] ">
                            <div v-if="transaction && transaction.transaction_cdr_detail" class="text-[16px] text-[#0F0F0F]">{{ (carbonTotal() - transaction.transaction_cdr_detail.carbon_removed).toFixed(3) }}t of Net Emissions</div>
                            <div class="chart-container">
                                <div class="bar">
                                    <div class="bar-part bar-value4" :style="{ width: 100 + '%' }">
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                            <div class="label-container">
                                <div class="label">
                                    <span class="text-[12px] w-[200px]">Clean Flight</span>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
    <div class="text-right py-[20px]">
        <button @click="goToTransactionsPage" type="button" class="w-[78px] h-[44px] text-[#74797C] bg-[#F8F9FA] border border-[#74797C] hover:bg-[#DDDDDD] focus:ring-0 font-medium text-[14px] rounded-[4px] px-[16px] py-[10px]">Back</button>
    </div>
</div>


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
    name: "ViewTransactionView",
    props: ['transaction'],
    methods: {
        goToTransactionsPage() {
            this.$router.push("/transactions");
        },
        carbonUpstream() {  //Calculate the carbon upstream value for the first bar chart
            if(this.transaction.quantity!=null && this.transaction.transaction_cdr_detail.carbon_intensity_upstream!=null){
                this.carbonUpstream1 = this.transaction.quantity * this.transaction.transaction_cdr_detail.carbon_intensity_upstream;
            }
            return (this.carbonUpstream1)?(this.carbonUpstream1).toFixed(2):'0';
        },
        carbonDownstream() {   //Calculate the carbon downstream value for the first bar chart
            if(this.transaction.quantity!=null){
                this.carbonDownstream1 = this.transaction.quantity * 3.1;
            }
            return (this.carbonDownstream1)?(this.carbonDownstream1).toFixed(2):'0';
        },
        carbonTotal(){   //Calculate the total carbon value for the first bar chart
            return (this.carbonUpstream1 + this.carbonDownstream1)?(this.carbonUpstream1 + this.carbonDownstream1).toFixed(3):'0';
        },
    },
    data() {
        return {
            transaction: [],
            carbonUpstream1: null,
            carbonDownstream1: null,
        };
    },
    async created() {
        const route = useRoute();
        localStorage.setItem('redirect','view-transaction?id='+route.query.id);
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
                    const transaction_edit = await axios.get('transaction/'+pair[1],{
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    this.transaction = transaction_edit.data.data[0];

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