<template>
  <div class="layout-wrapper">
    <header>
      <!-- <HeaderA /> -->
    </header>
    <div class="container">
      <div class="menu">
        <SideMeun />
      </div>
      <div class="main">
        <div class="page-nav">
          <HeaderA />
          <!-- <NavTag /> -->
        </div>
        <div class="layout-page-wrapper">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMeun from './SideMeun';
import HeaderA from './HeaderA';
// import NavTag from './NavTag';

export default {
  name: 'layout-wrapper',
  components: {
    SideMeun,
    // NavTag,
    HeaderA,
  },
};
</script>

<style lang="less" scoped>
.layout-wrapper {
  header {
    height: 20px;
    line-height: 20px;
  }
  .container {
    height: calc(100vh - 20px);
    display: flex;

    & > div {
      height: 100%;
    }
    .menu {
      padding-bottom: 20px;
      background-color: #f0f2f5;
    }

    & > .main {
      flex: 1;
      overflow: hidden;
      .page-nav {
        height: 40px;
      }
      .layout-page-wrapper {
        height: calc(100% - 40px);
        background-color: #f0f2f5;
        padding: 10px;
      }
    }
  }
}
</style>
