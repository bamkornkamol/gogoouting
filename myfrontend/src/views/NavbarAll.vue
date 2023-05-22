<template>
    <div class="bg-orange-400 h-20 w-screen">
        <div class="sm:ml-6 sm:block">
          <div class="flex space-x-10 h-20 justify-center content-center items-center flex flex-row text-neutral-300">
                <img @click="$router.push('/home/'+$route.params.userid); test()" class="w-28" src="https://cdn.discordapp.com/attachments/1094988129192128632/1109954618252869763/GoGoOutLOGO.png" alt="">
            
                <a @click="$router.push('/home/'+$route.params.userid)" class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">หน้าหลัก</a>
            

                <a @click="$router.push('/vin/'+$route.params.userid)" class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ดูคิวพี่วิน</a>


                <a @click="$router.push('/van/'+$route.params.userid)" class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">ดูรอบรถตู้</a>


                <a @click="$router.push('/googlemap/'+$route.params.userid)" class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium">หาสถานที่ใกล้ฉัน</a>


                <a @click="$router.push('/profile/'+$route.params.userid)" class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium float-right">โปรไฟล์</a>


                <a @click="$router.push('/login_user')" class="text-white hover:bg-neutral-500 hover:text-white rounded-md px-3 py-2 text-2sm font-medium float-right">ออกจากระบบ</a>

          </div>
        </div>
    </div>
</template>

<script>
    export default {

    methods:{
        test(){
            console.log(this.$route.params.userid)
        }
    }}
</script>
