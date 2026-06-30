# Public API

当前 API 是静态 JSON API，适合给前端组件、外部展示页、自动化脚本读取公开博客数据。所有端点都由 `src/lib/siteModel.js` 统一生成，保持页面和 API 数据一致。

## 端点

- `GET /api/v1/stats.json`: 发布统计、图片数量、跳过原因。
- `GET /api/v1/posts.json`: 公开文章列表。
- `GET /api/v1/topics.json`: 主题列表和数量。
- `GET /api/v1/collections.json`: 精选合集入口。
- `GET /api/v1/services.json`: 付费服务入口。
- `GET /api/v1/openapi.json`: OpenAPI 描述。

## 响应格式

```json
{
  "meta": {
    "resource": "stats",
    "version": "v1",
    "generatedAt": "2026-06-30T00:00:00.000Z",
    "source": "ury-blog-static-export"
  },
  "data": {},
  "links": {
    "self": "/api/v1/stats.json",
    "docs": "/api/v1/openapi.json"
  }
}
```

## 开闭原则

- 新增服务：只改 `src/lib/siteModel.js` 的 `services`，首页、课程页和 API 自动更新。
- 新增合集：只改 `collectionDefinitions`，合集卡片和 `/api/v1/collections.json` 自动更新。
- 新增统计项：优先扩展 `getStats()` 和 `getProofItems()`，避免散落到页面。
- 需要动态查询时再新增 `/api/v2`，不要破坏 `/api/v1` 响应结构。
