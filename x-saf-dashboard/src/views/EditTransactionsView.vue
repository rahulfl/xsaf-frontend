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
                <div class="text-[#0F0F0F] text-[20px] font-medium font-Manrope leading-normal">Edit Transaction</div>
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
                        <!-- Modal toggle -->
                        <button data-modal-target="default-modal" data-modal-toggle="default-modal" type="button" @click="clearFields" class="w-[112px] h-[44px] text-[#12B87C] bg-[#F8F9FA] border border-[#12B87C] focus:outline-none focus:ring-0 focus:ring-[#12B87C] font-medium text-[14px] py-[10px] pl-[12px] rounded-[4px] hover:bg-green-100">Add new</button>           
                            <!-- Main modal for add new customer popup-->
                            <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full font-Manrope font-medium">
                                <div class="relative p-4 w-[700px] h-[600px] overflow-y-auto">
                                    <!-- Modal content -->
                                    <div class="relative bg-white rounded-lg shadow">
                                        <!-- Modal header -->
                                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                                            <h3 class="text-[#0F0F0F] text-[20px] font-medium font-Manrope">
                                                Add Customer
                                            </h3>
                                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                                </svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                        </div>
                                        <!-- Modal body -->
                                        <div class="p-4 md:p-5 space-y-4 bg-[#F8F9FA] font-Manrope">
                                            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                                                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                                                    <label for="customer_name" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Name</label>
                                                    <input type="text" id="customer_name" ref="customer_name" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                                                    <p id="customer_errors" ref="customer_name_error" class="text-[#EE506D]">{{customer_name_error}}</p>
                                                </div>
                                                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                                                    <label for="customer_contact_person" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Contact person</label>
                                                    <input type="text" id="customer_contact_person" ref="customer_contact_person" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                                                </div>
                                            </div>

                                            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                                                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                                                    <label for="customer_email" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Email</label>
                                                    <input type="text" id="customer_email" ref="customer_email" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                                                    <p id="customer_errors" ref="customer_email_error" class="text-[#EE506D]">{{customer_email_error}}</p>
                                                </div>
                                                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                                                    <label for="customer_phone" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Phone</label>
                                                    <input type="text" id="customer_phone" ref="customer_phone" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                                                </div>
                                            </div>

                                            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                                                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                                                    <label for="customer_address" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Address</label>
                                                    <input type="text" id="customer_address" ref="customer_address" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                                                </div>
                                                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                                                    <label for="customer_country_id" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Country code</label>
                                                    <input type="text" id="customer_country_id" ref="customer_country_id" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- Modal footer -->
                                        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b justify-end">
                                            <button @click="submitCustomerForm" type="button" class="w-[143px] h-[44px] text-white text-[14px] bg-[#12B87C] hover:bg-emerald-400 focus:ring-0 font-medium rounded-[4px] text-[14px] px-[16px] py-[10px]">Save customer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div> 
                </div>
            </div>

            <div class="h-[87px] w-[300px] flex-col justify-start items-start gap-[12px] flex">
                <label for="uId" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F]">UID</label>
                <input type="text" id="uId" ref="uId" disabled class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px]"/>
            </div>

            <div id="date-range-picker" class="w-[632px] flex gap-[32px]">
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <div class="absolute inset-y-0 start-[270px] pt-[48px] flex items-center pointer-events-none">
                            <img class="w-[16.67px] h-[18.33px]" src="/public/images/calendar.svg" alt="image description">
                        </div>
                        <label for="purchaseDate" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Purchase date</label>
                        <input datepicker datepicker-autohide datepicker-format="yyyy-mm-dd" id="purchaseDate" name="purchaseDate" ref="purchaseDate" type="text" class="bg-[#F8F9FA] font-Manrope border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#74797C] focus:border-[#74797C] active:bg-white focus:bg-white block w-[300px] h-[56px] ps-[16px] hover:bg-white">
                        <p id="error" ref="purchase_date_error" class="text-[#EE506D]">{{purchase_date_error}}</p>
                    </div>
                </div>
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <div class="absolute inset-y-0 start-[270px] pt-[48px] flex items-center pointer-events-none">
                            <img class="w-[16.67px] h-[18.33px]" src="/public/images/calendar.svg" alt="image description">
                        </div>
                        <label for="deliveryDate" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Delivery date</label>
                        <input datepicker datepicker-autohide datepicker-format="yyyy-mm-dd" id="deliveryDate" name="deliveryDate" ref="deliveryDate" type="text" class="bg-[#F8F9FA] font-Manrope border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#74797C] focus:border-[#74797C] active:bg-white focus:bg-white block w-[300px] h-[56px] ps-[16px] hover:bg-white">
                        <p id="error" ref="delivery_date_error" class="text-[#EE506D]">{{delivery_date_error}}</p>
                    </div>
                </div>
            </div>

            <div class="self-stretch justify-start items-start gap-[32px] inline-flex">
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <label for="fuel" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Fuel</label>
                        <input type="text" id="fuel" ref="fuel" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
                        <p id="error" ref="fuel_error" class="text-[#EE506D]">{{fuel_error}}</p>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="location" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Location</label>
                        <input type="text" id="location" ref="location" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
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
                            <input type="text" id="quantity" ref="quantity" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] pr-[66px] hover:bg-white"/>
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
                            <input type="text" id="price" ref="price" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[90px] hover:bg-white"/>
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
                </div>
                <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                    <label for="trackingId" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Tracking ID</label>
                    <input type="text" id="trackingId" ref="trackingId" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[90px] hover:bg-white"/>
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
                <input type="text" id="cdrId" ref="cdrId" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 focus:border-[#DDDDDD] active:bg-white focus:bg-white block w-[300px] h-[56px] p-[16px] hover:bg-white"/>
            </div>

            <div class="h-[87px] w-[550px] flex-col justify-start items-start space-y-[12px] flex">
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <div class="absolute inset-y-0 start-4 pt-[40px] flex items-center justify-right pointer-events-none">
                            <div class="text-[12px] pl-[230px] pt-3 text-[#0F0F0F]">CO2/t</div>
                        </div>
                        <label for="carbonIntensityUpstream" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Carbon intensity upstream</label>
                        <input type="text" id="carbonIntensityUpstream" ref="carbonIntensityUpstream" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[60px] hover:bg-white"/>
                    </div>
                </div>
                <p id="error" ref="carbon_intensity_upstream_error" class="text-[#EE506D]">{{carbon_intensity_upstream_error}}</p>
            </div>

            <div class="h-[87px] w-[500px] flex-col justify-start items-start space-y-[12px] flex">
                <div class="relative">
                    <div class="w-[300px] flex-col justify-start items-start space-y-[12px] inline-flex">
                        <div class="absolute inset-y-0 start-4 pt-[40px] flex items-center justify-right pointer-events-none">
                            <div class="text-[12px] pl-[230px] pt-3 text-[#0F0F0F]">tonne</div>
                        </div>
                        <label for="carbonRemoved" class="block text-[16px] font-Manrope font-medium text-[#0F0F0F] bg-[#F8F9FA]">Carbon removed</label>
                        <input type="text" id="carbonRemoved" ref="carbonRemoved" class="bg-[#F8F9FA] border border-[#DDDDDD] text-[#74797C] text-[16px] rounded-[4px] focus:ring-[#DDDDDD] focus:ring-0 active:bg-white focus:bg-white focus:border-[#DDDDDD] block w-[300px] h-[56px] p-[16px] pr-[60px] hover:bg-white"/>
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
import { useRoute } from 'vue-router'

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
            if(this.$refs.trader.value == "Select"){
                this.$refs.trader.value = null;
            }
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
                    if(this.errors.purchase_date){this.purchase_date_error = this.errors.purchase_date[0];} else if(this.errors.purchase_date==undefined){this.purchase_date_error = "";}
                    if(this.errors.delivery_date){this.delivery_date_error = this.errors.delivery_date[0];} else if(this.errors.delivery_date==undefined){this.delivery_date_error = "";}
                    if(this.errors.fuel){this.fuel_error = this.errors.fuel[0];} else if(this.errors.fuel==undefined){this.fuel_error = "";}
                    if(this.errors.quantity){this.quantity_error = this.errors.quantity[0];} else if(this.errors.quantity==undefined){this.quantity_error = "";}
                    if(this.errors.cdr_provider_id){this.cdr_provider_id_error = this.errors.cdr_provider_id[0];} else if(this.errors.cdr_provider_id==undefined){this.cdr_provider_id_error = "";}
                    if(this.errors.carbon_removed){this.carbon_removed_error = this.errors.carbon_removed[0];} else if(this.errors.carbon_removed==undefined){this.carbon_removed_error = "";}
                    if(this.errors.price){this.price_error = this.errors.price[0];} else if(this.errors.price==undefined){this.price_error = "";}
                    if(this.errors.carbon_intensity_upstream){this.carbon_intensity_upstream_error = this.errors.carbon_intensity_upstream[0];} else if(this.errors.carbon_intensity_upstream==undefined){this.carbon_intensity_upstream_error = "";}

                }
            });
        },
        clearFields(){
            this.customer_name_error = "";
            this.customer_email_error = "";
         
            this.$refs.customer_name.value = "";
            this.$refs.customer_email.value = "";
            this.$refs.customer_phone.value = "";
            this.$refs.customer_contact_person.value = "";
            this.$refs.customer_address.value = "";
            this.$refs.customer_country_id.value = "";
        },
        submitCustomerForm(){
            axios.post('customer', 
               {
                    "name": this.$refs.customer_name.value,
                    "email": this.$refs.customer_email.value,
                    "phone_no": this.$refs.customer_phone.value,
                    "contact_person_name": this.$refs.customer_contact_person.value,
                    "address": this.$refs.customer_address.value,
                    "country_id": this.$refs.customer_country_id.value,
                }
            )
            .then(response => {
                const modal = new window.Modal(document.getElementById('default-modal'));
                modal.hide();
                window.location.reload();
            })
            .catch(error => {
                // Handle errors
                this.customer_errors = error.response.data.data;
                if(this.errors){
                    if(this.customer_errors.name){this.customer_name_error = this.customer_errors.name[0];} else if(this.customer_errors.name==undefined){this.customer_name_error = "";}
                    if(this.customer_errors.email){this.customer_email_error = this.customer_errors.email[0];} else if(this.customer_errors.email==undefined){this.customer_email_error = "";}
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
            purchase_date_error: null,
            delivery_date_error: null,
            fuel_error: null,
            quantity_error: null,
            cdr_provider_id_error: null,
            carbon_removed_error: null,
            carbon_intensity_upstream_error: null,
            price: null,
        };
    },
    async created() {
        const route = useRoute();
        localStorage.setItem('redirect','edit-transaction?id='+route.query.id);
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
                    const transaction = transaction_edit.data.data[0];

                    // Setting all input values to the stored values 
                    if(transaction.trader != null){transaction.trader = transaction.trader.id;}
                    if(transaction.transaction_cdr_detail.cdr_provider != null){transaction.transaction_cdr_detail.cdr_provider = transaction.transaction_cdr_detail.cdr_provider.id;}
                    
                    this.customer_id_val = transaction.customer.id;
                    this.$refs.uId.value = transaction.uid;
                    this.$refs.purchaseDate.value = transaction.purchase_date;
                    this.$refs.deliveryDate.value = transaction.delivery_date;
                    this.$refs.fuel.value = transaction.fuel;
                    this.$refs.location.value = transaction.location;
                    this.$refs.quantity.value = transaction.quantity; 
                    this.$refs.price.value = transaction.price;
                    this.trader_val = transaction.trader; 
                    this.$refs.trackingId.value = transaction.tracking_id;
                    this.cdr_provider_val = transaction.transaction_cdr_detail.cdr_provider;
                    this.$refs.cdrId.value = transaction.transaction_cdr_detail.cdr_id;
                    this.$refs.carbonIntensityUpstream.value = transaction.transaction_cdr_detail.carbon_intensity_upstream;
                    this.$refs.carbonRemoved.value = transaction.transaction_cdr_detail.carbon_removed;
                }

                // Dropdowns 
                const response_customer = await axios.get('customer',{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.customer = response_customer.data;
                const response_trader = await axios.get('trader',{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.trader = response_trader.data;
                const response_cdrProvider = await axios.get('supplier',{
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.cdrProvider = response_cdrProvider.data;
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