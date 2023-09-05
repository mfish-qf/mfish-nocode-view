<!--
 @description: 数据库连接
 @author: mfish
 @date: 2023-03-13
 @version: V1.1.0
-->
<template>
  <BasicModal v-bind="$attrs" @register="registerModal" :title="getTitle" @ok="handleSubmit">
    <Tabs tab-position="left" :tabBarStyle="{ width: '20px' }">
      <TabPane key="1">
        <template #tab>
          <span style="writing-mode: vertical-rl"> 基础属性 </span>
        </template>
        <div style="height: 500px; overflow-y: auto; padding-right: 20px">
          <BasicForm @register="registerForm" @submit="handleSubmit" @field-value-change="valueChange" />
        </div>
      </TabPane>
      <TabPane key="2" forceRender>
        <template #tab>
          <span style="writing-mode: vertical-rl"> 连接池配置 </span>
        </template>
        <div style="height: 500px; overflow-y: auto; padding-right: 20px">
          <BasicForm @register="registerHikariForm" v-show="poolType === PoolEnum.Hikari" />
          <BasicForm @register="registerDruidForm" v-show="poolType === PoolEnum.Druid" />
          <div v-show="poolType === PoolEnum.NoPool">未使用连接池</div>
        </div>
      </TabPane>
    </Tabs>
    <template #centerFooter>
      <a-button @click="testConnect" type="primary" danger>测试连接</a-button>
    </template>
  </BasicModal>
</template>
<script lang="ts">
  import { ref, computed, unref, Ref, onBeforeMount } from "vue";
  import { BasicForm, FormSchema, useForm } from "/@/components/general/Form/index";
  import { dbConnectFormSchema } from "./dbConnect.data";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { insertDbConnect, testDbConnect, updateDbConnect } from "/@/api/sys/DbConnect";
  import { Tabs } from "ant-design-vue";
  import { getDictItems } from "/@/api/sys/DictItem";
  import { ComponentType } from "/@/components/general/Form/src/types";
  import { buildSm2Key, sm2Encrypt } from "/@/utils/Cipher";

  export default {
    name: "DbConnectModal",
    components: { BasicModal, BasicForm, Tabs, TabPane: Tabs.TabPane },
    emits: ["success", "register"],
    setup(_, { emit }) {
      const isUpdate = ref(true);
      let poolType = ref("");
      const hikari = ref({});
      const druid = ref({});
      const hikariSchema = ref([]) as Ref<FormSchema[]>;
      const druidSchema = ref([]) as Ref<FormSchema[]>;
      const publicKey =
        "04bca0425cfbd596d83d53be4d5f94128f28a6453a5530ba6daf7b150bb53d36616c9b3841815c5d52d5d7e9f58214548f199ab94ed21fd78d8bf874390546c00e";

      enum PoolEnum {
        NoPool = "db_no_pool",
        Hikari = "db_pool_hikari",
        Druid = "db_pool_druid"
      }

      onBeforeMount(() => {
        getPoolConfig(PoolEnum.Hikari, hikariSchema, hikari.value);
        getPoolConfig(PoolEnum.Druid, druidSchema, druid.value);
      });
      let curPoolConfig;
      const [registerForm, { resetFields, setFieldsValue, validate }] = useForm({
        name: "conn",
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: dbConnectFormSchema,
        showActionButtonGroup: false,
        autoSubmitOnEnter: true
      });
      const [registerHikariForm, { setFieldsValue: setHikariFieldsValue, validate: hikariConfig }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: hikariSchema,
        showActionButtonGroup: false
      });
      const [registerDruidForm, { setFieldsValue: setDruidFieldsValue, validate: druidConfig }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: druidSchema,
        showActionButtonGroup: false
      });
      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields().then();
        setModalProps({ confirmLoading: false, width: "600px" });
        isUpdate.value = !!data?.isUpdate;
        if (unref(isUpdate)) {
          setFieldsValue({
            ...data.record
          }).then();
        } else {
          data.record = { poolType: PoolEnum.Hikari };
        }
        if (data.record?.options) {
          curPoolConfig = JSON.parse(data.record.options);
        }
        valueChange("poolType", data.record.poolType);
        setPoolConfig(data.record?.poolType);
      });
      const getTitle = computed(() => (!unref(isUpdate) ? "新增数据库连接" : "编辑数据库连接"));

      function valueChange(key, value) {
        if (key !== "poolType") {
          return;
        }
        poolType.value = value;
        setPoolConfig(unref(poolType));
      }

      function setPoolConfig(poolType) {
        switch (poolType) {
          case PoolEnum.Hikari:
            if (curPoolConfig && curPoolConfig[PoolEnum.Hikari]) {
              setHikariFieldsValue(curPoolConfig[PoolEnum.Hikari]).then();
            } else {
              setHikariFieldsValue(unref(hikari)).then();
            }
            break;
          case PoolEnum.Druid:
            if (curPoolConfig && curPoolConfig[PoolEnum.Druid]) {
              setDruidFieldsValue(curPoolConfig[PoolEnum.Druid]).then();
            } else {
              setDruidFieldsValue(unref(druid)).then();
            }
            break;
        }
      }

      function getPoolConfig(poolType, schema, value) {
        getDictItems(poolType).then((res) => {
          for (const option of res) {
            const component = ((): ComponentType => {
              switch (option.valueType) {
                case 1:
                  return "InputNumber";
                case 2:
                  return "Checkbox";
                default:
                  return "Input";
              }
            })();
            schema.value.push({
              field: option.dictLabel,
              label: option.dictLabel,
              component: component,
              helpMessage: option.remark,
              disabledLabelWidth: true,
              required: true
            });
            value[option.dictLabel] = option.dictValue;
          }
        });
      }

      async function testConnect() {
        let values = await validate();
        buildSm2Key();
        values.password = sm2Encrypt(values.password, publicKey);
        testDbConnect(values).then();
      }

      async function handleSubmit() {
        let values = await validate();
        switch (values.poolType) {
          case PoolEnum.Hikari:
            const hConfig = await hikariConfig();
            values.options = JSON.stringify({ [PoolEnum.Hikari]: hConfig });
            break;
          case PoolEnum.Druid:
            const dConfig = await druidConfig();
            values.options = JSON.stringify({ [PoolEnum.Druid]: dConfig });
            break;
          default:
            values.options = "";
            break;
        }
        setModalProps({ confirmLoading: true });
        if (unref(isUpdate)) {
          saveDbConnect(updateDbConnect, values);
        } else {
          saveDbConnect(insertDbConnect, values);
        }
      }

      function saveDbConnect(save, values) {
        values.password = sm2Encrypt(values.password, publicKey);
        save(values)
          .then(() => {
            emit("success");
            closeModal();
          })
          .finally(() => {
            setModalProps({ confirmLoading: false });
          });
      }

      return {
        registerHikariForm,
        registerDruidForm,
        registerModal,
        registerForm,
        getTitle,
        handleSubmit,
        valueChange,
        poolType,
        PoolEnum,
        testConnect
      };
    }
  };
</script>