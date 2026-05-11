<script setup>

</script>

<template>
  <div class="ball-container">
    <div class="text">
      分类
    </div>
    <el-button class="ball2">
      <router-link to="/" class="text">
        首页
      </router-link>
    </el-button>
    <el-button plain circle class="ball3">
      <router-link to="/AddNew" class="text">
        新增
      </router-link>
    </el-button>
    <el-button plain circle class="ball4">
      <router-link to="/todoItem" class="text">
        代办
      </router-link>
    </el-button>
  </div>
  
</template>

<style lang="scss" scoped>
  
  .ball-container {
    .ball2, .ball3, .ball4 {
      opacity: 0;
    }
    
      border: 1px solid rgb(255, 255, 255);
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background:linear-gradient(135deg, rgb(99, 203, 255), rgb(255, 255, 255));
        .text {
        font-size: 15px;
        text-align: center;
        line-height: 50px;
        color: #ffffff;
        text-decoration: none;
      }

      .ball2, .ball3, .ball4 {
          border: 1px solid rgb(255, 255, 255);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            background:linear-gradient(135deg, rgb(99, 203, 255), rgb(255, 255, 255));

            .text {
              font-size: 15px;
              text-align: center;
              line-height: 40px;
              color: #ffffff;
            }
            transition: all 0.3s ease-in-out 0.3s;
      }

      &:hover {
          .ball2, .ball3, .ball4 {
            opacity: 1;
            transition: all 0.3s ease-in-out;
          }
        }

        .ball2 {
          position: absolute;
          top: -50px;
          left: 0;
        }

        .ball3 {
          position: absolute;
          top: -20px;
          left: -60px;
        }

        .ball4 {
          position: absolute;
          top: 40px;
          left: -50px;
        }

  }
</style>
