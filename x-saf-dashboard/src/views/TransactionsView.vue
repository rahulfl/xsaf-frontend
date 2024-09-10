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
                        <input id="checkbox-all-search" type="checkbox" :checked="allPageSelected" @change="selectAllRowsOnPage($event)" class="w-[15px] h-[15px] bg-[#F3F3F4] border-[#74797C] focus:[#1983FF] focus:ring-0 hover:ring-1 hover:border-[#1983FF]">
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
                    <div class="text-[#EE506D] text-[14px] text-end font-medium font-Manrope">
                        <button @click="deleteSelectedRows">Delete selected ({{ selectedRows.length }})</button>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody v-for="(row,index) in paginatedItems" :key="row.id">
            <tr class="bg-white text-[#0F0F0F] h-[69px] font-Manrope font-medium" :class="{ 'highlighted': isHighlighted(row.id) }">
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    <div class="flex items-center">
                        <input id="checkbox-delete" type="checkbox" v-model="selectedRows" :value="row.id"  class="w-[15px] h-[15px] bg-[#F3F3F4] border-[#74797C] focus:[#1983FF] focus:ring-0 hover:ring-1 hover:border-[#1983FF]">
                    </div>
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{row.customer.name}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{row.purchase_date}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{row.delivery_date}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{row.quantity}}t
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{row.transaction_cdr_detail.cdr_provider}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{row.trader}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px] text-end">
                    <button type="button" @click="toggleDetails(row.id)" :disabled="isButtonDisabled(row.id)" class="w-[78px] h-[37px] text-[#74797C] bg-white border border-[#74797C] focus:outline-none hover:bg-[#F8F9FA] focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px] me-[8px]">{{ getButtonName(row.id)}}</button>
                    <button type="button" @click="EditTransactions(row.id)" class="w-[58px] h-[37px] text-[#12B87C] bg-white border border-[#12B87C] focus:outline-none hover:bg-green-50 focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px]">Edit</button>
                </td>
            </tr>

             <!-- Hidden row to show additional details -->
            
            <tr v-if="expandedRows.includes(row.id)" class="bg-white h-[69px]">
                <td class="hidden"></td>
                <td colspan="8" id="hiddentd">
                 <div class="w-full h-[418px] rounded flex-col justify-start items-start gap-y-[16px] inline-flex pt-[12px] pl-[24px] pb-[24px] pr-[24px] font-Manrope">
                    <div class="w-full h-[182px] space-x-[16px]">
                        <div class="h-[182px] w-[calc(49.4%)] px-[24px] pt-[24px] pb-[32px] bg-[#F8F9FA] rounded-[4px] flex-col justify-start items-start gap-y-[24px] inline-flex" id="box-shadow">
                            <div class="h-[19px] w-[560px] text-[#0F0F0F] text-[16px] font-medium font-Manrope leading-tight">{{ row.quantity }}t {{ row.fuel }}</div>
                            <div class="w-[560px] h-[83px] flex-col justify-start items-start gap-y-[16px] flex font-Manrope">
                                <div class="h-[17px] w-[560px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">Carbon intensity upstream: </span><span class="text-[#0F0F0F] text-[14px] font-medium"> {{ row.transaction_cdr_detail.carbon_intensity_upstream }}t co2 ({{row.transaction_cdr_detail.carbon_intensity_upstream/100}} co2/t)</span></div>
                                <div class="h-[17px] w-[560px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">Tracking ID: </span><span class="text-[#0F0F0F] text-[14px] font-medium"> {{ row.tracking_id }}</span></div>
                                <div class="h-[17px] w-[560px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">Fuel provided by: </span><span class="text-[#0F0F0F] text-[14px] font-medium"> {{ row.trader }}</span></div>
                            </div>
                        </div>

                        <div class="h-[182px] w-[calc(49%)] rounded-[4px] px-[24px] pt-[24px] pb-[32px] bg-[#12B87C]/10 flex-col justify-end items-start gap-y-[24px] inline-flex" id="box-shadow">
                            <div class="h-[19px] w-[433px] text-[#0F0F0F] text-[16px] font-medium leading-tight">{{ row.transaction_cdr_detail.carbon_removed }}t of Carbon Removal</div>
                            <div class="h-[83px] w-[433px] flex-col justify-start items-start gap-y-[16px] flex">
                                <div class="h-[17px] w-[433px] self-stretch text-[#74797C] text-[14px] font-medium">Matching Down & Upstream co2 emissions</div>
                                <div class="h-[17px] w-[433px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">CDR ID: </span><span class="text-[#0F0F0F] text-[14px] font-medium">{{ row.transaction_cdr_detail.cdr_id }}</span></div>
                                <div class="h-[17px] w-[433px] self-stretch"><span class="text-[#74797C] text-[14px] font-medium">CDR provided by: </span><span class="text-[#0F0F0F] text-[14px] font-medium">{{ row.transaction_cdr_detail.cdr_provider }}</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="w-full h-[184px] space-x-[16px] inline-flex font-Manrope font-medium">
                        <div class="h-[184px] w-[calc(33%)] px-[24px] pt-[24px] pb-[32px] bg-[#F8F9FA] rounded-[4px] gap-y-[32px]">
                            <div class="text-[16px] text-[#0F0F0F]">{{ carbonTotal(rowId) }}t of Kerosene Emissions</div>
                            <div class="chart-container">
                                <div class="bar">
                                    <div class="bar-part bar-value1" :style="{ width: ((carbonUpstream(row.id)/carbonTotal(rowId)) * 100) + '%' }">
                                        <span></span>
                                    </div>
                                    <div class="bar-part bar-value2" :style="{ width: ((carbonDownstream(row.id)/carbonTotal(rowId)) * 100) + '%' }">
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                            <div class="label-container">
                                <div class="label">
                                    <div class="label-box" style="background-color: #EE506D;"></div>
                                    <span class="text-[12px] w-[80px]">{{ carbonUpstream(row.id) }}t Upstream</span>
                                </div>
                                <div class="label">
                                    <div class="label-box" style="background-color: #B5334A;"></div>
                                    <span class="text-[12px] w-[100px]">{{ carbonDownstream(row.id) }}t Downstream</span>
                                </div>
                            </div>
                        </div>

                        <div class="h-[184px] w-[calc(33%)] px-[24px] pt-[24px] pb-[32px] bg-[#F8F9FA] rounded-[4px] gap-y-[32px] ">
                            <div class="text-[16px] text-[#0F0F0F]">{{ row.transaction_cdr_detail.carbon_removed }}t of Carbon Removal</div>
                            <div class="chart-container">
                                <div class="bar">
                                    <div class="bar-part bar-value3" :style="{ width: 100 + '%' }">
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                            <div class="label-container">
                                <div class="label">
                                    <span class="text-[12px] w-[200px]">Provided by {{ row.transaction_cdr_detail.cdr_provider }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="h-[184px] w-[calc(33%)] px-[24px] pt-[24px] pb-[32px] bg-[#F8F9FA] rounded-[4px] gap-y-[32px] ">
                            <div class="text-[16px] text-[#0F0F0F]">{{ carbonTotal(rowId) - row.transaction_cdr_detail.carbon_removed }}t of Net Emissions</div>
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
                </td>
                <td class="hidden"></td>
            </tr>
        </tbody>
    </table>
</div>

<!--Pagination for TRANSACTION TABLE starts-->
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-[32px] px-[16px]" aria-label="Table navigation">
        <span class="text-[14px] font-normal text-[#74797C] mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing data {{showingData[0]}}-{{showingData[1]}} of {{items.length}} entries</span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-1">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]"><img class="w-[14px] h-[14px]" src="/public/images/left_arrow.svg" alt="image description"></button>
            <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]">{{ page }}</button>
            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]"><img class="w-[14px] h-[14px]" src="/public/images/right_arrow.svg" alt="image description"></button>
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
    props: ['items','showingData'],
    setup() {
        const router = useRouter();
        return { router };
    },
    methods: {
        async toggleDetails(rowId) {
            this.selectedRowId = (this.selectedRowId === rowId) ? null : rowId; // Toggle the selectedRowId to disable other detail buttons
            const response = await axios.get('transaction/' + rowId);  //Get the transaction for the specific rowID
            this.value1[rowId] = response.data.data[0];  //Send this value for carbon emission calculations
            const index = this.expandedRows.indexOf(rowId);
            if (index === -1) {
                this.expandedRows.push(rowId);  // Add row ID to expandedRows array if not present
            } else {
                this.expandedRows.splice(index, 1);  // Remove row ID if already present
            }
        },
        isHighlighted(rowId) {
            return this.expandedRows.includes(rowId);  //To change settings when the row is expanded on click of details button
        },
        getButtonName(rowId){
            return this.expandedRows.includes(rowId) ? 'Close' : 'Details';  //Change the name of the details button 
        },
        carbonUpstream(rowId) {  //Calculate the carbon upstream value for the first bar chart
            if(this.value1[rowId].quantity!=null && this.value1[rowId].transaction_cdr_detail.carbon_intensity_upstream!=null){
                this.carbonUpstream1 = this.value1[rowId].quantity * this.value1[rowId].transaction_cdr_detail.carbon_intensity_upstream;
            }
            return this.carbonUpstream1;
        },
        carbonDownstream(rowId) {   //Calculate the carbon downstream value for the first bar chart
            if(this.value1[rowId].quantity!=null){
                this.carbonDownstream1 = this.value1[rowId].quantity * 3.1;
            }
            return this.carbonDownstream1;
        },
        carbonTotal(rowId){   //Calculate the total carbon value for the first bar chart
            return this.carbonUpstream1 + this.carbonDownstream1;
        },
        isButtonDisabled(rowId) {
            return this.selectedRowId !== null && this.selectedRowId !== rowId; // Disable details button for other rows when one row is clicked
        },
        adjustPaginationAfterDelete() {
            if (this.currentPage > this.totalPages) {
                this.currentPage = this.totalPages;
            }

            //Adjust pagination
            if(this.currentPage == 0){
                this.showingData[0] = 0;
                this.showingData[1] = 0;
            }
            else if(this.currentPage == 1){
                this.pagination();
            }
            else{
                this.showingData[1] = this.currentPage*this.itemsPerPage;
                this.showingData[0] = this.showingData[1]-this.itemsPerPage+1;
                if(this.showingData[1]>this.items.length){
                    this.showingData[1] =this.items.length;
                }
            }
        },
        selectAllRowsOnPage(event) {
            const pageRowIds = this.paginatedItems.map(row => row.id);
            if (event.target.checked) {
                // Select all rows on the current page
                this.selectedRows = [...new Set([...this.selectedRows, ...pageRowIds])];
            } else {
                // Deselect all rows on the current page
                this.selectedRows = this.selectedRows.filter(id => !pageRowIds.includes(id));
            }
        },
        async deleteSelectedRows() {
            if (this.selectedRows.length === 0) {
                //alert('No rows selected for deletion.');
                return;
            }
            try {
                this.deleteArr = [];
                this.selectedRows.forEach((item, index) => {
                    this.deleteArr.push(item);
                }); 

                const response = await axios.post('transaction/deleteSelected', {
                    "ids": this.deleteArr
                });

                if (response.status === 200) {
                    this.items = this.items.filter(row => !this.selectedRows.includes(row.id));
                    this.selectedRows = [];
                    this.adjustPaginationAfterDelete();
                    this.deleteArr = [];
                } else {
                    alert('Failed to delete selected rows.');
                }
            } catch (error) {
                //console.error('Error deleting rows:', error);
                //alert('An error occurred while deleting the rows.');
            }
        },
        goToAddTransactionsPage() {
            this.$router.push("/add-transaction");
        },
        EditTransactions(t_id) {
            this.$router.push(
                    { 
                        path: '/edit-transaction', 
                        query: { id: t_id,}
                    } 
                );
        },
        pagination(){
            if(this.items.length == 0){this.showingData[0] = 0;} else {this.showingData[0] = 1;}
            if(this.items.length<this.itemsPerPage){
                this.showingData[1] = this.items.length;
            }
            else{
                this.showingData[1] = this.itemsPerPage;
            }
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
                if(page == 1){
                   this.pagination();
                }
                else{
                    this.showingData[1] = page*this.itemsPerPage;
                    this.showingData[0] = this.showingData[1]-this.itemsPerPage+1;
                    if(this.showingData[1]>this.items.length){
                        this.showingData[1] =this.items.length;
                    }
                }
            }
        },
    },
    data() {
        return {
            transactions: [],
            items: [],
            currentPage: 1,
            itemsPerPage: 7,
            showingData: [],
            selectedRows: [],
            selectedRowId: null, // Track the currently active row where detail button has been clicked
            deleteArr: [],
            expandedRows: [],
            value1: [],
            carbonDownstream1: 0,
            carbonUpstream1: 0,
        };
    },
    async created() {
        let token = localStorage.getItem('token');
        if(token){
            localStorage.setItem('redirect','transactions');
            try {
                const response = await axios.get('transaction');
                this.transactions = response.data; 
                response.data.data.forEach((value, index) => {
                    if(value.trader != null){value.trader = value.trader.name;}
                    if(value.transaction_cdr_detail.cdr_provider != null){value.transaction_cdr_detail.cdr_provider = value.transaction_cdr_detail.cdr_provider.name;}
                    this.items.push(value);
                });

                //Pagination
                this.pagination();
            } 
            catch (error) {
                console.error(error);
            }
        }
        else{
            this.$router.push("/");
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.items.length / this.itemsPerPage);
        },
        paginatedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.items.slice(start, start + this.itemsPerPage);
        },
        allPageSelected() {
            return this.paginatedItems.length > 0 && this.paginatedItems.every(row => this.selectedRows.includes(row.id));
        }
    },
};
</script>

<style>

td:first-child,
th:first-child {
    border-radius: 18px 0 0 18px;
}

td:last-child,
th:last-child {
    border-radius: 0 18px 18px 0;
}

tr {
  border-bottom: 8px solid #F8F9FA;
}

#hiddentd{
    border-radius: 0 0 18px 18px;
}

tr.highlighted td:first-child {
    border-radius: 18px 0 0 0;
}

tr.highlighted td:last-child {
    border-radius: 0 18px 0 0;
}

tr.highlighted {
    border-bottom: 0 ;
}

#box-shadow {
  box-shadow: 0px 4px 4px 0px #0F0F0F;
}

.label-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 24px;
}

.label {
  display: flex;
  align-items: center;
  margin-right: 32px;
}

.label-box {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.chart-container {
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24px;
}

.bar {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
}

.bar-part {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #fff;
  height: 100%;
  transition: width 0.3s ease;
  white-space: nowrap;
}

.bar-value1 {
  background-color: #EE506D;
}

.bar-value2 {
  background-color: #B5334A;
}

.bar-value3 {
  background-color: #12B87C;
}

.bar-value4 {
  background-image: url("/public/images/bar_4.svg");
}

input[type="range"] {
  width: 100px;
}
</style> 