<template>
<div class="bg-orange-600">
    <Navbar />

    <!-- Hero -->
    <div class="px-5 xl:px-10 my-28">
        <div class="flex flex-col text-center md:text-left md:flex-row md:items-center">
            <div class="flex flex-col w-full">
            <h1 class="text-7xl text-white font-bold">Get the clawsome <br> goods for your pets</h1>
            <p class="w-5/12 mx-auto md:mx-0 text-white my-5">
                Because every pet deserves the paw-some life.
            </p>
            <div class="">
                <button class="rounded-full font-bold py-5 w-48 bg-yellow-500 text-white">Shop Now</button>
            </div>
            </div>

            <div class="flex flex-col w-1/2 mx-auto md:mx-0 ">
            <img src="/doggie1.png" alt="" >
            </div>
        </div>
    </div>

    <!-- About -->
    <div class="bg-[#FBF3DF] px-6 mx-auto">
    <div class="max-w-screen-xl px-8 grid gap-10 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
    <div class="flex flex-col justify-center">
        <img src="/about.jpg" alt="" class="rounded-xl">
    </div>
    <div class="">
        <div class="flex flex-col w-full">
            <h1 class="text-5xl text-gray-700 font-bold">ABOUT US</h1>
            <p class="text-gray-700 my-5">
                At Tail Wags & Treats, we are passionate about providing high-quality products and exceptional services to pet owners everywhere. Our store is filled with a wide range of products designed to meet the needs of every type of pet, from dogs and cats to birds, fish, and small animals.
            </p>
            <p class="text-gray-700">
            We believe that every pet deserves the very best, and that's why we offer a 100% satisfaction guarantee on all of our products. So come on in and discover the perfect products for your furry friend today!</p>
            
            <ul class="my-7 space-y-1 text-gray-500 list-inside dark:text-gray-400">
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
            
            <div class="mb-16">
                <button class="rounded-full font-bold py-5 w-48 bg-orange-500 hover:bg-orange-200 text-white">More about us</button>
            </div>
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
        <div class="md:w-2/3 w-full flex flex-wrap flex-row justify-center bg-white rounded-xl p-10 ">
            <img class="w-auto h-20 " src="/logo1.png" alt="Logo 1">
            <img class="w-auto h-20 ml-10" src="/logo2.png" alt="Logo 2">
            <img class="w-auto h-20 ml-10" src="/logo3.png" alt="Logo 3">
            <img class="w-auto h-20 object-cover ml-10" src="/logo4.png" alt="Logo 4">
            <img class="w-auto h-20 object-cover ml-10" src="/logo5.png" alt="Logo 5">
            <img class="w-auto h-20 object-cover ml-10" src="/logo6.png" alt="Logo 6">
        </div>
    </div>

    <!-- Contact -->
    <div class="bg-[#FBF3DF] px-6 mx-auto">
        <div
        class="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto text-gray-900">
        <div class="flex flex-col justify-between">
          <div class="">
            <h2 class="text-4xl text-gray-700 lg:text-5xl font-bold leading-tight">Contact Us</h2>
            <p class="text-gray-500 my-6">
                We'd love to hear from you! Whether you have a question about a product, need assistance with an order, or just want to share your thoughts, our friendly and knowledgeable customer service team is here to help. Please feel free to reach out to us using the following methods:
            </p>
            <ul class="my-7 space-y-3 text-gray-500 list-inside mx-auto md:mx-0">
                <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mr-1.5 text-orange-500 flex-shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    info@gmail.com
                </li>
                <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mr-1.5 text-orange-500 flex-shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                    +63 000 0000
                </li>
                <li class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 mr-1.5 text-orange-500 flex-shrink-0">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    Metro Manila, Philippines
                </li>
            </ul>
          </div>
          
        </div>
        <div class="">
          <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input class="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="">
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input class="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text">
          </div>
          <div class="mt-8">
            <span class="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              class="w-full h-32 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div class="form-group form-check mt-8">
          <input
            type="checkbox"
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-orange-400 checked:border-orange-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
            id="exampleCheck87"
            checked
          />
          <label class="form-check-label inline-block text-gray-800" for="exampleCheck87">Send me a copy of this message</label>
          </div>
          <div class="mt-8">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-orange-500 text-white p-3 rounded-full w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
    

</div>
</template>

<script setup>
</script>

<style>
</style>