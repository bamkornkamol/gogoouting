<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="bg-orange-400" >
        </div>
        <div class="h-full p-8 justify-center content-center items-center flex flex-col">
            <h1 class="text-5xl font-semibold text-center tracking-wide">Register Riders</h1> <br>
            <h3 class="text-zinc-500">สร้างบัญชีสำหรับพี่วิน</h3>
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
                </div>
                <br>
                <label class="font-semibold text-xl" for="">ชื่อ :</label>
                <br>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
                <label class="font-semibold text-xl" for="">นามสกุล :</label>
                <br>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
                <label class="font-semibold text-xl" for="">เบอร์โทรศัพท์ :</label>
                <br>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
                <label class="font-semibold text-xl" for="">รหัสผ่าน :</label>
                <br>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
                <div class="grid grid-cols-3">
                    <label class="font-semibold text-xl" for="">เพศ :</label>
                    <div class="flex items-center">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ชาย</label>
                    </div>
                    <div class="flex items-center">
                        <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="default-radio-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">หญิง</label>
                    </div>
                </div>
                <br>
                <label class="font-semibold text-xl" for="">ตำแหน่ง :</label>
                <select class="bg-zinc-200 border rounded-xl h-12 w-full text-gray-400 indent-3" name="" id="">
                    <option value="">เลือกตำแหน่งที่ต้องการ</option>
                    <option value="">RNP</option>
                    <option value="">Billian</option>
                    <option value="">AJ Park</option>
                    <option value="">เกกี</option>
                    <option value="">ประตูข้างวิศวะ</option>
                    <option value="">3 แยกวิศวะ</option>
                    <option value="">คณะวิทย์</option>
                    <option value="">FBT</option>
                    <option value="">จินดา</option>
                    <option value="">ตลาดสุวรรณภูมิ</option>
                </select>
                <br><br>
                <label class="font-semibold text-xl" for="">ยี่ห้อมอเตอร์ไซค์ :</label>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
                <label class="font-semibold text-xl" for="">เลขทะเบียน :</label>
                <input class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                <br><br>
            </div>
            <a href="/templates/login.html" onclick="success_regis()" class="content-center bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">สร้างบัญชี</a>
            <br><br>            
            <a href="/templates/login_riders.html" class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับเข้าสู้หน้าเข้าสู่ระบบ</a>
            <br>
            <a href="/templates/select_admin_user.html" class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับสู่หน้าแรก</a>
        </div>
    </div>
</template>

<script>
    function success_regis() {
        alert('สร้างบัญชีผู้ใช้สำเร็จ')
    }
</script>