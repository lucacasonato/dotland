/** @jsx h */
import { h, PageConfig, PageProps } from "../deps.ts";

export default function StdModule(props: PageProps) {
  return <div>StdModule: {JSON.stringify(props.params)}</div>;
}

export const config: PageConfig = {
  runtimeJS: false,
  routeOverride: "/std{@:version}?/:path*",
};
