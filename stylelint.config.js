module.exports = {
  root: true,
  plugins: ["stylelint-order"],
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  customSyntax: "postcss-html",
  rules: {
    "function-no-unknown": null,
    "selector-class-pattern": null,
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global"]
      }
    ],
    //禁止使用未知的伪类选择器
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    //禁止使用未知规则
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "function",
          "if",
          "each",
          "include",
          "mixin"
        ]
      }
    ],
    //禁止空来源
    "no-empty-source": null,
    "string-quotes": null,
    //禁止使用无效的命名网格区域
    "named-grid-areas-no-invalid": null,
    //要求或不允许使用Unicode字节顺序标记
    "unicode-bom": "never",
    //禁止较低特异性的选择器在覆盖较高特异性的选择器之后出现
    "no-descending-specificity": null,
    //禁止在字体系列名称列表中缺少通用系列
    "font-family-no-missing-generic-family-keyword": null,
    //在声明的冒号后面需要一个空格或禁止空格
    "declaration-colon-space-after": "always-single-line",
    //在声明的冒号之前需要一个空格或禁止使用空格
    "declaration-colon-space-before": "never",
    //在声明块内要求或不允许尾随分号
    // 'declaration-block-trailing-semicolon': 'always',
    //在规则之前要求或禁止使用空行
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment", "first-nested"]
      }
    ],
    //禁止使用未知单位
    "unit-no-unknown": [true, { ignoreUnits: ["rpx"] }],
    //样式顺序
    "order/order": [
      [
        "dollar-variables",
        "custom-properties",
        "at-rules",
        "declarations",
        {
          type: "at-rule",
          name: "supports"
        },
        {
          type: "at-rule",
          name: "media"
        },
        "rules"
      ],
      { severity: "warning" }
    ]
  },
  //忽略的文件类型
  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.tsx", "**/*.ts"],
  overrides: [
    {
      files: ["*.vue", "**/*.vue", "*.html", "**/*.html"],
      extends: ["stylelint-config-recommended"],
      rules: {
        "keyframes-name-pattern": null,
        "selector-pseudo-class-no-unknown": [
          true,
          {
            ignorePseudoClasses: ["deep", "global"]
          }
        ],
        "selector-pseudo-element-no-unknown": [
          true,
          {
            ignorePseudoElements: ["v-deep", "v-global", "v-slotted"]
          }
        ]
      }
    },
    {
      files: ["*.less", "**/*.less"],
      customSyntax: "postcss-less",
      extends: ["stylelint-config-standard", "stylelint-config-recommended-vue"]
    }
  ]
};
