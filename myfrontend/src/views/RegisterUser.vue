<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="bg-orange-400" >
        </div>
        <div class="h-full p-8 justify-center content-center items-center flex flex-col">
            <h1 class="text-5xl font-semibold text-center tracking-wide">Register</h1> <br>
            <h3 class="text-zinc-500">สร้างบัญชีสำหรับผู้ใช้</h3>
            <div class="p-8 content-left w-full">
                <div class="grid grid-cols-3">
                    <label class="font-semibold text-xl" for="">คำนำหน้าชื่อ :</label>
                    <div class="flex items-center">
                        <input type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">นาย</label>
                    </div>
                    <div class="flex items-center">
                        <input type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">นางสาว</label>
                    </div>
                </div> <br>
                <label class="font-semibold text-xl" for="">ชื่อ :</label>
                <br>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
                <label class="font-semibold text-xl" for="">นามสกุล :</label>
                <br>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
                <label class="font-semibold text-xl" for="">อีเมล :</label>
                <br>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
                <label class="font-semibold text-xl" for="">รหัสผ่าน :</label>
                <br>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
            </div>
            <a href="/templates/login_user.html" onclick="alert('สร้างบัญชีผู้ใช้สำเร็จ')" class="content-center bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">สร้างบัญชี</a>
            <br><br>
            <a href="/templates/login_user.html" class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับเข้าสู้หน้าเข้าสู่ระบบ</a>
            <br>
            <a href="/templates/select_admin_user.html" class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับสู่หน้าแรก</a>
        </div>
    </div>
</template>
