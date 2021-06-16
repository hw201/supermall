<template>
  <div>
    <nav-bar class="me">
      <div slot="center">我的档案</div>
    </nav-bar>
    <profilemobile />
    <profilemoney />
    <profilemsg />
    <profilecar />
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Profilecar from "./childprofile/profilecar.vue";
import Profilemobile from "./childprofile/profilemobile.vue";
import Profilemoney from "./childprofile/profilemoney.vue";
import Profilemsg from "./childprofile/profilemsg.vue";
export default {
  components: { NavBar, Profilemobile, Profilemoney, Profilemsg, Profilecar },
  name: "Profile",
};
</script>

<style scoped>
.me {
  background-color: pink;
  color: white;
  font-size: 20px;
}
</style>