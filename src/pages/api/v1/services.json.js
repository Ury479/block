import { apiResponse, services } from "../../../lib/siteModel.js";

export const prerender = true;

export function GET() {
  return apiResponse("services", {
    total: services.length,
    items: services
  });
}
