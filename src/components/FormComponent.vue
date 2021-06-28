<template>
  <div class="container">
    <div class="title">网易云音乐请登录</div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row :gutter="150">
        <el-col :span="3">
          <el-form-item label="手机号登录" prop="pass"></el-form-item>
        </el-col>
        <el-col :span="18">
          <el-input
            type="text"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="150" :class="['item']">
        <el-col :span="3">
          <el-button type="primary" @click="phoneCode()">获取手机验证码</el-button>
        </el-col>
        <el-col :span="18">
          <el-input
            type="text"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="24" :class="['item']">
        <el-col :span="3">
          <el-form-item label="提交登录" prop="pass"></el-form-item>
        </el-col>
        <el-col :span="21">
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FormComponent",
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!");
          axios.get(`${this.$http.apiBaseUrl}captcha/verify?phone=18092697583xxx&captcha=4297`, )
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
              console.log("error submit!!");
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    phoneCode() {
       //发送手机验证码
       // console.log(axios)
      // axios.get('http://localhost:4000/captcha/sent?phone=18092697582')
      axios.get(`${this.$http.apiBaseUrl}captcha/sent?phone=18092697583`,)
        .then(function (response) {
          alert('发送成功 ')
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          console.log('失败');
        });
    },
  },
};
</script>
<style lang="less" scoped>
.container {
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .title {
    font-size: 20px;
    padding-bottom: 15px;
    color: #0000ec;
    font-weight: 500;
  }
  .item {
    margin-bottom: 15px;
  }
}
</style>
