import { apiResponse, posts } from "../../../lib/siteModel.js";

export const prerender = true;

export function GET() {
  return apiResponse("posts", {
    total: posts.length,
    items: posts
  });
}
