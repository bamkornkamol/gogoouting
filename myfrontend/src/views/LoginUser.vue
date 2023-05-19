<template>
    <div class="grid grid-cols-2 w-screen">
        <div class="h-screen justify-center content-center items-center flex flex-col p-8">
            <h1 class="text-5xl font-semibold text-center tracking-wide">Welcome to <br> Go Go Outing KMITL !!</h1> <br>
            <h3 class="text-zinc-500">เข้าสู่ระบบผู้ใช้</h3>
            <br>
            <div class="justify-center content-center items-center flex flex-col">
                <label class="" for="">อีเมล</label>

                <input class="bg-zinc-200 border rounded-xl h-12 w-96 p-4" type="text">
                <br>
                <label class="" for="">รหัสผ่าน</label>

                <input class="bg-zinc-200 border rounded-xl h-12  w-96 p-4" type="text">
            </div>
            <br><br>
            <div class="grid grid-cols-2 flex justify-end">
                <a :href="'/RegisterUser/${}'" class="bg-zinc-400 hover:bg-zinc-600 text-white font-bold text-center py-2 px-2 rounded-full left-2">ยังไม่มีบัญชีผู้ใช้?</a>
                <a href="/views/AllHome.vue" class="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-5 rounded-full ml-6">เข้าสู่ระบบ</a>
            </div>
            <br><br>
            <a href="/views/SelectAdminUser.vue" class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับสู่หน้าแรก</a>
        </div>

        <div class="h-screen bg-orange-400">
            
        </div>
    </div>
</template>

