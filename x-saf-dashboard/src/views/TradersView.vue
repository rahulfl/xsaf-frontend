<template>

<!-- heading begins-->
<div class="justify-between gap-1 flex font-Manrope h-[70px]">
        <div class="h-[38px] justify-start items-center gap-4 flex text-[#0F0F0F] font-medium font-Manrope">
            <div class="w-[32px] h-[32px] relative">
                <img class="w-[32px] h-[32px]" src="/public/images/traders.svg" alt="image description">
            </div>
            <div class="text-[32px] leading-[38.40px]">Traders</div>
        </div>
</div>
<!-- heading ends-->

<!-- ADD NEW TRADER, SEARCH BOX starts-->
        <div class="pt-[32px] font-Manrope h-[56px] justify-start items-center gap-[16px] flex">
            <div class="relative">
                <div class="absolute inset-y-0 flex items-center pl-[16px] pointer-events-none">
                    <img class="w-[24px] h-[24px]" src="/public/images/add_sign.svg" alt="image description">
                </div> 
                <button @click="goToAddTraderPage" type="button" class="w-[229px] h-[56px] rounded-[4px] pl-[26px] pr-[16px] py-[16px] text-white bg-[#12B87C] text-[16px] font-medium font-Manrope">Add new trader</button>          
            </div>
            <form class="">   
                <div class="relative">
                    <div class="absolute inset-y-0 start-1 flex items-center ps-[12px] pointer-events-none">
                        <img class="w-[17.49px] h-[17.49px]" src="/public/images/search.svg" alt="image description">
                    </div>
                    <input type="text" id="default-search" v-model="searchQuery" class="block w-[300px] h-[56px] rounded-[4px] py-[16px] pr-[12px] pl-[42px] font-medium bg-[#F8F9FA] border-[#DDDDDD] text-[16px] text-[#74797C] hover:bg-white active:bg-white focus:bg-white focus:border-none" placeholder="Search" />
                </div>
            </form>
        </div>      
<!-- ADD NEW TRADER, SEARCH BOX ends-->

<!--TRADER TABLE starts-->
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
                        </div> Name            
                    </div>
                </th>
                <th scope="col" class="font-medium px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-12 flex-inline items-center ps-5 pt-1">
                        </div> Email            
                    </div>
                </th>
                <th scope="col" class="font-medium py-3">
                <!-- add delete selected here-->
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="trader in paginatedItems" :key="trader.id" class="bg-white text-[#0F0F0F] h-[69px] font-Manrope font-medium">
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    <div class="flex items-center">
                        <input id="checkbox-delete" type="checkbox" class="w-[15px] h-[15px] bg-[#F3F3F4] border-[#74797C] focus:[#1983FF] focus:ring-0 hover:ring-1 hover:border-[#1983FF]">
                    </div>
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{trader.name}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{trader.email}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px] text-right">
                <div class="inline-flex">
                    <button type="button" class="w-[78px] h-[37px] text-[#74797C] bg-white border border-[#74797C] focus:outline-none hover:bg-[#F8F9FA] focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px] me-[8px]">Details</button>
                    <button type="button" @click="EditTrader(trader.id)" class="w-[58px] h-[37px] text-[#12B87C] bg-white border border-[#12B87C] focus:outline-none hover:bg-green-50 focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px]">Edit</button>
                </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!--Pagination starts-->
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-[32px] px-[16px]" aria-label="Table navigation">
        <span class="text-[14px] font-normal text-[#74797C] mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing data {{showingData[0]}}-{{showingData[1]}} of {{filteredItems.length}} entries</span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-1">
            <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]"><img class="w-[14px] h-[14px]" src="/public/images/left_arrow.svg" alt="image description"></button>
            <button v-for="page in totalPages" :key="page" @click="changePage(page)" :class="{ active: currentPage === page }" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]">{{ page }}</button>
            <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" class="flex items-center justify-center px-[12px] py-[12px] h-[40px] w-[40px] leading-tight text-[#74797C] bg-white border border-[#74797C] hover:bg-white hover:text-[#74797C]"><img class="w-[14px] h-[14px]" src="/public/images/right_arrow.svg" alt="image description"></button>
        </ul>
    </nav>
<!--Pagination ends-->

</template>


<script>
import axios from 'axios';
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

export default {
    name: "TraderView",
    props: ['items','showingData'],
    setup() {
            const router = useRouter();
            return { router };
        },
    methods: {
        goToAddTraderPage() {
            this.$router.push("/add-trader");
        },
        EditTrader(t_id) {
            this.$router.push(
                    { 
                        path: '/edit-trader', 
                        query: { id: t_id,}
                    } 
                );
        },
        pagination(){
            if(this.filteredItems.length == 0){this.showingData[0] = 0;} else {this.showingData[0] = 1;}
            if(this.filteredItems.length < this.itemsPerPage){
                this.showingData[1] = this.filteredItems.length;
            }
            else{
                this.showingData[1] = this.itemsPerPage;
            }
        },
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
                if(page === 1){
                    this.pagination();
                }
                else{
                    this.showingData[1] = page * this.itemsPerPage;
                    this.showingData[0] = this.showingData[1] - this.itemsPerPage + 1;
                    if(this.showingData[1] > this.filteredItems.length){
                        this.showingData[1] = this.filteredItems.length;
                    }
                }
            }
        },
    },
    data() {
        return {
            traders: [],
            items: [],
            currentPage: 1,
            itemsPerPage: 7,
            showingData: [1,7],
            searchQuery: '', // To store the search input value
        };
    },
    async created() {
        localStorage.setItem('redirect','traders');
        let token = localStorage.getItem('token');
        if(token){
            try {
                const response = await axios.get('trader',{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.customers = response.data;
                response.data.data.forEach((value, index) => {
                    this.items.push(value);
                });
                
                //Pagination
                this.pagination();
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
    },
    computed: {
        filteredItems() {
            if (this.searchQuery.trim() === '') {
                return this.items; // Return all items if there's no search query
            }

            const searchQueryLower = this.searchQuery.toLowerCase();

            return this.items.filter(item => {
                const name = item.name?.toLowerCase() || '';  // Handle null/undefined
                const email = item.email?.toLowerCase() || '';    // Handle null/undefined
                
                return (
                    name.includes(searchQueryLower) ||
                    email.includes(searchQueryLower)
                );
            });
        },
        totalPages() {
            return Math.ceil(this.filteredItems.length / this.itemsPerPage);
        },
        paginatedItems() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredItems.slice(start, start + this.itemsPerPage);
        },
    },
    watch: {
        searchQuery() {
            // Whenever the search query changes, reset the current page to 1
            this.currentPage = 1;
            this.pagination(); // Update showingData when search changes
        },
    },
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

