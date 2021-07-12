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
            type="text"
            v-model="ruleForm.pwd"
            autocomplete="off"
            oninput="value=value.replace(/[^\d]/g,'')"
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
        age: "",
        pwd:""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        Phone: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ trigger: "blur" }],
      },
    };
  },
  mounted() {
    let loginStatus = `${api}login/status`;
    //登录得状态
    axios
      .get(loginStatus)
      .then((res) => {
        let {account,profile} = res.data.data
        console.log(res);
        console.log(account);
        console.log(profile);
        // axios
        //     .get(`${api}user/detail?uid=387699584`)
        //     .then((res) => {
        //       console.log(res);
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        // eslint-disable-next-line no-empty
        if (valid) {
          // let codeVerify = `${api}captcha/verify?phone=${this.ruleForm.Phone}&captcha=${this.ruleForm.pass}`;
          // let loginStatus = `${api}login/status`;
          // axios
          //   .all([
          //     axios.get(codeVerify, {
          //       // 替换接口 这是模拟的假数据
          //       params: {
          //         id: 12,
          //       },
          //     }),
          //     axios.get(loginStatus), // 替换接口
          //   ])
          //   .then(
          //     axios.spread((codeVerify, loginStatus) => {
          //       // 上面两个请求都完成后，才执行这个回调方法
          //       console.log("codeVerify", codeVerify);
          //       console.log("loginStatus", loginStatus);
          //       console.log(loginStatus.data.data)
          //     })
          //   );
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
