<template>

<!-- heading begins-->
<div class="justify-between gap-1 flex font-Manrope">
        <div class="h-[38px] justify-start items-center gap-4 flex text-[#0F0F0F] font-medium font-Manrope">
            <div class="w-[32px] h-[32px] relative">
            <img class="w-[32px] h-[32px]" src="/public/images/suppliers.svg" alt="image description">
            
            </div>
            <div class="text-[32px] leading-[38.40px]">Suppliers</div>
        </div>
       
</div>
<!-- heading ends-->


<!--SUPPLIER TABLE starts-->
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
                <th scope="col" class="font-medium py-3">
                    <div class="text-[#EE506D] text-[14px] text-end font-medium font-Manrope">Delete selected (4)</div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="supplier in paginatedItems" :key="supplier.id" class="bg-white text-[#0F0F0F] h-[69px] font-Manrope font-medium">
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    <div class="flex items-center">
                        <input id="checkbox-delete" type="checkbox" class="w-[15px] h-[15px] bg-[#F3F3F4] border-[#74797C] focus:[#1983FF] focus:ring-0 hover:ring-1 hover:border-[#1983FF]">
                    </div>
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{supplier.name}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px] text-end">
                    <button type="button" class="w-[78px] h-[37px] text-[#74797C] bg-white border border-[#74797C] focus:outline-none hover:bg-[#F8F9FA] focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px] me-[8px]">Details</button>
                    <button type="button" @click="EditSupplier(supplier.id)" class="w-[58px] h-[37px] text-[#12B87C] bg-white border border-[#12B87C] focus:outline-none hover:bg-green-50 focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px]">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<!--Pagination starts-->
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-[32px] px-[16px]" aria-label="Table navigation">
        <span class="text-[14px] font-normal text-[#74797C] mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing data {{showingData[0]}}-{{showingData[1]}} of {{items.length}} entries</span>
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
    name: "SupplierView",
    props: ['items','showingData'],
    setup() {
            const router = useRouter();
            return { router };
        },
    methods: {
        //goToAddSupplierPage() {
            //this.$router.push("/add-supplier");
        //},
        //EditSupplier(s_id) {
            //this.$router.push(
            //        { 
             //           path: '/edit-supplier', 
            //            query: { id: s_id,}
            //        } 
            //    );
        //},
        changePage(page) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            if(page == 1){
                if(this.items.length == 0){this.showingData[0] = 0;} else {this.showingData[0] = 1;}
                if(this.items.length<this.itemsPerPage){
                    this.showingData[1] = this.items.length;
                }
                else{
                    this.showingData[1] = this.itemsPerPage;
                }
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
            suppliers: [],
            items: [],
            currentPage: 1,
            itemsPerPage: 7,
            showingData: []
        };
    },
    async created() {
        let token = localStorage.getItem('token');
        if(token){
            localStorage.setItem('redirect','suppliers');
            try {
                const response = await axios.get('supplier');
                this.supplier = response.data;
                response.data.data.forEach((value, index) => {
                    this.items.push(value);
                });
                
                //Pagination
                if(this.items.length == 0){this.showingData[0] = 0;} else {this.showingData[0] = 1;}
                if(this.items.length<this.itemsPerPage){
                    this.showingData[1] = this.items.length;
                }
                else{
                    this.showingData[1] = this.itemsPerPage;
                }
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


