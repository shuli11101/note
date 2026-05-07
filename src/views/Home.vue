<script setup>
import { ref, watch } from 'vue'
import tabBall from '@/components/tabBall.vue'

// 代办事项
const todoList = ref([
  { name: '踢足球', value: '踢足球' },
  { name: '打篮球', value: '打篮球' },
  { name: '打乒乓球', value: '打乒乓球' },
])

// 搜索框
const searchForm = ref('')

// 搜索日志
const handleSearch = () => {
  console.log(searchForm.value)
}

// 模糊搜索列表
const querySearch = (queryString, cb) => {
  //模糊搜索
  if(!queryString) {
    cb([])
    return
  }
  const results = todoList.value.filter(item => item.name.includes(queryString))
  cb(results)
}
</script>

<template>
  <div class="container">
    <!-- tab栏悬浮球 -->
    <tabBall class="tabBall"></tabBall>
    <!-- 搜索框和查询按钮 -->
    <div class="center-box">
      <div class="text">代办记账本</div>
      <div class="search">
        <el-autocomplete class="searchForm" v-model="searchForm" placeholder="请输入搜索内容" :fetch-suggestions="querySearch"></el-autocomplete>
        <el-button type="primary" class="btn" @click="handleSearch">查询</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    background-color: #ffe4c8;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .tabBall {
      position: fixed;
      right: 110px;
      top: 60px;
    }

    .center-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      transform: translateY(-80px);

      .text {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    .search {
      display: flex;

      :deep(.searchForm) {
        width: 400px;
        height: 50px;
      }

      .btn {
        height: 50px;
        margin-left: 10px;
        border-radius: 5px;
      }
    }

    
    }

    .message {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
  }
</style>