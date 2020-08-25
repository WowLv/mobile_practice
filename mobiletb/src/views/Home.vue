<template>
  <div class="container">
    <!-- 导航栏 -->
    <nav-bar></nav-bar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="120">
      <van-swipe-item v-for="item in imgList" :key="item.key" class="swipe-item">
        <img :src="item.src" class="img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 菜单栏 -->
    <div class="menu-box">
      <div class="menu-top"></div>
      <menu-bar></menu-bar>
    </div>
    <!-- 推荐商品 -->
    <div class="main">
      <recommend class="recommend"></recommend>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "@/components/NavBar.vue";
import MenuBar from "@/components/MenuBar.vue";
import Recommend from "@/components/Recommend.vue";
// interface imgSrc {
//     key: number,
//     src: string
// }
@Component({
  components: {
    NavBar,
    MenuBar,
    Recommend
  }
})
export default class App extends Vue {
  private imgList: object[] = [
    {
      key: 1,
      src:
        "https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg"
    },
    {
      key: 2,
      src: "https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg"
    },
    {
      key: 3,
      src:
        "//img.alicdn.com/imgextra/i2/56/O1CN01NWzRv31CHgnTlb1eF_!!56-0-luban.jpg"
    },
    {
      key: 4,
      src:
        "//gw.alicdn.com/imgextra/i2/99/O1CN01Oh7inY1CbNpNTm3Bz_!!99-0-lubanu.jpg"
    },
    {
      key: 5,
      src:
        "//gw.alicdn.com/imgextra/i4/20/O1CN01OTaPIK1C1CXYH2UqR_!!20-0-lubanu.jpg"
    }
  ];
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #f6f6f6;
  .swipe-item {
    .img {
      width: 100%;
      height: 100%;
    }
  }
  .menu-box {
    position: relative;
    .menu-top {
      position: absolute;
      background-image: url(https://gw.alicdn.com/tfs/TB1vMMwChTpK1RjSZFMXXbG_VXa-1125-30.png);
      height: 10px;
      width: 100%;
      background-size: 100%;
      top: -8px;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
  .main {
  }
}
</style>