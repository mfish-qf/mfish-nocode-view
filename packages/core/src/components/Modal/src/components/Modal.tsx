import { Modal as AModal } from "ant-design-vue";
import { defineComponent, toRefs, unref } from "vue";
import { basicProps } from "../Props";
import { useModalDragMove } from "../hooks/UseModalDrag";
import { useAttrs } from "../../../../hooks/core/UseAttrs";
import { extendSlots } from "../../../../utils/helper/TsxHelper";
import { Recordable } from "@mfish/types";

export default defineComponent({
  name: "Modal",
  inheritAttrs: false,
  props: basicProps as any,
  emits: ["cancel"],
  setup(props: any, { slots, emit }) {
    const { open, draggable, destroyOnClose } = toRefs(props);
    const attrs = useAttrs();
    useModalDragMove({
      open,
      destroyOnClose,
      draggable
    });

    const onCancel = (e: Event) => {
      emit("cancel", e);
    };

    return () => {
      const propsData = { ...unref(attrs), ...props, onCancel } as Recordable;
      return <AModal {...propsData}>{extendSlots(slots)}</AModal>;
    };
  }
});
