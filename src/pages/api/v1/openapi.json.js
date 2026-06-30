export const prerender = true;

export function GET() {
  return Response.json({
    openapi: "3.1.0",
    info: {
      title: "Ury Blog Public API",
      version: "1.0.0",
      description: "Static JSON API for public posts, topics, collections, services, and publishing stats."
    },
    paths: {
      "/api/v1/posts.json": {
        get: {
          summary: "List public posts",
          responses: {
            "200": { description: "Public post collection" }
          }
        }
      },
      "/api/v1/topics.json": {
        get: {
          summary: "List topic counts",
          responses: {
            "200": { description: "Topic collection" }
          }
        }
      },
      "/api/v1/collections.json": {
        get: {
          summary: "List curated source collections",
          responses: {
            "200": { description: "Collection list" }
          }
        }
      },
      "/api/v1/services.json": {
        get: {
          summary: "List paid service offers",
          responses: {
            "200": { description: "Service offer list" }
          }
        }
      },
      "/api/v1/stats.json": {
        get: {
          summary: "Get publishing stats",
          responses: {
            "200": { description: "Publishing statistics" }
          }
        }
      }
    }
  });
}
