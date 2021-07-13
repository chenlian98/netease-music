<template>
  <div class="LogIn container">
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
          <el-form-item label="手机号" prop="pass"></el-form-item>
        </el-col>
        <el-col :span="18">
          <el-input
            type="text"
            v-model="ruleForm.Phone"
            autocomplete="off"
            oninput="value=value.replace(/[^\d]/g,'')"
            maxlength="11"
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="150">
        <el-col :span="3">
          <el-form-item label="密码" prop="pass"></el-form-item>
        </el-col>
        <el-col :span="18">
          <el-input
            type="password"
            v-model="ruleForm.pwd"
            autocomplete="off"
            maxlength="11"
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="150" :class="['item']">
        <el-col :span="3">
          <el-button type="primary" @click="phoneCode()"
            >获取手机验证码</el-button
          >
        </el-col>
        <el-col :span="18">
          <el-input
            type="text"
            v-model="ruleForm.pass"
            autocomplete="off"
            oninput="value=value.replace(/[^\d]/g,'')"
            maxlength="4"
          ></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="24" :class="['item']">
        <el-col :span="3">
          <el-form-item label="提交登录" prop="pass"></el-form-item>
        </el-col>
        <el-col :span="21">
          <el-form-item>
            <el-button
              type="primary"
              :plain="true"
              @click="submitForm('ruleForm')"
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
import Wapiti from "../../api.js";
let api = Wapiti.http;
export default {
  name: "LogIn",
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (this.ruleForm.Phone !== "") {
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
        Phone: "",
        pwd: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        Phone: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //login/cellphone?phone=18092697583&password=admin2022
          //手机号登录
          //let codeVerify = `${api}captcha/verify?phone=${this.ruleForm.Phone}&captcha=${this.ruleForm.pass}`;
          let Register = `${api}login/cellphone?phone=${this.ruleForm.Phone}&password=${this.ruleForm.pwd}`;
          //双个请求
          // axios
          //   .all([
          //     axios.get(codeVerify),
          //     axios.get(Register), // 替换接口
          //   ])
          //   .then(
          //     axios.spread((codeVerify, Register) => {
          //       // 上面两个请求都完成后，才执行这个回调方法
          //       console.log("codeVerify", codeVerify);
          //       console.log(Register.data);
          //       console.log();
          //       window.sessionStorage.setItem("token", Register.data.token);
          //       this.$message({
          //         message: "恭喜你，这是一条成功消息",
          //         type: "success",
          //       });
          //     })
          //   )
          //   .catch((err) => {
          //     console.log(err);
          //   })
          //   .finally(() => {
          //     console.log("完成了");
          //   });
          //单个请求
          axios
            .get(Register)
            .then((res) => {
              console.log(res);
              localStorage.setItem("token", res.data.token);
              alert("成功");
              axios
                .get(`${api}user/subcount`)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
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
      axios
        .get(`${api}captcha/sent?phone=${this.ruleForm.Phone}`)
        .then(function (response) {
          alert("发送成功 ");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          console.log("失败");
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
  /deep/input[type="number"] {
    -moz-appearance: textfield;
  }
  /deep/input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
