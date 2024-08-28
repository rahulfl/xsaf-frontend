<template>

<!-- heading starts -->
<div class="justify-between gap-1 flex font-Manrope">
        <div class="h-[38px] justify-start items-center gap-4 flex text-[#0F0F0F] font-medium font-Manrope">
            <div class="w-[32px] h-[32px] relative">
            <img class="w-[32px] h-[32px]" src="/public/images/customers.svg" alt="image description">
            
            </div>
            <div class="text-[32px] leading-[38.40px]">Customers</div>
        </div>
       
</div>
<!-- heading ends-->


<!--CUSTOMER TABLE starts-->
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
                         <div class="absolute inset-y-0 start-12 flex-inline items-center ps-12 pt-1">
                        </div>Email 
                    </div>
                </th>
                <th scope="col" class="font-medium px-6 py-3">
                    <div class="relative">
                         <div class="absolute inset-y-0 start-12 flex-inline items-center ps-10 pt-1">
                        </div> Phone    
                    </div>
                </th>
                <th scope="col" class="font-medium px-6 py-3">
                    <div class="relative">
                        <div class="absolute inset-y-0 start-12 flex-inline items-center ps-3 pt-1">
                        </div> Contact person        
                    </div>
                </th>
                
                <th scope="col" class="font-medium py-3">
                    <div class="text-[#EE506D] text-[14px] text-end font-medium font-Manrope">Delete selected (4)</div>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="customer in paginatedItems" :key="customer.id" class="bg-white text-[#0F0F0F] h-[69px] font-Manrope font-medium">
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    <div class="flex items-center">
                        <input id="checkbox-delete" type="checkbox" class="w-[15px] h-[15px] bg-[#F3F3F4] border-[#74797C] focus:[#1983FF] focus:ring-0 hover:ring-1 hover:border-[#1983FF]">
                    </div>
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{customer.name}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{customer.email}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{customer.phone_no}}
                </td>
                <td class="pr-[16px] py-[16px] pl-[24px]">
                    {{customer.contact_person_name}}
                </td>
                
                <td class="pr-[16px] py-[16px] pl-[24px] text-end">
                    <button type="button" class="w-[78px] h-[37px] text-[#74797C] bg-white border border-[#74797C] focus:outline-none hover:bg-[#F8F9FA] focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px] me-[8px]">Details</button>
                    <button type="button" @click="EditCustomer(customer.id)" class="w-[58px] h-[37px] text-[#12B87C] bg-white border border-[#12B87C] focus:outline-none hover:bg-green-50 focus:ring-0 focus:ring-[#74797C] font-medium rounded-[4px] text-[14px] px-[16px] py-[8px]">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

</template>


<script>
import axios from 'axios';
import { RouterView } from 'vue-router';
import { useRouter } from 'vue-router';

export default {
    name: "CustomerView",
    props: ['items','showingData'],
    setup() {
            const router = useRouter();
            return { router };
        },
    methods: {
        //goToAddCustomerPage() {
            //this.$router.push("/add-customer");
        //},
        //EditCustomer(c_id) {
            //this.$router.push(
            //        { 
             //           path: '/edit-customer', 
            //            query: { id: c_id,}
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
            customers: [],
            items: [],
            currentPage: 1,
            itemsPerPage: 7,
            showingData: []
        };
    },
    async created() {
        let token = localStorage.getItem('token');
        if(token){
            localStorage.setItem('redirect','customers');
            try {
                const response = await axios.get('customer');
                this.customers = response.data;
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


