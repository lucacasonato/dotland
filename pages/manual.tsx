/** @jsx h */
import { h, PageConfig } from "../deps.ts";

export default function Manual() {
  return <div>Manual</div>;
}

export const config: PageConfig = {
  runtimeJS: false,
  routeOverride: "/manual/:path*",
};
