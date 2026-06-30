import { apiResponse, topics } from "../../../lib/siteModel.js";

export const prerender = true;

export function GET() {
  return apiResponse("topics", {
    total: topics.length,
    items: topics
  });
}
