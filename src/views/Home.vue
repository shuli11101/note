<script setup>
import { ref, onMounted } from 'vue'
import tabBall from '@/components/tabBall.vue'
import { todoStore } from '@/store/index'
import dialogTable from '@/components/dialogTable.vue'

// 代办事项
const todoList = ref([])
const useTodoStore = todoStore()
onMounted(() => {
  useTodoStore.getTodoList()
  todoList.value = useTodoStore.todoList
  console.log(todoList.value)
})

//模糊搜索事项
const searchList = ref([])

// 搜索框
const searchForm = ref('')

// 搜索日志
const handleSearch = () => {
  drawerVisible.value = true  
  querySearch(searchForm.value, (results) => {
    console.log(results)
  })
}

// 模糊搜索列表
const querySearch = (queryString, cb) => {
  const results = todoList.value.filter(item => item.name.includes(queryString)) || []
  searchList.value = results
  cb(results.map(item => ({ value: item.name, item })))
}

// 底部抽屉
const drawerVisible = ref(false)

// 卡片详情
const dialogVisible = ref(false)
const dialogItem = ref({})
const detailCard = (item) => {
  dialogItem.value = item
  dialogVisible.value = true
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
        <el-autocomplete 
        class="searchForm" 
        v-model="searchForm" 
        placeholder="请输入搜索内容" 
        clearable 
        :fetch-suggestions="querySearch"
        @select="handleSearch" />
        <el-button type="primary" class="btn" @click="handleSearch">查询</el-button>
      </div>
    </div>
    <div class="drawer">
      <el-drawer v-model="drawerVisible" direction="btt" size="500px" resizable>
        <div class="card-list">
          <el-card shadow="hover" v-for="item in searchList" :key="item.name" class="card" @click="detailCard(item)">
            <div class="card-container">
              <div class="title">{{ item.name }}</div>
              <div class="time">{{ item.time }}</div>
              <div class="detail">{{ item.detail }}</div>
            </div>
          </el-card>
        </div>
      </el-drawer>
    </div>
  </div>
  <!-- 详情弹窗 -->
  <dialogTable :isEdit="false" v-model:visible="dialogVisible" :dialogItem="dialogItem"></dialogTable>
</template>

<style lang="scss" scoped>
  .container {
    height: 100vh;
    background-color: #faead9;
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
      animation: fadeIn 1.2s ease-in-out;

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

    .drawer {
      .card-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .card {
          width: 200px;
          height: 266.67px;
          margin-right: 50px;
          margin-top: 20px;

          .card-container {
            padding: 10px;

            .title {
              font-size: 18px;
              font-weight: bold;
              margin-bottom: 10px;
            }

            .time {
              font-size: 15px;
              color: rgb(115, 115, 115);
              margin-bottom: 10px;
            }

            .detail {
              display: -webkit-box;
              -webkit-line-clamp: 5;
              -webkit-box-orient: vertical;
              font-size: 10px;
              letter-spacing: 1px;
              overflow: hidden;
              text-overflow: ellipsis;
            }

          }


        }
      }
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