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
                        <input v-model="sex" type="radio" :value="true" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">นาย</label>
                    </div>
                    <div class="flex items-center">
                        <input v-model="sex" type="radio" :value="false" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">นางสาว</label>
                    </div>
                </div>
                <template v-if=" $v.sex.$error">
                    <p class="text-rose-500" v-if="!$v.sex.required">กรุณากรอกให้เรียบร้อย</p>
                </template>
                <br>

                <div>
                    <label class="font-semibold text-xl" for="">ชื่อ :</label>
                    <br>
                    <!-- <input :class="{'text-red-600' : joiValidationErrors.firstname? true: false }" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text"> -->
                    <input v-model="$v.firstname.$model" :class="{'border-rose-500 border-solid border': $v.firstname.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if=" $v.firstname.$error">
                        <br>
                        <!-- <span :key="index" v-if="joiValidationErrors.firstName.has('string.justalpha')" class="text-red-600"></span> -->
                        <p class="text-rose-500" v-if="!$v.firstname.required">กรุณากรอกชื่อให้เรียบร้อย</p>
                    </template>
                </div>
                <br>


                <div>
                    <label class="font-semibold text-xl" for="">นามสกุล :</label>
                    <br>
                    <input v-model="$v.lastname.$model" :class="{'border-rose-500 border-solid border' : $v.lastname.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if=" $v.lastname.$error">
                        <br>
                        <!-- <span :key="index" v-if="joiValidationErrors.lastName.has('string.justalpha')" class="text-red-600"></span> -->
                        <p class="text-rose-500" v-if="!$v.lastname.required">กรุณากรอกนามสกุลให้เรียบร้อย</p>
                    </template>
                </div>
                <br>

                <div>
                    <label class="font-semibold text-xl" for="">อีเมล :</label>
                    <br>
                    <input v-model="$v.email.$model" :class="{'border-rose-500 border-solid border' : $v.email.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if=" $v.lastname.$error">
                        <br>
                        <p class="text-rose-500" v-if="!$v.email.required">กรุณากรอกอีเมลให้เรียบร้อย</p>
                    </template>
                </div>
                <br>

                <div>
                    <label class="font-semibold text-xl" for="">รหัสผ่าน :</label>
                    <br>
                    <input v-model="$v.pass.$model" :class="{'border-rose-500 border-solid border' : $v.pass.$error}" class="bg-zinc-200 border rounded-xl h-12 p-4 w-full" type="text">
                    <template v-if=" $v.lastname.$error">
                        <br>
                        <p class="text-rose-500" v-if="!$v.pass.required">กรุณากรอกรหัสผ่านให้เรียบร้อย</p>
                    </template>
                </div>
                <br>

            </div>
            <router-link to="">
                <a @click="submit" class="content-center bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full">สร้างบัญชี</a>
            </router-link>
            <br><br>
            <router-link to="/login_user">
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
    // import Vue from 'vue';
    // import vueJoiValidation, {Joi} from 'vue-joi-validation';

    // const options = {
    //     extend: {
    //         base: Joi.string(),
    //         name: 'string',
    //         language: {
    //             justalpha: 'just alphabetic allowed ',
    //         },
    //         rules: [{
    //             name: 'justalpha',
    //             validate(params, value, contextState, options) {
    //                 let regPattern = new RegExp('^[a-zA-Z]*$');
    //                 if (!regPattern.test(value)) {
    //                         return this.createError('string.justalpha', {}, contextState, options);
    //                     }
    //                     return value; // Everything is OK
    //                 }
    //             }]
    //         }
    // };
    // Vue.use(vueJoiValidation,options);

import { required, minLength, maxLength } from 'vuelidate/lib/validators'

    export default {
        data() {
            return {
                firstname: '',
                lastname: '',
                email: '',
                pass: ''
            }
        },
        validations: {
            // joiValidationSchemaObject() {
            //     return this.$joi.object({
            //         firstname: this.$joi.string().alphanum().required().min(5).max(100),
            //         lastname: this.$joi.string().alphanum().required().min(5).max(100),
            //         email: this.$joi.required()
            //     })
            // }
            sex: {
                required
            },
            firstname: {
                required, minLength: minLength(5), maxLength:maxLength(100)
            }, 
            lastname: {
                required, minLength: minLength(5), maxLength:maxLength(100)
            },
            email: {
                required, minLength: minLength(5), maxLength: maxLength(100)
            },
            pass: {
                required, minLength: minLength(5)
            }
        },
        methods: {
            submit() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    let formData = new FormData();
                    formData.append("sex", this.sex);
                    formData.append("firstname", this.firstname);
                    formData.append("lastname", this.lastname);
                    formData.append("email", this.email);
                    formData.append("pass", this.pass);
                } else {
                    return alert('สร้างบัญชีผู้ใช้สำเร็จ')
                }
            }
        }
        
    }
</script>
