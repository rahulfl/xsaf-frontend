<template>

<!-- TRANSACTIONS heading , STATS BOX begins-->
<div class="justify-between gap-1 flex font-['Manrope']">
        <div class="h-[38px] justify-start items-center gap-4 flex">
            <div class="w-8 h-8 relative">
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 16h13M4 16l4-4m-4 4 4 4M20 8H7m13 0-4 4m4-4-4-4"/>
                </svg>
            </div>
            <div class="text-stone-950 text-[32px] font-medium font-['Manrope'] leading-[38.40px]">Transactions</div>
        </div>
      <div class="relative overflow-x-auto">
        <div class="inset-y-0 start-1 flex items-center ps-3 gap-3">
            <div v-for="stat in stats" :key="stat.id" class="w-[165px] h-[90px] p-4 bg-white rounded-lg flex-col justify-center items-start gap-6 inline-flex">
                <div class="text-zinc-500 text-sm font-medium font-['Manrope'] leading-[16.80px]">{{stat.name}}</div>
                <div class="justify-start items-center gap-3 inline-flex">
                    <div class="text-stone-950 text-xl font-medium font-['Manrope'] leading-normal">{{stat.value}}</div>
                    <div class="justify-center items-center gap-1 flex">
                        <div class="text-emerald-500 text-sm font-medium font-['Manrope'] leading-[16.80px]">{{stat.percentage}}%</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
</div>
<!-- TRANSACTIONS heading , STATS BOX ends-->


<!-- ADD NEW TRANSACTIONS, SEARCH BOX starts-->
<div class="pt-8 font-['Manrope']">
        <div class="h-[38px] justify-start items-center gap-1 flex">
            <div class="relative">
                <div class="absolute inset-y-0 start-3 pb-2 flex items-center ps-3 pointer-events-none">
                    <svg class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 2 20 20">
                        <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </div> 
                <button @click="goToAddTransactionsPage" type="button" class="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-1 focus:ring-emerald-300 font-medium rounded-lg text-sm px-11 py-3 me-1 mb-2 pl-14 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Add new transaction</button>          
            </div>
            <form class="">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 start-1 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="default-search" class="block w-full pt-3 ps-10 px-16 py-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 me-1 mb-2 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                </div>
            </form>
        </div>      
</div>
<!-- ADD NEW TRANSACTIONS, SEARCH BOX ends-->



<!--TRANSACTION TABLE starts-->
<div class="relative overflow-x-auto sm:rounded-lg pt-4 font-['Manrope']">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-sm text-gray-500 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="font-light px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-11 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3">
                                <path fill-rule="evenodd" d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z" clip-rule="evenodd" />
                            </svg>
                        </div> Customer            
                    </div>
                </th>
                <th scope="col" class="font-light px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-1 start-16 flex items-center ps-4 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3">
                                <path fill-rule="evenodd" d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z" clip-rule="evenodd" />
                            </svg>
                        </div> Purchase date           
                    </div>
                </th>
                <th scope="col" class="font-light px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-16 flex items-center ps-4 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3">
                                <path fill-rule="evenodd" d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z" clip-rule="evenodd" />
                            </svg>
                        </div> Delivery date          
                    </div>
                </th>
                <th scope="col" class="font-light px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-10 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3">
                                <path fill-rule="evenodd" d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z" clip-rule="evenodd" />
                            </svg>
                        </div> Quantity         
                    </div>
                </th>
                <th scope="col" class="font-light px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-10 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3">
                                <path fill-rule="evenodd" d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z" clip-rule="evenodd" />
                            </svg>
                        </div> Supplier          
                    </div>
                </th>
                <th scope="col" class="font-light px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-7 flex items-center ps-3 pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-3">
                                <path fill-rule="evenodd" d="M2.24 6.8a.75.75 0 0 0 1.06-.04l1.95-2.1v8.59a.75.75 0 0 0 1.5 0V4.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0L2.2 5.74a.75.75 0 0 0 .04 1.06Zm8 6.4a.75.75 0 0 0-.04 1.06l3.25 3.5a.75.75 0 0 0 1.1 0l3.25-3.5a.75.75 0 1 0-1.1-1.02l-1.95 2.1V6.75a.75.75 0 0 0-1.5 0v8.59l-1.95-2.1a.75.75 0 0 0-1.06-.04Z" clip-rule="evenodd" />
                            </svg>
                        </div> Trader     
                    </div>
                </th>
                <th scope="col" class="font-light px-6 py-3">
                    <div class="text-rose-500 text-sm text-end font-medium font-['Manrope']">Delete selected (4)</div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="transaction in transactions.data" :key="transaction.id" class="bg-white text-black dark:bg-gray-800 dark:border-gray-700">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <td class="px-6 py-4">
                    {{transaction.customer_name}}
                </td>
                <td class="px-6 py-4">
                    {{transaction.purchase_date}}
                </td>
                <td class="px-6 py-4">
                    {{transaction.delivery_date}}
                </td>
                <td class="px-6 py-4">
                    {{transaction.quantity}}
                </td>
                <td class="px-6 py-4">
                    {{transaction.supplier_name}}
                </td>
                <td class="px-6 py-4">
                    {{transaction.trader_name}}
                </td>
                <td class="px-6 py-4 text-end">
                    <button type="button" class="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Details</button>
                    <button type="button" class="text-green-500 bg-white border border-green-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>

<!--Pagination for TRANSACTION TABLE starts-->
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing data <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span> entries</span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-1">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"><</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">></a>
            </li>
        </ul>
    </nav>
</div>
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

export default {
    name: "TransactionsView",
    methods: {
        goToAddTransactionsPage() {
            this.$router.push("/addtransactions");
        },
    },
    data() {
        return {
            transactions: []
        };
    },
    async created() {
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
};
</script>



<style>
table{
    border-collapse: separate;
    border-spacing: 0 1em;
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