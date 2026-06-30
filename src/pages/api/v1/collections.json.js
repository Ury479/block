import { apiResponse, getCollections } from "../../../lib/siteModel.js";

export const prerender = true;

export function GET() {
  const collections = getCollections();
  return apiResponse("collections", {
    total: collections.length,
    items: collections
  });
}
