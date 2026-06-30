import posts from "../data/posts.json";
import topics from "../data/topics.json";
import manifest from "../data/sync-manifest.json";

export const services = [
  {
    id: "ai-coding-coaching",
    title: "AI 编程陪跑",
    price: "从 499 起",
    fit: "适合：想少走弯路的学习者",
    desc: "从需求拆解、提示词、代码审查到部署上线，陪你把项目真实做出来。",
    points: ["1 次项目诊断", "3 次异步反馈", "交付路线图"]
  },
  {
    id: "project-retrospective",
    title: "项目复盘诊断",
    price: "从 299 起",
    fit: "适合：已有项目但推进慢",
    desc: "基于你的项目文档和卡点，拆出架构、交付、效率和商业化问题。",
    points: ["问题清单", "优先级排序", "改进方案"]
  },
  {
    id: "obsidian-publishing-system",
    title: "Obsidian 知识库搭建",
    price: "从 399 起",
    fit: "适合：想建立个人知识资产",
    desc: "帮你把笔记、图片、发布流和博客站点连成可持续系统。",
    points: ["目录治理", "同步脚本", "上线配置"]
  }
];

export const collectionDefinitions = [
  {
    id: "success-diary",
    name: "成功日记",
    sourceNeedle: "成功日记",
    desc: "复盘、阶段目标、行动反馈，适合看见一个人如何把想法推进成结果。",
    href: "/archive/?q=成功日记"
  },
  {
    id: "programming",
    name: "计算机编程",
    sourceNeedle: "计算机编程",
    desc: "AI、前端、后端、DevOps、项目排错，沉淀成可检索的工程知识库。",
    href: "/archive/?q=计算机编程"
  },
  {
    id: "hengyang-notes",
    name: "恒洋听课笔记",
    sourceNeedle: "恒洋听课笔记",
    desc: "课程笔记和商业认知，适合快速了解学习路线与关键框架。",
    href: "/archive/?q=恒洋听课笔记"
  }
];

export const contentTypes = [
  {
    type: "文稿",
    desc: "长文、教程、复盘"
  },
  {
    type: "手记",
    desc: "近况、日报、现场记录"
  },
  {
    type: "思考",
    desc: "灵感、判断、问题意识"
  }
];

export function getRecentPosts(limit = 5) {
  return posts.slice(0, limit);
}

export function getTypeCounts() {
  return contentTypes.map((item) => ({
    ...item,
    count: posts.filter((post) => post.type === item.type).length,
    href: `/archive/?type=${encodeURIComponent(item.type)}`
  }));
}

export function getCollections() {
  return collectionDefinitions.map((item) => ({
    ...item,
    count: posts.filter((post) => post.sourceFolder?.includes(item.sourceNeedle)).length
  }));
}

export function getStats() {
  return {
    posts: posts.length,
    topics: topics.length,
    images: manifest.uploadedImages || 0,
    skipped: manifest.skipped || 0,
    generatedAt: manifest.generatedAt || null,
    skippedReasons: manifest.skippedReasons || {}
  };
}

export function getProofItems() {
  const stats = getStats();
  return [
    { value: stats.posts, label: "篇公开笔记" },
    { value: stats.topics, label: "个知识主题" },
    { value: stats.images, label: "张图文资产" }
  ];
}

export function getApiMeta(resource) {
  return {
    resource,
    version: "v1",
    generatedAt: new Date().toISOString(),
    source: "ury-blog-static-export"
  };
}

export function apiResponse(resource, data) {
  return Response.json({
    meta: getApiMeta(resource),
    data,
    links: {
      self: `/api/v1/${resource}.json`,
      docs: "/api/v1/openapi.json"
    }
  });
}

export { posts, topics, manifest };
