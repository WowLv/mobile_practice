<template>
  <div class="container">
    <div class="nav-item" v-for="(item, index) in itemList" :key="index">
      <div class="icon iconfont" :class="item.icon"></div>
      <p class="text">{{item.text}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "NavBar"
})
export default class NavBar extends Vue {
  private itemList: object[] = [
    { icon: "icon-home_light", text: "首页" },
    { icon: "icon-cart_light", text: "购物车" },
    { icon: "icon-form_light", text: "订单列表" },
    { icon: "icon-my_light", text: "我的淘宝" },
    { icon: "icon-more_light", text: "更多" }
  ];
}
</script>

<style lang="scss" scoped>
.container {
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #f8f8f8;
  height: 45px;
  width: 100%;
  padding: 0 20px;
  padding-top: 2px;
  display: flex;
  justify-content: space-between;
  .nav-item {
    color: #5d656b;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    .icon {
        font-size: 22px;
        height: 22px;
        line-height: 22px;
    }
    .text {
        font-size: 12px;
    }
  }
}
</style>