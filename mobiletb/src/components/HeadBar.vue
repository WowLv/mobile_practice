<template>
  <div class="container">
    <div class="nav">
      <a class="search" href="javascript:;">
        <span class="text iconfont icon-search">寻找宝贝店铺</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "HeadBar"
})
export default class HeadBar extends Vue {}
</script>

<style lang="scss" scoped>
.container {
  .nav {
    width: 100%;
    height: 37px;
    padding-right: 42px;
    padding-left: 9px;
    padding-top: 6px;
    padding-bottom: 6px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFbUlEQVRoQ+1YWaiVVRhdi14aH6xooiiiHrIHmweLBiKjknqoLLQiLZuwojIaKFMMIpts8CHTiia1q9VLhRp1o1CELJMSpJGIBmywKKKHWLEO+z/ss93/cM89l5twPvg59+7xW9/8bWI7J27n/KMPYLQ12NdAXwPDlEDPTEjSJAArSP47TJ6GtL0WgKQHAZwHYF8AnwBYQHJpfIukGQCeCGOfAngdwGskPxoSN10srgQg6RUAF2XOnU5yUTEu6VsAByTrvgZwGMl/0v2SxgDYB8De0bczgG+Kj+SPTfCUApA0BcCLJYdsJDnOc5KuBvBUZt0Uki9LMrBjw3dc+N2tAXPfA3gawFsk15WtrwIwG8C9pRvJ1l5JHwI4Olm3EsBvAI4BcEgDZuuWPEryltyiKgA2HZtQjtaSHF8h/TqG1gJYBcBS9vdn2DAWwGklZruM5CXpwXU+kNPCz76A5GCJ9HPMfwbgPQCDAFaS/KMKoaQrADybWXMlyWfi8SZR6DIAJ4cotMkHk9zcUPpbAtNmfBXJL+pUEwWGxwHckKxfT9Jm2aZaALkLJZ3lMAlgp8z8QMYEVpOc0JT54Fs2pXcze84l+WYxXmdC8wDcGScnSScCWA5gv+TwOSRnS7KpnJLMHUXy4x4BuJZkO+pVObFtbSoAo72N5CZJdjI79uEJMw+TnCnpZgCPJHMOxYuHwny0NqeB+0jeU6kBSbb756ODnGBuJflqUK+ZvA7AjgAWkZwu6eDgqPt3yWy87fTwTw6AfXBaKQBJB4ZsmOOjrb7gB44KroGcD8qydjd4qgA4GNgHW5Q1IUlnhwjg35TuIPlAPCjpbgBzozGHTddHppwUPV4wWQUwt3eQZHtvnRM7jN0V6pb4oqkknwuSTxOemZ9knwnzynHIkMnLuJd0agjB6ZLmAAIDLgVmAbBfFGSfGEvy77DGIXJhyKht5v8XAAqOJaVZeRzJjZIcry2tglKtltVTcypsx4nPmvPv8DQQAXAItXkUdCTJDQFAmZ1X2XfVnG285wD2BODSoKAxJLeOAoB3SJ5Rpu5SqUg6CcAHYcF3JNMGJrtXUiMnlnQQgIkknwy+U+bEb5CcOCQAknYA8D4AlxGmAcf/kJkdhTrs3iVFZHqVACRdCuDiEFZ3cZYPWb8MwHKS7S6xUTEnybXPBZGIZ5BcIOl698iJ6LeQ3GsIAG4CMD86Yy7JWRVh9AWSlzfWgCQ360VS8r6tIYT+IGkmADf9MXXE6ToTkmSwP0UHfB5qrfElUWghyWsaAQhPJcsSBheTvCrYaVozFUv3IPlrWFNqQiEAOMw6FMdkEyl6idS35pN00diiqmrULwctJhJq1+OSnMDc/6Y0j+TtVQCCdFPGi3NeCg19Lg/cT9LVQTkASbsD+CXDmF8IzinGJbmhsaTsfCl5v83hhMxcPPQXgIeSBwQ/xbhgywG4kWTxBrWtBkJkiRNWfNmFJFfEA5kMXcNvx7TLj8dCZ+fXjYK+CuV8O5pFc4fGrWmHCUlygni7hIOOBJKAsBk1bRnNnO+wM66PtGlfcTvqED0gyf1IXH956TqSHRpNATiiOLLkaDLJJWXiDU2+yw23mjZBvzz8Hn799wZ/JL8MvnF8/GDlVpWkn1vcW5S9SbXa1piHbZxYkqtPx/ZYomtIOhP3jCT5XehMAGsArI4OPh/AEZmLlpCcnI5XRSFnSDuX3y+nkcy903QNqCw/lBxoU5tQhOZKDSS2vSsAh630faZrxoOJuH9umVINmXH7ip09S41Kibpbup2X5EdfV7l+7C0+C22zS/eiq6s6f1QBdAu8sQn14oKRPqOvgZGWcN35fQ3USWik5/saGGkJ153/H+szF0+o0bl8AAAAAElFTkSuQmCC);
    background-size: 32px 32px;
    background-repeat: no-repeat;
    background-position: 9px center;
    background-color: #ff8d00;
    .search {
      margin-left: 37px;
      height: 25px;
      width: 320px;
      background-color: #ff4e22;
      border-radius: 4px;
      display: block;
      text-align: center;
      .text {
        height: 25px;
        color: #f0e0dc;
        font-size: 13px;
        display: inline-block;
        line-height: 25px;
        &::before {
          font-size: 15px;
          display: inline-block;
          color: rgb(255, 255, 255);
          margin-right: 5px;
        }
      }
    }
  }
}
</style>