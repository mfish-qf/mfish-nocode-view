<template>
  <PageWrapper title="关于" class="m-4">
    <template #headerContent>
      <div>
        摸鱼低代码平台前端<a :href="GITHUB_URL" target="_blank">{{ `${name}-view` }}</a>
        基于Vue3.x、Vite6.x、Ant-Design-Vue4.x、TypeScript。
      </div>
      <div>
        后端<a :href="GITHUB_BACK_URL" target="_blank">{{ name }}</a>
        基于SpringBoot3, Spring Cloud Alibaba，实现微服务、单体服务一体化架构的后台管理解决方案。
      </div>
      <div>
        一套代码两种架构，目标是为小中大型项目开发提供现成的开箱解决方案及丰富的示例，原则上不会限制任何代码用于商用。
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
  import { PageWrapper } from "@/components/general/Page";
  import { Description, DescItem, useDescription } from "@mfish/core/src/components/Description";
  import { GITHUB_URL, GITHUB_BACK_URL, SITE_URL, DOC_URL } from "@mfish/core/src/settings/SiteSetting";
  defineOptions({ name: "AboutInfo" });

  // eslint-disable-next-line no-undef
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
      render: commonLinkRender(`${name}-view`)
    },
    {
      label: "后端-Github",
      field: "backGithub",
      render: commonLinkRender(name)
    },
    {
      label: "前端-Gitee",
      field: "gitee",
      render: commonLinkRender(`${name}-view`)
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
    schema,
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
