<template>

<!-- headings starts-->
<div class="justify-between gap-1 flex font-['Manrope']">
        <div class="h-[38px] justify-start items-center gap-4 flex">
            <div class="w-8 h-8 relative">
                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
            </div>
            <div class="text-stone-950 text-[32px] font-medium font-['Manrope'] leading-[38.40px]">Customers</div>
        </div>
</div>
<!-- headings ends-->


<!--- form starts -->
<div class="relative overflow-x-auto pt-7 font-['Manrope']">

        <div class="w-full h-[68px] flex-col justify-start items-start gap-6 inline-flex">
            <div class="self-stretch justify-between items-end inline-flex">
                <div class="text-stone-950 text-xl font-medium font-['Manrope'] leading-normal">Add Customer</div>
                 <div class="justify-start items-center gap-4 flex">
                    <button type="button" class="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
                    <button type="button" class="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-1 focus:ring-emerald-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Save customer</button>
                </div>
            </div>
            <div class="self-stretch h-[0px] border border-neutral-200"></div>
        </div>       
        
        <div class="w-[632px] h-[600px] flex-col justify-start items-start gap-12 p-3 pt-9">

            <div class="h-[87px] flex-col justify-start items-start gap-3 flex pt-3">
                    <label for="name" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="text" id="name" ref="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
            </div>

            <div class="self-stretch justify-start items-start gap-8 inline-flex pt-8">
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="email" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="email" ref="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="phone" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="text" id="phone" ref="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                </div>
            </div>

            <div class="h-[87px] flex-col justify-start items-start gap-3 flex pt-3">
                    <label for="contactPerson" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Contact Person</label>
                    <input type="text" id="contactPerson" ref="contactPerson" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
            </div>

            <div class="h-[87px] flex-col justify-start items-start gap-3 flex pt-3">
                    <label for="address" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Address</label>
                    <input type="text" id="address" ref="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
            </div>

            <div class="self-stretch justify-start items-start gap-8 inline-flex pt-8">
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="city" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">City</label>
                        <input type="text" id="city" ref="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="state" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">State</label>
                        <input type="text" id="state" ref="state" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                </div>
            </div>

            <div class="self-stretch justify-start items-start gap-8 inline-flex pt-8">
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="country" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Country</label>
                        <input type="text" id="country" ref="country" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                </div>
                <div class="w-[300px] flex-col justify-start items-start gap-3 inline-flex">
                        <label for="postalCode" class="block text-base font-['Manrope'] font-medium text-gray-900 dark:text-white">Postal Code</label>
                        <input type="text" id="postalCode" ref="postalCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""/>
                </div>
            </div>

        </div>

         <div class="w-full h-11 justify-end items-center gap-4 inline-flex pt-28">
                <div class="justify-start items-center gap-4 flex">
                    <button type="button" class="text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Cancel</button>
                    <button type="button" class="focus:outline-none text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-1 focus:ring-emerald-300 font-medium rounded-lg text-sm px-6 py-2.5 me-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Save customer</button>
                </div>
        </div>
</div>

<!---form ends -->

</template>