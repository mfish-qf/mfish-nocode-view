<!--
 @description: 系统日志
 @author: mfish
 @date: 2023-01-08
 @version: V1.0.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" title="查看系统日志" :showOkBtn="false" cancelText="关闭">
    <Description
      size="middle"
      title="基础信息"
      :bordered="false"
      :data="sysLogData"
      :schema="sysLogSchema"
      :column="2"
    />
    <a-divider />
    <div>请求参数:</div>
    <JsonPreview v-if="reqParam.isJson" :data="reqParam.data" />
    <div v-else>{{ reqParam.data }}</div>
    <a-divider />
    <div>备注:</div>
    <JsonPreview v-if="remark.isJson" :data="remark.data" />
    <div v-else>{{ remark.data }}</div>
  </BasicModal>
</template>
<script lang="ts">
import { ref } from "vue";
import { BasicModal, useModalInner } from "/@/components/general/Modal";
import { Description } from "/@/components/general/Description";
import { Divider as ADivider } from "ant-design-vue";
import { sysLogSchema } from "/@/views/sys/sysLog/sysLog.data";
import { JsonPreview } from "/@/components/general/CodeEditor";

export default {
  name: "SysLogModal",
  components: { BasicModal, Description, ADivider, JsonPreview },
  emits: ["success", "register"],
  setup() {
    let sysLogData = ref();
    let remark = ref({ data: null, isJson: true });
    let reqParam = ref({ data: null, isJson: true });
    const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
      setModalProps({ confirmLoading: false, width: "40%" });
      sysLogData.value = { ...data };
      reqParam.value = paramJson(data.reqParam);
      remark.value = paramJson(data.remark);
    });

    function paramJson(data) {
      if (data === undefined || data === null || data === "") {
        return { data: null, isJson: false };
      }
      try {
        return { data: JSON.parse(data), isJson: true };
      } catch (e) {
        return { data, isJson: false };
      }
    }

    return {
      registerModal,
      closeModal,
      sysLogSchema,
      sysLogData,
      reqParam,
      remark
    };
  }
};
</script>
