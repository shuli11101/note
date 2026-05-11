<script setup>
import { todoStore } from '@/store/index'
import { ref, onMounted } from 'vue'
import dialogTable from '@/components/dialogTable.vue'
import tabBall from '@/components/tabBall.vue'

const todo = todoStore()

// 代办事件
const todoList = ref([])

onMounted(() => {
  todo.getTodoList()
  todoList.value = todo.todoList
})

// 卡片详情
const dialogVisible = ref(false)
const dialogItem = ref({})
const detailCard = (item) => {
  dialogItem.value = item
  dialogVisible.value = true
}

// 完成事项
const handleComplete = (item) => {
  todo.deleteTodo(item)
  dialogVisible.value = false
  todoList.value = todo.todoList
}

</script>

<template>
  <div class="container">
    <tabBall class="tabBall"></tabBall>
    <div class="header">
      <div class="text">代办事项</div>
    </div>
    <div class="main">
      <el-card class="card" shadow="hover" v-for="item in todoList" :key="item.name" @click="detailCard(item)">
        <div class="card-container">
          <div class="title">{{ item.name }}</div>
          <div class="time">{{  item.time }}</div>
          <div class="detail">{{ item.detail }}</div>
        </div>
      </el-card>
    </div>
    <!-- 详情弹窗 -->
    <dialogTable :isEdit="true" v-model:visible="dialogVisible" :dialogItem="dialogItem" @complete="handleComplete"></dialogTable>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: url('../assets/background.webp') ;
    background-size: cover;
    background-position: center;

    .header {
      height: 100px;

      .text {
        font-size: 40px;
        font-weight: bold;
        color: #918e8e;
        line-height: 100px;
        padding-left: 40px;
        animation: fadeIn 1.2s ease-in-out;
      }
    }

    .main {
      display: flex;
      flex-wrap: wrap;

      .card {
        width: 22%;
        height: 200px;
        margin: 20px;
        border: 1px solid #f3f3f3;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        background-color: #ffffff;
        animation: fadeIn 1.2s ease-in-out;

        &:hover {
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.144);
        }

        .title {
          font-size: 25px;
          font-weight: bold;
          color: #918e8e;
          line-height: 40px;
          padding-left: 10px;
        }

        .time {
          font-size: 10px;
          color: #918e8e;
          line-height: 40px;
          padding-left: 10px;
        }

        .detail {
          display: -webkit-box;
          font-size: 10px;
          color: #918e8e;
          line-height: 20px;
          padding-left: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }
    }

     .tabBall {
      position: fixed;
      right: 110px;
      top: 60px;
    }

  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

</style>
