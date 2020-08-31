<template>
  <div class="container">
    <!-- 导航栏 -->
    <head-bar class="header"></head-bar>
    <div class="main">
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
      <!-- 导航栏 -->
      <div class="recommend-box">
        <recommend class="recommend"></recommend>
      </div>
      <!-- 推荐列表 -->
      <div class="showList">
        <div class="division">
          <img src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png" />
        </div>
        <div class="showItem" v-for="(item, index) in itemList" :key="index">
          <a href="javascript:;" class="item-img">
            <img :src="item.src" />
          </a>
          <a href="javascript:;" class="item-desc">
            <div class="item-title">
              <span class="item-title-p">{{item.title}}</span>
            </div>
            <div class="item-priceBox">
              <span class="item-price-sign">￥</span>
              <span class="item-price-price">{{item.price}}</span>
              <span class="item-price-payed">{{item.payed}}人已购买</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <nav-bar class="footer"></nav-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeadBar from "@/components/HeadBar.vue";
import MenuBar from "@/components/MenuBar.vue";
import NavBar from "@/components/NavBar.vue";
import Recommend from "@/components/Recommend.vue";
// interface imgSrc {
//     key: number,
//     src: string
// }
@Component({
  components: {
    HeadBar,
    MenuBar,
    Recommend,
    NavBar
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
  private itemList: object[] = [
    { title: "肥龙搪瓷珐琅宝宝辅食漏嘴单把柄奶锅雪平锅煮泡面锅电磁炉燃气用", src: "//gw.alicdn.com/bao/uploaded/i1/43623533/O1CN01T3gyDU1by9rYloaFZ_!!43623533.png_500x500q90.jpg_.webp", price: 50, payed: 63,},
    { title: "富尔兴304不锈钢盆小汤盆洗菜盆加厚多用料理盆18-32cm厨房食物盆", src: "//gw.alicdn.com/bao/uploaded/i3/826467565/O1CN01m9QXZv25kooyEkoAz_!!0-item_pic.jpg_500x500q90.jpg_.webp", price: 13.41, payed: 30,},
    { title: "乐扣乐扣304不锈钢碗进口儿童餐具水杯碗筷勺套装宝宝塑料辅食碗", src: "//gw.alicdn.com/bao/uploaded/i1/2126967943/O1CN01jvLsog28XwVg2GUP3_!!0-item_pic.jpg_500x500q90.jpg_.webp", price: 46, payed: 32,},
    { title: "特价复古木质首饰盒仿古印花木制三层带镜古典中式装饰梳妆化妆盒", src: "//gw.alicdn.com/bao/uploaded/i4/280940749/O1CN01QlZyHF1HP5CmAD92e_!!280940749.jpg_500x500q90.jpg_.webp", price: 33.8, payed: 18,},
    { title: "日本进口可微波日式马克杯创意简约塑料咖啡杯男女学生情侣水杯", src: "//gw.alicdn.com/bao/uploaded/i1/2106957411/O1CN01k37yY524cHjNckJ9q_!!2106957411.jpg_500x500q90.jpg_.webp", price: 12, payed: 76,},
    { title: "厨房置物架门型波浪微波炉置物架 厨房用品多功能收纳架", src: "//gw.alicdn.com/bao/uploaded/i2/TB1B3oYFVXXXXXNaXXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp", price: 15.12, payed: 17,}
  ];
}
</script>

<style lang="scss" scoped>
.container {
  // position: relative;
  background-color: #f6f6f6;
  .header {
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .footer {
    position: fixed;
    bottom: 0;
    z-index: 1000;
  }
  .main {
    // position: absolute;
    // left: 0;
    // top: 37px;
    margin-top: 37px;
    margin-bottom: 45px;
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
    .showList {
      padding: 0 7.5px;
      display: flex;
      box-sizing: border-box;
      text-align: center;
      flex-wrap: wrap;
      place-content: flex-start space-between;
      flex-shrink: 0;
      padding-bottom: 12px;
      .division {
        overflow: hidden;
        display: block;
        padding: 12px;
        width: 100%;
        img {
          width: 161px;
          height: 19px;
        }
      }
      .showItem {
        height: 260px;
        width: 171px;
        margin-top: 9px;
        margin-left: 4.5px;
        margin-right: 4.5px;
        border-radius: 6px;
        background-color: #ffffff;
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        .item-img {
          img {
            height: 171px;
            width: 171px;
          }
        }
        .item-desc {
          padding-left: 10px;
          padding-right: 9px;
          height: 94px;
          text-decoration: none;
          .item-title {
            margin-top: 11.5px;
            height: 37px;
            position: relative;
            overflow: hidden;
            line-height: 18.5px;
            text-overflow: ellipsis;
            .item-title-p {
              font-size: 13px;
              color: #333333;
            }
          }
          .item-priceBox {
            display: flex;
            align-items: center;
            // flex-direction: row;
            margin-top: 11px;
            height: 20px;
            line-height: 20px;
            .item-price-sign {
              margin-left: 1px;
              color: #ff5500;
              font-size: 11px;
            }
            .item-price-price {
              margin-left: 5px;
              font-size: 14px;
              line-height: 16px;
              color: #ff5500;
            }
            .item-price-payed {
              margin-left: 4px;
                font-size: 11px;
                color: #999999;
                margin-top: 2px;
            }
          }
        }
      }
    }
  }
}
</style>
