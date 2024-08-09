<template>

<!-- TRANSACTIONS heading , STATS BOX begins-->
<div class="justify-between gap-1 flex font-Manrope">
        <div class="h-[38px] justify-start items-center gap-4 flex text-[#0F0F0F] font-medium font-Manrope">
            <div class="w-[32px] h-[32px] relative">
                <svg class="w-[32px] h-[32px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"/>
                </svg>
            </div>
            <div class="text-[32px] leading-[38.40px]">Transactions</div>
        </div>
        <div class="relative overflow-x-auto inset-y-0 start-1 flex items-center gap-[8px]">
                <div v-for="stat in stats" :key="stat.id" class="w-[200px] h-[97px] p-[16px] bg-white rounded-[8px] flex-col justify-center items-start gap-[24px] inline-flex">
                    <div class="text-[#74797C] text-[14px] font-medium font-Manrope leading-[16.80px]">{{stat.name}}</div>
                    <div class="justify-start items-center gap-[12px] inline-flex">
                        <div class="text-[#0F0F0F] text-[20px] font-medium font-Manrope leading-normal">{{stat.value}}</div>
                        <div class="justify-center items-center gap-1 flex">
                            <img class="" src="/public/images/green_up.svg" alt="image description">
                            <div class="text-[#12B87C] text-[14px] font-medium font-Manrope leading-[16.80px]">{{stat.percentage}}%</div>
                        </div>
                    </div>
                </div>
        </div>
</div>
<!-- TRANSACTIONS heading , STATS BOX ends-->


<!-- ADD NEW TRANSACTIONS, SEARCH BOX starts-->

        <div class="pt-[32px] font-Manrope h-[56px] justify-start items-center gap-[16px] flex">
            <div class="relative">
                <div class="absolute inset-y-0 flex items-center pl-[16px] pointer-events-none">
                    <img class="w-[24px] h-[24px]" src="/public/images/add_sign.svg" alt="image description">
                </div> 
                <button @click="goToAddTransactionsPage" type="button" class="w-[229px] h-[56px] rounded-[4px] pl-[26px] pr-[16px] py-[16px] text-white bg-[#12B87C] text-[16px] font-medium font-Manrope">Add new transaction</button>          
            </div>
            <form class="">   
                <div class="relative">
                    <div class="absolute inset-y-0 start-1 flex items-center ps-[12px] pointer-events-none">
                        <img class="w-[17.49px] h-[17.49px]" src="/public/images/search.svg" alt="image description">
                    </div>
                    <input type="text" id="default-search" class="block w-[300px] h-[56px] rounded-[4px] py-[16px] pr-[12px] pl-[42px] font-medium bg-[#F8F9FA] border-[#DDDDDD] text-[16px] text-[#74797C] hover:bg-white active:bg-white focus:bg-white focus:border-none" placeholder="Search" />
                </div>
            </form>
        </div>      

<!-- ADD NEW TRANSACTIONS, SEARCH BOX ends-->



<!--TRANSACTION TABLE starts-->
<div class="relative overflow-x-auto font-Manrope pt-[32px]">
    <table class="w-full text-left text-[14px]">
        <thead class="text-[#74797C]">
            <tr>
                <th scope="col" class="pl-[24px]">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-[15px] h-[15px] bg-[#F3F3F4] border-[#74797C] focus:[#1983FF] focus:ring-0 hover:ring-1 hover:border-[#1983FF]">
                    </div>
                </th>
                <th scope="col" class="font-medium px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-12 flex-inline items-center ps-5 pt-1">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_up.svg" alt="image description">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_down.svg" alt="image description">
                        </div> Customer            
                    </div>
                </th>
                <th scope="col" class="font-medium px-6 py-3">
                    <div class="relative">
                         <div class="absolute inset-y-0 start-12 flex-inline items-center ps-12 pt-1">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_up.svg" alt="image description">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_down.svg" alt="image description">
                        </div>Purchase date 
                    </div>
                </th>
                <th scope="col" class="font-medium px-6 py-3">
                    <div class="relative">
                         <div class="absolute inset-y-0 start-12 flex-inline items-center ps-10 pt-1">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_up.svg" alt="image description">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_down.svg" alt="image description">
                        </div> Delivery date          
                    </div>
                </th>
                <th scope="col" class="font-medium px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-12 flex-inline items-center ps-3 pt-1">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_up.svg" alt="image description">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_down.svg" alt="image description">
                        </div> Quantity         
                    </div>
                </th>
                <th scope="col" class="font-medium px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-12 flex-inline items-center ps-3 pt-1">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_up.svg" alt="image description">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_down.svg" alt="image description">
                        </div> Supplier          
                    </div>
                </th>
                <th scope="col" class="font-medium px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-12 flex-inline items-center ps-0 pt-1">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_up.svg" alt="image description">
                            <img class="w-[8px] h-[6px]" src="/public/images/sort_down.svg" alt="image description">
                        </div> Trader     
                    </div>
                </th>
                <th scope="col" class="font-medium py-3">
                    <div class="text-[#EE506D] text-[14px] text-end font-medium font-Manrope">Delete selected (4)</div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="transaction in transactions.data" :key="transaction.id" class="bg-white text-[#0F0F0F] h-[69px] font-Manrope font-medium">
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    <div class="flex items-center">
                        <input id="checkbox-delete" type="checkbox" class="w-[15px] h-[15px] bg-[#F3F3F4] border-[#74797C] focus:[#1983FF] focus:ring-0 hover:ring-1 hover:border-[#1983FF]">
                    </div>
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{transaction.customer_name}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{transaction.purchase_date}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{transaction.delivery_date}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{transaction.quantity}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{transaction.supplier_name}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{transaction.trader_name}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px] text-end">
                    <button type="button" class="w-[78px] h-[37px] text-[#74797C] bg-white border border-[#74797C] focus:outline-none hover:bg-[#F8F9FA] focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px] me-[8px]">Details</button>
                    <button type="button" @click="EditTransactions(transaction.id)" class="w-[58px] h-[37px] text-[#12B87C] bg-white border border-[#12B87C] focus:outline-none hover:bg-green-50 focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px]">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<!--Pagination for TRANSACTION TABLE starts-->
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-[32px] px-[16px]" aria-label="Table navigation">
        <span class="text-[14px] font-normal text-[#74797C] mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing data 1-10 of 1000 entries</span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-1">
            <li>
                <a href="#" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]"><img class="w-[14px] h-[14px]" src="/public/images/left_arrow.svg" alt="image description"></a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]">5</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]"><img class="w-[14px] h-[14px]" src="/public/images/right_arrow.svg" alt="image description"></a>
            </li>
        </ul>
    </nav>
<!--Pagination for TRANSACTION TABLE ends-->

<!--TRANSACTION TABLE ends-->

</template>

<script setup>
const stats = [
    {"id":1,"name":"Total Customers","value":5435,"percentage":12},
    {"id":2,"name":"Quantity","value":1848,"percentage":6},
    {"id":3,"name":"Price","value":"18.2USD/t","percentage":0.2}
]
</script>

<script>
import axios from 'axios';
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

export default {
    name: "TransactionsView",
    setup() {
            const router = useRouter();
            return { router };
        },
    methods: {
        goToAddTransactionsPage() {
            this.$router.push("/add-transactions");
        },
        EditTransactions(t_id) {
            this.$router.push(
                    { 
                        path: '/edit-transactions', 
                        query: { id: 1,}
                    } 
                );
           
        }
    },
    data() {
        return {
            transactions: []
        };
    },
    async created() {
        let token = localStorage.getItem('token');
        if(token){
            try {
                const response = await axios.get('transaction');
                this.transactions = response.data;

                for(let i=0;i<response.data.data.length;i++){
                    const cust = await axios.get('customer/'+response.data.data[i].customer_id);
                    this.transactions.data[i].customer_name = cust.data.data[0].name;

                    const trader = await axios.get('trader/'+response.data.data[i].trader_id);
                    this.transactions.data[i].trader_name = trader.data.data.name;

                    const supplier = await axios.get('supplier');
                    for(let j=0;j<supplier.data.data.length;j++){
                        if(response.data.data[i].transaction_cdr_detail.cdr_provider_id == supplier.data.data[j].id){
                            this.transactions.data[i].supplier_name = supplier.data.data[j].name;
                        }
                    }
                }
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
table{
    border-collapse: separate;
    border-spacing: 0 8px;
}

td:first-child,
th:first-child {
    border-radius: 10px 0 0 10px;
}
td:last-child,
th:last-child {
    border-radius: 0 10px 10px 0;
}
</style> 