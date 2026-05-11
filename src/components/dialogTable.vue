<script setup>
  import { defineProps, defineEmits , computed } from 'vue'
  import { Check } from '@element-plus/icons-vue'

  const props = defineProps({
    dialogItem: {
      type: Object,
      default: () => ({})
    },
    visible: {
      type: Boolean
    },
    isEdit: {
      type: Boolean,
      default: true
    }
  })

  const emit = defineEmits(['update:visible'])

  const visible = computed({
    get: () => props.visible,
    set: (val) => emit('update:visible', val)
    })

  // 完成事项
  const handleComplete = () => {
    emit('complete', props.dialogItem)
  }

 

</script>

<template>
  <el-dialog v-model="visible" title="详情">
    <div class="dialog-content">
      <div class="detail-item">
        <div class="label">事项名称</div>
        <div class="name">{{ dialogItem.name }}</div>
      </div>
      <div class="detail-item">
        <div class="label">事项时间</div>
        <div class="time">{{ dialogItem.time }}</div>
      </div>
      <div class="detail-item">
        <div class="label">事项详情</div>
        <div class="detail">{{ dialogItem.detail }}</div>
      </div>
    </div>
    <div v-if="isEdit" class="btn">
      <el-button type="plain" @click="handleComplete" :icon="Check" circle></el-button>
    </div>
  </el-dialog>
</template>

<style lang="scss" scoped>
  .dialog-content {
    padding: 20px;

    .detail-item {
      margin-bottom: 20px;
      position: relative;

      .label {
      font-weight: bold;
      font-size: 20px;
      color: #918e8e;
      margin-bottom: 10px;
    }

      .name {
        font-size: 15px;
        color: #929191;
        padding-left: 15px;
    }

    .time {
      font-size: 15px;
      color: #929191;
      padding-left: 15px;
    }

    .detail {
      border-radius: 5px;
      padding: 10px;
      color: #929191;
      padding-left: 15px;
    }

    }
    
    
  }
  .btn {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  
</style>