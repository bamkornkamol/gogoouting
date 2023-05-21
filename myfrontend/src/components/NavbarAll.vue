<template>
    <div class="bg-orange-400 h-20 w-screen">
        <div class="sm:ml-6 sm:block">
          <div class="flex space-x-10 h-20 justify-center content-center items-center flex flex-row text-neutral-300">
            <img class="w-28" src="https://cdn.discordapp.com/attachments/1094988129192128632/1109954618252869763/GoGoOutLOGO.png" alt="">
            <router-link to="/home">
                <a class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">หน้าหลัก</a>
            </router-link>
            <router-link to="/vin">
                <a class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ดูคิวพี่วิน</a>
            </router-link>
            <router-link to="/van">
                <a class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ดูรอบรถตู้</a>
            </router-link>
            <router-link to="/calprice">
                <a class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">คำนวณค่าโดยสาร</a>
            </router-link>
            <router-link to="/googlemap">
                <a class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">หาสถานที่ใกล้ฉัน</a>
            </router-link>
            <router-link to="/profile">
                <a class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium float-right">โปรไฟล์</a>
            </router-link>
            <router-link to="/login_user">
                <a class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium float-right">ออกจากระบบ</a>
            </router-link>
          </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
