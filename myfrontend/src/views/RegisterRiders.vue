<template>
        <div class="grid grid-cols-2 h-screen">
        <div class="bg-orange-400" >
        </div>
        <div class="h-full p-8 justify-center content-center items-center flex flex-col">
            <h1 class="text-5xl font-semibold text-center tracking-wide">Register Riders</h1> <br>
            <h3 class="text-zinc-500">สร้างบัญชีสำหรับพี่วิน</h3>
            <div class="p-8 content-left w-full">
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
                    <input v-model="$v.pass.$model" :class="{'border-rose-500 border-solid border': $v.pass.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="password">
                    <template v-if=" $v.pass.$error">
                        <br>
                        <!-- <span :key="index" v-if="joiValidationErrors.pass.has('string.justalpha')" class="text-red-600"></span> -->
                        <p class="text-rose-500" v-if="!$v.pass.required">กรุณากรอกรหัสผ่านให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.pass.minLength">ต้องมีอย่างน้อย 6 ตัวอักษร</p>
                        <p class="text-rose-500" v-if="!$v.pass.complex">กรุณากรอกรหัสผ่านให้ถูกต้อง</p>
                        
                    </template>
                </div>
                <br>

                <div class="grid grid-cols-3">
                    <label class="font-semibold text-xl" for="">เพศ :</label>
                    <div class="flex items-center">
                        <input id="default-radio-1" type="radio" value="male" name="sex" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="sex-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">ชาย</label>
                    </div>
                    <div class="flex items-center">
                        <input checked id="sex-2" type="radio" value="female" name="sex" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="sex-2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">หญิง</label>
                    </div>
                </div>
                <br>

                <label class="font-semibold text-xl" for="">ตำแหน่ง :</label>
                <select class="bg-zinc-200 border rounded-xl h-12 w-full text-gray-400 indent-3" name="" id="location">
                    <option value="">เลือกตำแหน่งที่ต้องการ</option>
                    <option value="RNP">RNP</option>
                    <option value="Billian">Billian</option>
                    <option value="AJ Park">AJ Park</option>
                    <option value="เกกี">เกกี</option>
                    <option value="ประตูข้างวิศวะ">ประตูข้างวิศวะ</option>
                    <option value="3 แยกวิศวะ">3 แยกวิศวะ</option>
                    <option value="คณะวิทย์">คณะวิทย์</option>
                    <option value="FBT">FBT</option>
                    <option value="จินดา">จินดา</option>
                    <option value="ตลาดสุวรรณภูมิ">ตลาดสุวรรณภูมิ</option>
                </select>
                <br><br>

                <div>
                    <label class="font-semibold text-xl" for="">ยี่ห้อมอเตอร์ไซค์ :</label>
                    <br>
                    <!-- <input :class="{'text-red-600' : joiValidationErrors.firstname? true: false }" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text"> -->
                    <input v-model="$v.brand.$model" :class="{'border-rose-500 border-solid border': $v.brand.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if=" $v.brand.$error">
                        <br>
                        <!-- <span :key="index" v-if="joiValidationErrors.brand.has('string.justalpha')" class="text-red-600"></span> -->
                        <p class="text-rose-500" v-if="!$v.brand.required">กรุณากรอกยี่ห้อมอเตอร์ไซค์ให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.brand.minLength">ต้องมีอย่างน้อย 5 ตัวอักษร</p>
                    </template>
                </div>
                <br>

                <div>
                    <label class="font-semibold text-xl" for="">เลขทะเบียน :</label>
                    <br>
                    <!-- <input :class="{'text-red-600' : joiValidationErrors.firstname? true: false }" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text"> -->
                    <input v-model="$v.numcar.$model" :class="{'border-rose-500 border-solid border': $v.numcar.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if=" $v.numcar.$error">
                        <br>
                        <!-- <span :key="index" v-if="joiValidationErrors.numcar.has('string.justalpha')" class="text-red-600"></span> -->
                        <p class="text-rose-500" v-if="!$v.numcar.required">กรุณากรอกเลขทะเบียนให้เรียบร้อย</p>
                        <p class="text-rose-500" v-if="!$v.numcar.minLength">ต้องมีอย่างน้อย 3 ตัวอักษร</p>
                    </template>
                </div>
                <input class="mt-5" type="file" name="file" ref="file" @change="handleFileUpload()">
            </div>

            <a @click="submit" class="content-center bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">สร้างบัญชี</a>

            <div class="flex flex-row space-x-2 mt-5">
                <router-link to="/login_riders">
                <a class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับเข้าสู้หน้าเข้าสู่ระบบ</a>
                </router-link>
                <br>
                <router-link to="/selectadminuser">
                    <a class="bg-zinc-200 hover:bg-zinc-600 text-gray font-bold text-center py-2 px-2 rounded-full left-2">กลับสู่หน้าแรก</a>
                </router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
    import { required, minLength, maxLength } from 'vuelidate/lib/validators'
    import axios from "axios";
    import Swal from 'sweetalert2'

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
                prefix: '',
                firstname: '',
                lastname: '',
                phone: '',
                pass: '',
                sex: '',
                role: '',
                brand: '',
                numcar: '',
                file:null
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
                required, minLength: minLength(6), maxLength: maxLength(20), complex: complexPass
            },
            brand: {
                required, minLength: minLength(5)
            },
            numcar: {
                required, minLength: minLength(3)
            }
        },
        methods: {
            handleFileUpload(){
                this.file = this.$refs.file.files[0];
            },
            submit() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    let formData = new FormData();
                    formData.append("fname", this.firstname);
                    formData.append("lname", this.lastname);
                    formData.append("phone", this.phone);
                    formData.append("password", this.pass);
                    formData.append("model", this.brand);
                    formData.append("bike_id", this.numcar);
                    formData.append('img', this.file)
                    formData.append('sex',document.querySelector('input[name="sex"]:checked').value)
                    formData.append('location',document.getElementById('location').value)
                    axios.post("http://localhost:3000/register/vin", formData ,{
                        headers: {
                        'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((response) => {
                        console.log(response)
                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'สร้างบัญชีผู้ใช้สำเร็จ',
                            showConfirmButton: false,
                            timer: 1500
                        }).then(() => {
                            this.$router.push('/login_riders')
                        })
                    }).catch((err) => {
                        console.log(err)
                    })
                }
            }
        }
    }
</script>


