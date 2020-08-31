<template>
  <div class="container">
    <div class="all-step" id="all-step">
      <div class="curr-step" id="curr-step" ref="currSteps"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  name: "StepBar"
})
export default class StepBar extends Vue {
  @Prop({ default: 0 }) readonly moveWidth!: number; //滑动菜单栏的百分比
  @Watch("moveWidth")
  widthChange(newVal: number) {
    //计算出相同比例的位移
    const allStep: any = document.getElementById("all-step");
    const currStep: any = document.getElementById("curr-step");
    const allStepWidth: number = parseInt(
      window.getComputedStyle(allStep, null).width.replace("px", "")
    );
    const currStepWidth: number = parseInt(
      window.getComputedStyle(currStep, null).width.replace("px", "")
    );
    (this.$refs.currSteps as HTMLDivElement).style.left =
      newVal * (allStepWidth - currStepWidth) + "px";
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: #ffffff;
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .all-step {
    position: relative;
    width: 50px;
    height: 3px;
    border-radius: 4px;
    background-color: rgb(212, 216, 222);
    .curr-step {
      position: absolute;
      left: 0;
      width: 20px;
      height: 3px;
      border-radius: 4px;
      background-color: rgb(255, 109, 42);
    }
  }
}
</style>