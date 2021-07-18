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
        <el-col :span="6">
          <el-form-item label="手机号登录" prop="pass"></el-form-item>
        </el-col>
        <el-col :span="14">
          <el-input
            type="number"
            v-model="ruleForm.phone"
            autocomplete="off"
            oninput="if(value.length>11)value=value.slice(0,11)"
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="150" :class="['item']">
        <el-col :span="6">
          <el-button type="primary" @click="phoneCode()" class="btnCode"
            >获取手机验证码</el-button
          >
        </el-col>
        <el-col :span="14">
          <el-input
            type="number"
            v-model="ruleForm.checkCode"
            autocomplete="off"
            oninput="if(value.length>4)value=value.slice(0,4)"
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="24" :class="['item']">
        <el-col :span="3">
          <!--          <el-form-item label="提交登录" prop="pass"></el-form-item>-->
        </el-col>
        <el-col :span="21">
          <el-form-item :class="['btn']">
            <el-button type="primary" @click="submitForm('ruleForm')"
              >登录</el-button
            >
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
        if (this.ruleForm.checkCode !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.phone) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        phone: "",
        checkCode: "",
        age: "",
      },
      rules: {
        phone: [{ validator: validatePass, trigger: "blur" }],
        checkCode: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ trigger: "blur" }],
      },
      codeFlag: false,
      time: 10,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //验证验证码是否正确
          console.log(this.ruleForm.phone + "手机号");
          console.log(this.ruleForm.checkCode + "code");
          axios
            .get(
              `${this.$http.apiBaseUrl}captcha/verify?phone=${this.ruleForm.phone}xxx&captcha=${this.ruleForm.checkCode}`
            )
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
      let btnCode = document.querySelector(".btnCode span"); //获取类名
      //验证码倒计时 每天只能获取 5次 = 验证码
      if (!this.codeFlag) {
        this.time = 10;
        this.codeFlag = true; //先打开开关
        btnCode.innerHTML = `${this.time}秒后得到验证码`; //去掉1秒延迟
        let primeNumberDown = setInterval(() => {
          this.time -= 1; //每秒 - 1
          // console.log(this.time);
          if (this.time < 1) {
            // time不能是负数
            btnCode.innerHTML = `请获取验证码`;
            clearInterval(primeNumberDown); //清除定时器
            this.codeFlag = false; //关闭开关 开启了定时器后不能点击了，定时器走完了才可以重新走
            //发送axios请求
            console.log(this.$http.apiBaseUrl);
            console.log(this.ruleForm.phone);
            axios
              .get(
                `${this.$http.apiBaseUrl}captcha/sent?phone=${this.ruleForm.phone}`
              )
              .then(function (response) {
                alert("发送成功 ");
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
                console.log("失败");
              });
          } else {
            btnCode.innerHTML = `${this.time} 秒后获得验证码`;
          }
        }, 1000); //开启定时器
      }
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
    margin-bottom: 25px;
  }
  /deep/input[type="number"] {
    -moz-appearance: textfield;
  }
  /deep/ input[type="number"]::-webkit-inner-spin-button,
  /deep/input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /deep/ .btn .el-form-item__content {
    //border: 1px solid red;
    margin-left: 115px !important;
  }
}
</style>
