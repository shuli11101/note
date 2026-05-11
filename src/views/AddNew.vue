<script setup>
import { ref } from 'vue'
import { todoStore } from '@/store/index'
import tabBall from '@/components/tabBall.vue'
import { EditPen } from '@element-plus/icons-vue'

const todo = todoStore()

// 新增表单数据
const formModel = ref({
  name: '',
  time: '',
  detail: '',
  spirit: 5
})

// 情绪颜色
const color = () => {
  if (formModel.spirit.value >= 5) {
    return '#009688'
  } else if (formModel.spirit.value >= 1) {
    return '#FFD700'
  } else {
    return '#FF4545'
  }
}

// 提交表单
const handlesubmit =() => {
  if(!formModel.value.name) {
    ElMessage.error('请输入事件名称')
    return
  }
  if(!formModel.value.time) {
    ElMessage.error('请选择时间')
    return
  }
  if(!formModel.value.detail) {
    formModel.value.detail = '无'
  }
  todo.addTodo(formModel.value)
  ElMessage.success('新增成功')
  console.log(formModel.value)
  handlereset()
}

// 重置表单
const handlereset =() => {
  formModel.value = {
    name: '',
    time: '',
    detail: '',
    spirit: 5
  }
}

</script>

<template>
  <div class="container">
    <div class="header">
      <div class="text">新增代办事项</div>
    </div>
    <tabBall class="tabBall"></tabBall>
    <div class="main">
      <div class="question">
       <div class="input">
         <div class="text">事件名称</div>
         <p>请输入事件的名称</p>
          <el-input class="inp" v-model="formModel.name"></el-input>
       </div>
       <div class="time">
         <div class="text">时间</div>
         <p>请选择这件事的发生时间</p>
         <el-date-picker 
         v-model="formModel.time" 
         placeholder="选择时间"
         arrow-control
         class="time" 
         size="large"
         value-format="YYYY-MM-DD" />
       </div>
        <div class="detail">
          <div class="text">详情</div>
          <p>对于这件事的详细信息</p>
          <el-mention 
          v-model="formModel.detail"
          type="textarea"
          placeholder="请输入详情(可选)"
          rows="10"
          :maxlength="1000"
          show-word-limit>
          </el-mention>
        </div>
        <div class="spirit">
          <div class="text">情绪</div>
          <p>请选择事件的情绪</p>
          <el-rate v-model="formModel.spirit" :color="color" :max="10" show-score clearable class="my-rate"></el-rate>
          <div class="sumbit">
            <el-button type="primary" @click="handlesubmit">提交</el-button>
            <el-button type="info" @click="handlereset">重置</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    height: 100vh;
    flex-direction: column;

    .header {
      display: flex;
      width: 100%; 
      height: 150px;
      flex-shrink: 0;
      background: linear-gradient(90deg, rgb(255, 182, 46), rgb(235, 255, 121));
      justify-content: center;
      align-items: center;

      .text {
        font-size: 30px;
        font-weight: bold;
        color: #fff;
        letter-spacing: 5px;
        animation: fadeIn 1.2s ease-in-out;
      }
    }

    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      background: linear-gradient(135deg, #fafbfc 0%, #f7f9fc 50%, #f2f6fa 100%);
      animation: fadeIn 1.2s ease-in-out;

      .question {
        display: flex;
        flex-direction: column;
        width: 60%;
        height: auto;
        padding: 20px 20px;
        
        .text {
          display: flex;
          justify-content: flex-start;
          margin: 20px 10px;
          font-size: 20px;
          font-weight: bold;
          color: #979797;
          animation: fadeIn 1.2s ease-in-out;
        }

        .input {
          text-align: start;
          background-color: #fff;
          font-size: 20px;
          margin-bottom: 20px;
          padding: 20px 10px;
          padding-bottom: 40px;
          border-radius: 10px;
          border: 0px solid #e4e3e3;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

          .inp {
            width: 500px;
          }
        }

        .time {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          font-size: 20px;
          margin-bottom: 20px;
          border: 0px solid #e4e3e3;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          padding: 20px 10px;
          padding-bottom: 40px;
          border-radius: 10px;
          background-color: #fff;
        }

        .spirit {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 20px 10px;
          background-color: #fff;
          margin: 20px 0px;
          
          .my-rate {
            padding: 0 10px;
            width: 100%;
            margin-bottom: 20px;
          }
          .my-rate :deep(.el-rate__icon) {
            font-size: 20px;  
          }

          .sumbit {
            padding-left: 10px;
            margin-top: 20px;
          }

        }

        .detail {
          border: 0px solid #e4e3e3;
          border-radius: 10px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
          padding: 20px 10px;
          padding-bottom: 40px;
          background-color: #fff;

        }

        p {
            font-size: 15px;
            color: #979797;
            padding-bottom: 10px;
            padding-left: 10px;
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