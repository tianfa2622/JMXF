<template>
  <div class="main">
    <div class="login">
      <h2>智慧街面巡防系统</h2>
      <div class="">
        <input type="text" class="input" required="" autocomplete="off" />
        <label class="lable">请输入用户名</label>
      </div>
      <div class="">
        <input type="password" class="input pass_input" required="" />
        <label class="lable pass_lable">请输入密码</label>
      </div>
      <input type="submit" name="" value="登录" class="submit" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.main {
  height: 100%;
  background-image: url('../../assets/backimg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.login {
  width: 400px;
  height: 330px;
  border: 2px solid #eb2f06;
  border-right-color: #60a3bc;
  border-top-color: #60a3bc;
  border-radius: 20px;
  background: black;
  opacity: 0.6;
  text-align: center;
  color: white;
  font-size: 18px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  * {
    display: block;
  }
}
.lable {
  position: absolute;
  top: 100px;
  left: 30px;
  color: #60a3bc;
  z-index: -1;
  transition: 0.8s;
}
.pass_lable {
  top: 180px;
}
.input {
  width: 340px;
  height: 30px;
  position: absolute;
  top: 100px;
  left: 30px;
  background-color: inherit;
  border: none;
  border-bottom: 1px solid #60a3bc;
  color: white;
  outline: none;
  font-size: 18px;
}
.pass_input {
  top: 180px;
}
.input:focus ~ label,
.input:valid ~ label {
  top: 90px;
  font-size: 16px;
  color: #eb2f06;
}
.pass_input:focus ~ label,
.pass_input:valid ~ label {
  top: 170px;
}
.submit {
  width: 180px;
  height: 40px;
  position: absolute;
  top: 250px;
  left: 110px;
  text-transform: uppercase;
  font-size: 22px;
  color: white;
  border: none;
  border-radius: 25px;
  outline: none;
  background: #60a3bc;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    color: #1a1a1a;
    background-image: linear-gradient(125deg, #60a3bc, #eb2f06);
    transition: 0.8s;
  }
}
</style>
