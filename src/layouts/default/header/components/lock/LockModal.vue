<template>
  <BasicModal
    :footer="null"
    :title="t('layout.header.lockScreen')"
    v-bind="$attrs"
    :class="prefixCls"
    @register="register"
  >
    <div :class="`${prefixCls}__entry`">
      <div :class="`${prefixCls}__header`">
        <img :src="avatar" :class="`${prefixCls}__header-img`" alt="head" />
        <p :class="`${prefixCls}__header-name`">
          {{ getRealName }}
        </p>
      </div>

      <BasicForm @register="registerForm" />

      <div :class="`${prefixCls}__footer`">
        <a-button type="primary" block class="mt-2" @click="handleLock">
          {{ t("layout.header.lockScreenBtn") }}
        </a-button>
      </div>
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { computed, onBeforeMount, ref } from "vue";
  import { useDesign, useI18n } from "@mfish/core/hooks";
  import { BasicModal, useModalInner } from "@mfish/core/components/Modal";
  import { BasicForm, useForm } from "@mfish/core/components/Form";
  import { useUserStore } from "@mfish/stores/modules";
  import { useLockStore } from "@/stores/Lock.ts";
  import { setHeaderImg } from "@mfish/core/utils/file/FileUtils";

  defineOptions({ name: "LockModal" });

  const { t } = useI18n();
  const { prefixCls } = useDesign("header-lock-modal");
  const userStore = useUserStore();
  const lockStore = useLockStore();
  const getRealName = computed(() => userStore.getUserInfo?.nickname);
  const [register, { closeModal }] = useModalInner();

  const [registerForm, { validateFields, resetFields }] = useForm({
    showActionButtonGroup: false,
    schemas: [
      {
        field: "password",
        label: t("layout.header.lockScreenPassword"),
        colProps: {
          span: 24
        },
        component: "InputPassword",
        required: true
      }
    ]
  });

  async function handleLock() {
    const values = (await validateFields()) as any;
    const password: string | undefined = values.password;
    closeModal();

    lockStore.setLockInfo({
      isLock: true,
      pwd: password
    });
    await resetFields();
  }

  const avatar = ref("");
  onBeforeMount(() => {
    const imgUrl = userStore.getUserInfo?.headImgUrl;
    setHeaderImg(imgUrl, avatar);
  });
</script>
<style lang="less">
  @prefix-cls: ~"@{namespace}-header-lock-modal";

  .@{prefix-cls} {
    &__entry {
      position: relative;
      //height: 240px;
      padding: 130px 30px 30px;
      border-radius: 10px;
    }

    &__header {
      position: absolute;
      top: 0;
      left: calc(50% - 45px);
      width: auto;
      text-align: center;

      &-img {
        width: 70px;
        border-radius: 50%;
      }

      &-name {
        margin-top: 5px;
      }
    }

    &__footer {
      text-align: center;
    }
  }
</style>
