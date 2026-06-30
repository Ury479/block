import { apiResponse, getStats } from "../../../lib/siteModel.js";

export const prerender = true;

export function GET() {
  return apiResponse("stats", getStats());
}
