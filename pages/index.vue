<template>
<div class="bg-orange-600">
    <Navbar />

    <!-- Hero -->
    <div class="px-5 xl:px-10">
        <div
            class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
        >
            <div class="flex flex-col w-full">
            <h1 class="text-6xl text-white font-bold">Get the clawsome <br> goods for your pets</h1>
            <p class="w-5/12 mx-auto md:mx-0 text-white my-5">
                Because every pet deserves the paw-some life.
            </p>
            <div class="">
                <button class="rounded-full font-bold py-5 w-48 bg-yellow-500 text-white">Shop Now</button>
            </div>
            </div>

            <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <img src="#" alt="">
            </div>
        </div>
    </div>

    <!-- About -->
    <div class="bg-[#FBF3DF] px-5 xl:px-10 h-screen">
        <div
            class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
        >

            <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
            <img src="#" alt="">
            </div>

            <div class="flex flex-col w-full">
            <h1 class="text-5xl text-gray-700 font-bold">ABOUT US</h1>
            <!-- <p class="w-5/12 mx-auto md:mx-0 text-gray-700 my-5"> -->
            <p class="text-gray-700 my-5 w-10/12 mx-auto md:mx-0">
                At Tail Wags & Treats, we are passionate about providing high-quality products and exceptional services to pet owners everywhere. Our store is filled with a wide range of products designed to meet the needs of every type of pet, from dogs and cats to birds, fish, and small animals.
            </p>
            <p class="text-gray-700 my-5 w-10/12 mx-auto md:mx-0">
            We believe that every pet deserves the very best, and that's why we offer a 100% satisfaction guarantee on all of our products. So come on in and discover the perfect products for your furry friend today!</p>
            
            <ul class="w-10/12 my-7 space-y-1 text-gray-500 list-inside dark:text-gray-400 mx-auto md:mx-0">
                <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0">
                    <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                    Professional grooming services
                </li>
                <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0">
                    <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                    Training and behavior consultations
                </li>
                <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0">
                    <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                    High-quality pet food brands and supplies
                </li>
                <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-10 h-10 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0">
                    <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                    Microchipping and ID services
                </li>
            </ul>
            
            <div class="my-7">
                <button class="rounded-full font-bold py-5 w-48 bg-orange-500 hover:bg-orange-200 text-white">More about us</button>
            </div>
            </div>
        </div>
    </div>

    <!-- Brand -->
    <div class="flex flex-col md:flex-row justify-between mt-10 px-5 xl:px-10 py-9">
        <div class="md:w-1/3 w-full text-center md:text-left my-10">
            <p class="text-4xl text-white font-bold">Brands we stock</p>
            <p class="text-white">Offer exclusive promotions and discounts for certain brands</p>
        </div>
        <!-- <div class="md:w-2/3 w-full flex justify-center md:justify-start bg-white rounded-xl p-10">
            <img class="w-20 h-20 " src="/logo1.png" alt="Logo 1">
            <img class="w-auto h-20 ml-10" src="/logo2.png" alt="Logo 2">
            <img class="w-auto h-20 ml-10" src="/logo3.png" alt="Logo 3">
        </div> -->
        <div class="md:w-2/3 w-full flex flex-wrap flex-row justify-center bg-white rounded-xl p-10 ">
            <img class="w-auto h-20 " src="/logo1.png" alt="Logo 1">
            <img class="w-auto h-20 ml-10" src="/logo2.png" alt="Logo 2">
            <img class="w-auto h-20 ml-10" src="/logo3.png" alt="Logo 3">
            <img class="w-auto h-20 object-cover ml-10" src="/logo4.png" alt="Logo 4">
            <img class="w-auto h-20 object-cover ml-10" src="/logo5.png" alt="Logo 5">
            <img class="w-auto h-20 object-cover ml-10" src="/logo6.png" alt="Logo 6">
        </div>
    </div>

    <!-- Footer -->
    <Footer />
    

</div>
</template>

<script setup>

</script>