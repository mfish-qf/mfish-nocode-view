import { FormSchema } from "/@/components/general/Form";

export const formSchema: FormSchema[] = [
  {
    field: "userId",
    label: "用户ID",
    component: "Input",
    show: false
  },
  {
    field: "oldPwd",
    label: "当前密码",
    component: "InputPassword",
    required: true
  },
  {
    field: "newPwd",
    label: "新密码",
    component: "StrengthMeter",
    componentProps: {
      placeholder: "新密码"
    },
    rules: [
      {
        required: true,
        message: "请输入新密码"
      }
    ]
  },
  {
    field: "confirmPwd",
    label: "确认密码",
    component: "InputPassword",
    dynamicRules: ({ values }) => {
      return [
        {
          required: true,
          validator: (_, value) => {
            if (!value) {
              return Promise.reject("密码不能为空");
            }
            if (value !== values.newPwd) {
              return Promise.reject("两次输入的密码不一致!");
            }
            return Promise.resolve();
          }
        }
      ];
    }
  }
];
