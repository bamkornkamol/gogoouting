<template>
    <div>
        <NavbarAll></NavbarAll>
        <div class="text-center">
        <img class="p-10 w-80 h-80 block ml-auto mr-auto" src="https://cdn.discordapp.com/attachments/859670322160599051/1080817457649954906/kid.png" alt="">
        <p class="p-8 text-center tracking-widest text-2xl text-gray-400">Bio...</p>
        <button class="tracking-widest bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit Profile</button>
        <!-- Details -->
        <div class="p-2 grid grid-cols-2">
            <div class="justify-center content-center items-center flex flex-col">
                <img style="width: 40px; height:40px;" src="https://cdn.discordapp.com/attachments/859670322160599051/1080815752917045288/user_2.png" alt="">
            </div>
            <div class="justify-center content-center items-center flex flex-col">
                <img style="width: 40px; height:40px;" src="https://cdn.discordapp.com/attachments/859670322160599051/1080815706641272852/heart.png" alt="">
            </div>
        </div>
        <div class="p-8 bg-gray-300 text-left max-w-full">
            <p class="tracking-widest">ชื่อ-นามสกุล :</p>
            <p class="tracking-widest">อีเมล :</p>
            <p class="tracking-widest">เบอร์โทรศัพท์ :</p>
            <p class="tracking-widest">ที่อยู่ :</p>
        </div>
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