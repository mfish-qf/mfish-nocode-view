<template>
  <PageWrapper title="关于">
    <template #headerContent>
      <div class="flex justify-between items-center">
        <span>
          摸鱼低代码平台前端<a :href="GITHUB_URL" target="_blank">{{ name + "-view" }}</a
          >基于Vue3.0、Vite4.0、Ant-Design-Vue、TypeScript，后端<a :href="GITHUB_BACK_URL" target="_blank">{{ name }}</a
          >基于JAVA、Spring Cloud
          Alibaba的后台管理解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例，原则上不会限制任何代码用于商用。
        </span>
      </div>
    </template>
    <Description @register="infoRegister" class="enter-y" />
    <Description @register="register" class="my-4 enter-y" />
    <Description @register="registerDev" class="enter-y" />
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { h } from "vue";
  import { Tag } from "ant-design-vue";
  import { PageWrapper } from "/@/components/general/Page";
  import { Description, DescItem, useDescription } from "/@/components/general/Description/index";
  import { GITHUB_URL, GITHUB_BACK_URL, SITE_URL, DOC_URL } from "/@/settings/SiteSetting";

  const { pkg, lastBuildTime } = __APP_INFO__;

  const { dependencies, devDependencies, name, version } = pkg;

  const schema: DescItem[] = [];
  const devSchema: DescItem[] = [];

  const commonTagRender = (color: string) => (curVal) => h(Tag, { color }, () => curVal);
  const commonLinkRender = (text: string) => (href) => h("a", { href, target: "_blank" }, text);

  const infoSchema: DescItem[] = [
    {
      label: "版本",
      field: "version",
      render: commonTagRender("blue")
    },
    {
      label: "编译时间",
      field: "lastBuildTime",
      render: commonTagRender("blue")
    },
    {
      label: "文档地址",
      field: "doc",
      render: commonLinkRender("文档地址")
    },
    {
      label: "预览地址",
      field: "preview",
      render: commonLinkRender("预览地址")
    },
    {
      label: "前端-Github",
      field: "github",
      render: commonLinkRender(name + "-view")
    },
    {
      label: "后端-Github",
      field: "backGithub",
      render: commonLinkRender(name)
    },
    {
      label: "前端-Gitee",
      field: "gitee",
      render: commonLinkRender(name + "-view")
    },
    {
      label: "后端-Gitee",
      field: "backGitee",
      render: commonLinkRender(name)
    }
  ];

  const infoData = {
    version,
    lastBuildTime,
    doc: DOC_URL,
    preview: SITE_URL,
    github: GITHUB_URL,
    backGithub: GITHUB_BACK_URL,
    gitee: "https://gitee.com/qiufeng9862/mfish-nocode-view",
    backGitee: "https://gitee.com/qiufeng9862/mfish-nocode"
  };

  Object.keys(dependencies).forEach((key) => {
    schema.push({ field: key, label: key });
  });

  Object.keys(devDependencies).forEach((key) => {
    devSchema.push({ field: key, label: key });
  });

  const [register] = useDescription({
    title: "前端生产环境依赖",
    data: dependencies,
    schema: schema,
    column: 3
  });

  const [registerDev] = useDescription({
    title: "前端开发环境依赖",
    data: devDependencies,
    schema: devSchema,
    column: 3
  });

  const [infoRegister] = useDescription({
    title: "项目信息",
    data: infoData,
    schema: infoSchema,
    column: 2
  });
</script>