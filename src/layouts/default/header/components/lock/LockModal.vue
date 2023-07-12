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
<script lang="ts">
  import { defineComponent, computed, ref, onBeforeMount } from "vue";
  import { useI18n } from "/@/hooks/web/UseI18n";
  import { useDesign } from "/@/hooks/web/UseDesign";
  import { BasicModal, useModalInner } from "/@/components/general/Modal";
  import { BasicForm, useForm } from "/@/components/general/Form/index";
  import { useUserStore } from "/@/store/modules/User";
  import { useLockStore } from "/@/store/modules/Lock";
  import { setHeaderImg } from "/@/utils/FileUtils";

  export default defineComponent({
    name: "LockModal",
    components: { BasicModal, BasicForm },

    setup() {
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

      return {
        t,
        prefixCls,
        getRealName,
        register,
        registerForm,
        handleLock,
        avatar
      };
    }
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
