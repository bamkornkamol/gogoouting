<template>
    <div class="grid grid-cols-2 h-screen">
        <div class="bg-orange-400" >
        </div>
        <div class="h-full p-8 justify-center content-center items-center flex flex-col">
            <h1 class="text-5xl font-semibold text-center tracking-wide">Register Van</h1> <br>
            <h3 class="text-zinc-500">สร้างบัญชีสำหรับพี่รถตู้</h3>
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


                <div>
                    <label class="font-semibold text-xl" for="">ชื่อ :</label>
                    <br>
                    <!-- <input :class="{'text-red-600' : joiValidationErrors.firstname? true: false }" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text"> -->
                    <input v-model="$v.firstname.$model" :class="{'border-rose-500 border-solid border': $v.firstname.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if=" $v.firstname.$error">
                        <br>
                        <!-- <span :key="index" v-if="joiValidationErrors.firstName.has('string.justalpha')" class="text-red-600"></span> -->
                        <p class="text-rose-500" v-if="!$v.firstname.required">กรุณากรอกชื่อให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.firstname.minLength">ต้องมีอย่างน้อย 5 ตัวอักษร</p>
                    </template>
                </div>
                <br>


                <div>
                    <label class="font-semibold text-xl" for="">นามสกุล :</label>
                    <br>
                    <!-- <input :class="{'text-red-600' : joiValidationErrors.firstname? true: false }" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text"> -->
                    <input v-model="$v.lastname.$model" :class="{'border-rose-500 border-solid border': $v.lastname.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if=" $v.lastname.$error">
                        <br>
                        <!-- <span :key="index" v-if="joiValidationErrors.lastname.has('string.justalpha')" class="text-red-600"></span> -->
                        <p class="text-rose-500" v-if="!$v.lastname.required">กรุณากรอกนามสกุลให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.lastname.minLength">ต้องมีอย่างน้อย 5 ตัวอักษร</p>
                    </template>
                </div>
                <br>

                <div>
                    <label class="font-semibold text-xl" for="">เบอร์โทรศัพท์ :</label>
                    <br>
                    <!-- <input :class="{'text-red-600' : joiValidationErrors.firstname? true: false }" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text"> -->
                    <input v-model="$v.phone.$model" :class="{'border-rose-500 border-solid border': $v.phone.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if=" $v.phone.$error">
                        <br>
                        <!-- <span :key="index" v-if="joiValidationErrors.phone.has('string.justalpha')" class="text-red-600"></span> -->
                        <p class="text-rose-500" v-if="!$v.phone.required">กรุณากรอกเบอร์โทรศัพท์ให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.phone.mobile">กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง</p>
                    </template>
                </div>
                <br>


                <div>
                    <label class="font-semibold text-xl" for="">รหัสผ่าน :</label>
                    <br>
                    <!-- <input :class="{'text-red-600' : joiValidationErrors.firstname? true: false }" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text"> -->
                    <input v-model="$v.pass.$model" :class="{'border-rose-500 border-solid border': $v.pass.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if="$v.pass.$error">
                        <br>
                        <!-- <span :key="index" v-if="joiValidationErrors.pass.has('string.justalpha')" class="text-red-600"></span> -->
                        <p class="text-rose-500" v-if="!$v.pass.required">กรุณากรอกรหัสผ่านให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.pass.minLength">ต้องมีอย่างน้อย 5 ตัวอักษร</p>
                        <p class="text-rose-500" v-if="!$v.pass.complex">กรุณากรอกรหัสผ่านให้ถูกต้อง</p>
                    </template>
                </div>
                <br>
            </div>
            <router-link to="">
                <a @click="submit" class="content-center bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">สร้างบัญชี</a>
            </router-link>
            <br><br>
            <router-link to="/login_van">
                <a class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับเข้าสู้หน้าเข้าสู่ระบบ</a>
            </router-link>
            <br>
            <router-link to="/selectadminuser">
                <a class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับสู่หน้าแรก</a>
            </router-link>
        </div>
    </div>
</template>

<script>
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'

    function mobile(value) {
        return !!value.match(/0[0-9]{9}/)
    }

    function complexPass(value) {
        if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
            return true
        } else {
            return false
        }
    }

    export default {
        data() {
            return {
                firstname: '',
                lastname: '',
                phone: '',
                pass: ''
            }
        },
        validations: {
            firstname: {
                required, minLength: minLength(5), maxLength:maxLength(100)
            }, 
            lastname: {
                required, minLength: minLength(5), maxLength:maxLength(100)
            },
            phone: {
                required, mobile: mobile
            },
            pass: {
                required, minLength: minLength(5), complex: complexPass
            }
        },
        methods: {
            submit() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    let formData = new FormData();
                    formData.append("firstname", this.firstname);
                    formData.append("lastname", this.lastname);
                    formData.append("phone", this.phone);
                    formData.append("pass", this.pass);
                }
            }
        }
    }
</script>
