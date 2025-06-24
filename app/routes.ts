import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("new-route", "routes/new-route.tsx"),
] satisfies RouteConfig;
