<template>

    <div>
        <NavbarAll></NavbarAll>
        <br><br>
        <div class="grid grid-cols-3">
            <div class="bg-neutral-400 rounded-2xl text-center w-11/12 h-96 justify-center content-center items-center flex flex-col">01</div>
            <div class="bg-neutral-400 rounded-2xl text-center w-11/12 h-96 justify-center content-center items-center flex flex-col">02</div>
            <div class="bg-neutral-400 rounded-2xl text-center w-11/12 h-96 justify-center content-center items-center flex flex-col">03</div>
        </div>
        
        <br><br><br>
        <div class="p-4 bg-gray-300 rounded-2xl w-11/12 h-96">
            <p>ชื่อสถานที่</p>
            <p>รายละเอียดสถานที่</p>
        </div>

        <br><br><br>
        <div class="p-4 bg-gray-300 rounded-2xl w-11/12 h-96">
            <div class="bg-lime-600 rounded-2xl text-center w-72 h-72 justify-center content-center items-center flex flex-col">Google Maps</div>
        </div>

        <br><br><br>
        <div class="justify-center content-center items-center flex flex-col">
            <p class="text-xl">ให้คะแนนร้านนี้</p>
            <div class="text-3xl">
                    <!--ดาวใส-->
                <div class="gird grid-cols-5">
                    <span><i class="fa-regular fa-star"></i></span>
                    <span><i class="fa-regular fa-star"></i></span>
                    <span><i class="fa-regular fa-star"></i></span>
                    <span><i class="fa-regular fa-star"></i></span>
                    <span><i class="fa-regular fa-star"></i></span>
                </div>
                <!--ดาวทึบ-->
                <div class="gird grid-cols-5">
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                </div> 
            </div> <br>
            <div class="bg-gray-300 w-4/5 h-16">เพิ่มความคิดเห็น</div>
        </div>
    </div>
    
</template>

<script>
    import NavbarAll from '../components/NavbarAll.vue'
    export default {
        components: {
            NavbarAll
        }
    }
</script>