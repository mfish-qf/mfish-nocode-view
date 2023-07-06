<!--
 @description: 登录
 @author: mfish
 @date: 2023/7/6
-->
<template>
  <section class="back-color">
    <div id="newLogin" class="login">
      <div class="logo -enter-x">
        <img class="brand" src="/resource/img/logo.png" alt="logo" />
        <div class="title">
          <h1>摸鱼低代码平台</h1>
          <h6>MFish NoCode</h6>
        </div>
      </div>
      <div id="errorShow" data-bs-toggle="modal" data-bs-target="#errorModal" style="position: absolute"> </div>
      <div class="modal fade" id="errorModal">
        <div class="modal-dialog">
          <div class="alert alert-danger" role="alert">
            {{ errorMsg }}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="card-left" v-if="showLeft"> </div>
          <div class="card-wrapper enter-x">
            <div class="card fat">
              <div class="card-body">
                <h4 class="card-title mb-3">帐号登录</h4>
                <div>
                  <form id="login" method="POST" class="enter-x">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        :class="{ 'is-invalid': error.username.show, 'is-valid': isValid }"
                        id="inputUsername"
                        v-model="username"
                        name="username"
                        placeholder="用户名"
                        @blur="validateUserName"
                      />
                      <label for="inputUsername">用户名</label>
                      <div class="invalid-feedback" v-if="error.username.show">
                        {{ error.username.msg }}
                      </div>
                    </div>
                    <div class="input-group mb-3">
                      <div class="form-floating">
                        <input
                          :type="passwordType"
                          class="form-control"
                          :class="{ 'is-invalid': error.password.show, 'is-valid': isValid }"
                          id="inputPassword"
                          v-model="password"
                          name="password"
                          placeholder="密码"
                          @blur="validatePassword"
                        />
                        <label for="inputPassword">密码</label>
                        <div class="invalid-feedback" v-if="error.password.show">
                          {{ error.password.msg }}
                        </div>
                      </div>
                      <span class="btn send-msg" @mouseover="msgOver" @mouseleave="msgLeave" @click="pwdShowChange">
                        <svg
                          v-if="passwordShow"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          :fill="sendMsgColor"
                          class="bi bi-eye"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
                          />
                          <path
                            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
                          />
                        </svg>
                        <svg
                          v-else
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          :fill="sendMsgColor"
                          class="bi bi-eye-slash"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
                          />
                          <path
                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
                          />
                          <path
                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div class="input-group mb-1">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          :class="{ 'is-invalid': error.captcha.show, 'is-valid': isValid }"
                          id="inputCaptcha"
                          v-model="captchaValue"
                          name="captchaValue"
                          placeholder="验证码"
                          @blur="validateCaptcha"
                        />
                        <input type="hidden" name="captchaKey" v-model="captchaKey" />
                        <label for="inputCaptcha">验证码</label>
                        <div class="invalid-feedback" v-if="error.captcha.show">
                          {{ error.captcha.msg }}
                        </div>
                      </div>
                      <span><img :src="captchaUrl" @click="captcha" class="captcha" alt="验证码" /></span>
                    </div>
                    <div class="form-check mb-3">
                      <input
                        class="form-check-input"
                        id="rememberMe"
                        type="checkbox"
                        name="rememberMe"
                        v-model="rememberMe"
                      />
                      <label class="form-check-label" for="rememberMe"> 记住我 </label>
                      <a style="float: right" href="https://jq.qq.com/?_wv=1027&k=0A2bxoZX" target="_blank"
                        >免费获取帐号密码</a
                      >
                    </div>
                    <div class="d-grid gap-2 mb-3">
                      <button type="button" class="btn btn-primary btn-block" @click="login">登录</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer"> Copyright &copy; 2023 &mdash; 摸鱼低代码平台 </div>
    </div>
  </section>
</template>
<script lang="ts">
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.min.js";
  import { computed, onMounted, reactive, ref, unref } from "vue";
  import { getCaptcha } from "/@/api/sys/User";
  import { oauth2Config } from "/@/settings/LoginSetting";
  import { useMessage } from "/@/hooks/web/UseMessage";
  import { useUserStore } from "/@/store/modules/User";
  import { useI18n } from "/@/hooks/web/UseI18n";
  import { debounce } from "lodash-es";
  export default {
    setup() {
      const username = ref("");
      const password = ref("");
      const captchaValue = ref("");
      const errorMsg = ref("");
      const showLeft = computed(() => {
        return document.body.clientWidth > 425;
      });
      const passwordShow = ref(false);
      const passwordType = ref("password");
      const sendMsgColor = ref("black");
      const captchaKey = ref("");
      const captchaUrl = ref("");
      const rememberMe = ref(false);
      const isValid = ref(false);
      const { notification } = useMessage();
      const userStore = useUserStore();
      const { t } = useI18n();
      const error = reactive({
        username: {
          show: false,
          msg: ""
        },
        password: {
          show: false,
          msg: ""
        },
        captcha: {
          show: false,
          msg: ""
        },
        phone: {
          show: false,
          msg: ""
        },
        code: {
          show: false,
          msg: ""
        }
      });
      function validateUserLogin() {
        return !(!validateUserName() || !validatePassword() || !validateCaptcha());
      }
      function validateUserName() {
        if (!unref(username)) {
          showInputError("username", "请输入用户名");
          return false;
        }
        hideInputError("username");
        return true;
      }
      function validatePassword() {
        if (!password.value) {
          showInputError("password", "请输入密码");
          return false;
        }
        hideInputError("password");
        return true;
      }
      function validateCaptcha() {
        if (!captchaValue.value) {
          showInputError("captcha", "请输入验证码");
          return false;
        }
        hideInputError("captcha");
        return true;
      }
      function showInputError(key, error) {
        setError(key, true, error);
      }
      function setError(key, show, err) {
        error[key].show = show;
        error[key].msg = err;
      }

      function hideInputError(key) {
        setError(key, false, "");
      }
      function pwdShowChange() {
        passwordShow.value = !passwordShow.value;
        if (passwordShow.value) {
          passwordType.value = "text";
        } else {
          passwordType.value = "password";
        }
      }

      function msgOver() {
        sendMsgColor.value = "#0d6efd";
      }
      function msgLeave() {
        sendMsgColor.value = "black";
      }

      function captcha() {
        getCaptcha().then((res) => {
          captchaUrl.value = "data:image/jpeg;base64," + res.img;
          captchaKey.value = res.captchaKey;
        });
      }
      const login = () => {
        if (validateUserLogin()) {
          isValid.value = true;
          //增加一个停顿校验效果
          handleLogin();
        }
      };

      const handleLogin = debounce(() => {
        userStore
          .login({
            password: password.value,
            username: username.value,
            rememberMe: rememberMe.value,
            client_id: oauth2Config.client_id,
            client_secret: oauth2Config.client_secret,
            grant_type: "password",
            redirect_uri: oauth2Config.redirect_uri,
            mode: "modal"
          })
          .then((userInfo) => {
            notification.success({
              message: t("sys.login.loginSuccessTitle"),
              description: `${t("sys.login.loginSuccessDesc")}: ${userInfo?.nickname}`,
              duration: 3
            });
          });
      }, 200);

      onMounted(() => {
        captcha();
      });

      return {
        username,
        password,
        captchaValue,
        error,
        errorMsg,
        showLeft,
        validateUserName,
        pwdShowChange,
        passwordShow,
        passwordType,
        validatePassword,
        msgOver,
        msgLeave,
        sendMsgColor,
        validateCaptcha,
        captchaKey,
        captchaUrl,
        captcha,
        rememberMe,
        login,
        isValid
      };
    }
  };
</script>
<style scoped lang="less">
  html,
  body {
    height: 100%;
  }

  ::-ms-reveal {
    display: none;
  }

  .back-color {
    background: linear-gradient(to left, #00fff0, #0083fe);
    background: -webkit-linear-gradient(to left, #00fff0, #0083fe);
    height: 100%;
  }

  .login {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: url(/resource/img/login-bg.png), linear-gradient(to left, #00fff0, #0083fe);
    background-size: cover;
    height: 100%;
    font-size: 14px;
    transform: translateX(-30px);
    opacity: 0;
    animation: enter-x-animation 0.4s ease-in-out 0.3s;
    animation-fill-mode: forwards;
    animation-delay: 0.1s;
  }

  .login .logo {
    display: flex;
    align-items: center;
    margin: 20px 0 0 100px;
  }

  .login .brand {
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    padding: 2px;
    display: flex;
    align-items: center;
  }

  .login .logo .title {
    color: #fbfbfb;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-left: 20px;
  }

  .login .logo .title > h1 {
    font-size: 22px;
    font-weight: 700;
  }

  .login .logo .title > h6 {
    font-weight: 500;
  }

  .login .brand img {
    width: 100%;
  }

  .login .card-left {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .login .card-left .title {
    font-size: 24px;
    color: #fff;
    font-weight: 700;
  }

  .login .card-wrapper {
    width: 450px;
  }

  .login .card {
    border-color: transparent;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .login .card.fat {
    padding: 10px;
  }

  .login .card .card-title {
    margin-bottom: 30px;
    font-weight: 700;
  }

  .login .form-control {
    border-width: 1px;
    border-radius: 0;
    background-image: none;
  }

  .login .form-group label {
    width: 100%;
  }

  .login .send-msg {
    position: absolute;
    top: 18px;
    right: 10px;
  }

  .login .captcha {
    position: absolute;
    top: 1px;
    right: 0;
    width: 149px;
    z-index: 10;
  }

  .login .captcha:hover {
    cursor: pointer;
  }

  .login .form-check-input {
    border-radius: 0;
  }

  .login .btn.btn-block {
    padding: 10px;
    border-radius: 0;
  }

  .login .btn.send-msg {
    position: absolute;
    top: 8px;
    right: 0;
    border: none;
    z-index: 10;
  }

  .login .btn-tabs.d-flex {
    justify-content: space-between;
  }

  .login .btn.btn-tab {
    border-radius: 0;
    font-size: 14px;
    /*color: rgba(0, 0, 0, 0.85);*/
    border-color: #d9d9d9;
  }

  .login .btn.btn-tab.btn-default {
    width: 120px;
  }

  .login .btn.btn-tab:hover {
    color: #2a7dc9;
    border-color: #2a7dc9;
    background: #fff;
  }

  .login .qrcode-img {
    display: flex;
    justify-content: space-around;
  }

  .login .qrcode-img .qrcode {
    border-color: transparent;
    box-shadow: 0 0 8px #c6c4ce;
    width: 240px;
    height: 240px;
  }

  .login .qrcode-img .qrcode-status {
    background: hsla(0, 0%, 100%, 0.95);
    position: absolute;
    top: 0;
    border-color: transparent;
    box-shadow: 0 0 8px #c6c4ce;
    width: 240px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login .qrcode-img .qrcode-status > p:nth-child(2) {
    color: #52c41a;
  }

  .login .qrcode-img .qrcode-status > p:last-child {
    font-weight: 700;
  }

  .login .qrcode-img .qrcode-error p {
    color: #3c3c3c;
    font-weight: 700;
  }

  .login .qrcode-img .qrcode-error .refresh {
    font-size: 12px;
    border-radius: 0;
  }

  .login .qrcode-desc {
    display: flex;
    justify-content: space-around;
    color: #6c6c6c;
  }

  .login .footer {
    margin: 40px 0;
    color: #888;
    text-align: center;
  }

  @media screen and (max-width: 540px) {
    .login .logo {
      margin: 20px 0 0 20px;
    }

    .login .card-left .title {
      font-size: 14px;
      font-weight: 700;
    }
  }

  @media screen and (max-width: 425px) {
    .login .card-wrapper {
      width: 100%;
      margin: 0 auto;
    }

    .login .card-left .title {
      font-size: 14px;
      font-weight: 700;
    }

    .login .logo {
      margin: 20px 0 0 20px;
    }

    .login .btn.btn-tab.btn-default {
      width: 100px;
    }
  }

  @media screen and (max-width: 375px) {
    .login .btn.btn-tab.btn-default {
      width: 90px;
    }
  }

  @media screen and (max-width: 320px) {
    .login .btn.btn-tab.btn-default {
      width: 80px;
      font-size: 12px;
    }

    .login .card.fat {
      padding: 0;
    }

    .login .card.fat .card-body {
      padding: 10px;
    }
  }
</style>
