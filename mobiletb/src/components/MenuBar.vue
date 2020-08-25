<template>
  <div class="container">
    <div class="menu" id="menu">
      <div class="menu-item" v-for="item in imgList" :key="item.key">
        <div class="top-item">
          <img class="img" :src="item.src1" />
          <span class="text">{{item.text1}}</span>
        </div>
        <div class="bottom-item">
          <img class="img" :src="item.src2" />
          <span class="text">{{item.text2}}</span>
        </div>
      </div>
    </div>
    <step-bar :moveWidth="moveWidth"></step-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import StepBar from "./StepBar.vue";

@Component({
  name: "MenuBar",
  components: {
    StepBar
  }
})
export default class NavBar extends Vue {
  private imgList: object[] = [
    {
      key: 1,
      text1: "天猫新品",
      src1:
        "https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1",
      text2: "充值中心",
      src2:
        "https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"
    },
    {
      key: 2,
      text1: "今日爆款",
      src1:
        "https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1",
      text2: "机票酒店",
      src2:
        "https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1"
    },
    {
      key: 3,
      text1: "天猫国际",
      src1:
        "https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
      text2: "金币庄园",
      src2:
        "https://gw.alicdn.com/tfs/TB19yZJVBLoK1RjSZFuXXXn0XXa-183-144.png?getAvatar=1"
    },
    {
      key: 4,
      text1: "饿了吗",
      src1:
        "https://gw.alicdn.com/tfs/TB1DaMyVpzqK1RjSZFoXXbfcXXa-185-144.png?getAvatar=1",
      text2: "阿里拍卖",
      src2:
        "https://gw.alicdn.com/tfs/TB16ZYDk4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1"
    },
    {
      key: 5,
      text1: "天猫超市",
      src1:
        "https://gw.alicdn.com/tfs/TB1FucwVwHqK1RjSZFgXXa7JXXa-183-144.png?getAvatar=1",
      text2: "淘宝吃货",
      src2:
        "https://gw.alicdn.com/tfs/TB19dcwVyrpK1RjSZFhXXXSdXXa-183-144.png?getAvatar=1"
    },
    {
      key: 6,
      text1: "分类",
      src1:
        "https://gw.alicdn.com/tfs/TB1nBktVxTpK1RjSZR0XXbEwXXa-183-144.png?getAvatar=1",
      text2: "闲鱼",
      src2:
        "https://gw.alicdn.com/tfs/TB1CoEwVrvpK1RjSZFqXXcXUVXa-185-144.png?getAvatar=1"
    },
    {
      key: 7,
      text1: "天猫美食",
      src1:
        "https://gw.alicdn.com/tfs/TB1fcOKXkCy2eVjSZSyXXXukVXa-183-144.png?getAvatar=1",
      text2: "会员中心",
      src2:
        "https://gw.alicdn.com/tfs/TB1FyEazAY2gK0jSZFgXXc5OFXa-183-144.png?getAvatar=1"
    },
    {
      key: 8,
      text1: "阿里健康",
      src1:
        "https://gw.alicdn.com/tfs/TB1tikBVAPoK1RjSZKbXXX1IXXa-183-144.png?getAvatar=1",
      text2: "造点新货",
      src2:
        "https://gw.alicdn.com/tfs/TB1xcTYxFT7gK0jSZFpXXaTkpXa-183-144.png?getAvatar=1"
    },
    {
      key: 9,
      text1: "口碑生活",
      src1:
        "https://gw.alicdn.com/tfs/TB1h1MnVCrqK1RjSZK9XXXyypXa-183-144.png?getAvatar=1",
      text2: "土货鲜食",
      src2:
        "https://gw.alicdn.com/tfs/TB11tFkr7L0gK0jSZFxXXXWHVXa-183-144.png?getAvatar=1"
    }
  ];
  private moveWidth = 0;
  mounted() {
    const myMenu: any = document.getElementById('menu')
    myMenu.addEventListener('scroll', (e:object) => {
      this.moveWidth = e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)
    })
  }
}

</script>

<style lang="scss" scoped>
$imgHeight: 48px;
$itemWidth: 61px;
$itemHeight: 67px;
.container {
  .menu {
     background-color: #ffffff;
    height: 156px;
    width: 100%;
    // overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    .menu-item {
      margin-left: 11.5px;
      margin-top: 3px;
      display: inline-flex;
      flex-direction: column;
      .top-item,
      .bottom-item {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        height: $itemHeight;
        width: $itemWidth;
        .img {
          height: $imgHeight;
          width: $itemWidth;
        }
        .text {
          text-align: center;
          font-size: 11px;
          line-height: 15px;
          color: rgb(102, 102, 102);
          margin-top: 4px;
        }
      }
      .bottom-item {
        margin-top: 13px;
      }
    }
  }
}
</style>