<template>
    <nav class="bg-neutral-800 h-20 w-screen">
        <div class="sm:ml-6 sm:block">
          <div class="flex space-x-10 h-20 justify-center content-center items-center flex flex-row">
            <router-link to="">
                <a class="text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">หน้าหลัก</a>
            </router-link>
            <router-link to="">
                <a class="text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ดูคิวพี่วิน</a>
            </router-link>
            <router-link to="">
                <a class="text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ดูรอบรถตู้</a>
            </router-link>
            <router-link to="">
                <a class="text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">คำนวณค่าโดยสาร</a>
            </router-link>
            <router-link to="">
                <a class="text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">หาสถานที่ใกล้ฉัน</a>
            </router-link>
            <router-link to="">
                <a class="text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-2sm font-medium float-right">ประวัติการถูกใจ</a>
            </router-link>
            <router-link to="">
                <a class="text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-md px-3 py-2 text-2sm font-medium float-right">ออกจากระบบ</a>
            </router-link>
          </div>
        </div>
    </nav>
</template>

<script>
    export default {
    name: 'navbar',
    props: {
        msg: String
    }
    }
</script>
