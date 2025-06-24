import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("facilities", "routes/facilities/index.tsx"),
  route("facilities/add", "routes/facilities/add.tsx"),
] satisfies RouteConfig;
