<template>
    <div class="justify-center content-center items-center flex flex-col">
        <br><br>
        <div class="mb-20">
            <div @click="check = !check; " v-if="check == true" class=" justify-center content-center items-center flex flex-col">
                <button class="block w-72 h-72 border-2 border-solid no-underline text-6xl bg-lime-500 hover:bg-lime-600 text-white font-bold" style="border-radius: 50%;">ว่าง</button>
            </div> 
            <div @click="check = !check; " v-if="check == false" class="justify-center content-center items-center flex flex-col">
                <button class="block w-72 h-72 border-2 border-solid no-underline text-6xl bg-rose-500 hover:bg-rose-600 text-white font-bold" style="border-radius: 50%;">ไม่ว่าง</button>
            </div>
        </div>
        

        <p class="text-lg">ชื่อ: {{ firstname }} {{ last_name }}</p>
        <p class="text-lg">ทะเบียน: {{id}}</p>
        <p class="text-lg">เพศ: {{sex}}</p>
        <p class="text-lg">เบอร์โทรศัพท์: {{phone}}</p>
        <p class="text-lg">มอเตอร์ไซค์: {{brand}}</p>
        <p class="text-lg">ตำแหน่ง: {{lo}}</p>

        <br><br>

        <router-link to="/login_riders">
            <a onclick="" class="bg-rose-400 text-white font-bold py-2 px-5 rounded-full">ออกจากระบบ</a>
        </router-link>
    </div>

</template>

<script defer src="https://use.fontawesome.com/releases/v5.14.0/js/all.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
<script>
    export default {
        data() {
            return {
                'id': "001",
                'firstname': "นางชุติมณฑน์",
                'last_name': "เลิศคุณวงส์",
                'sex': "หญิง",
                'phone': "084-5671235",
                'brand': "Kawasaki",
                'image': 'https://cdn.discordapp.com/attachments/859670322160599051/1080918715585015868/5.jpeg',
                'check': true,
                'lo': 'RNP'
            }
        }
    }
</script>