/** @jsx h */
import { h, PageConfig, PageProps } from "../../deps.ts";

export default function ThirdPartyModule(props: PageProps) {
  return <div>ThirdPartyModule: {JSON.stringify(props.params)}</div>;
}

export const config: PageConfig = {
  runtimeJS: false,
  routeOverride: "/x/:module{@:version}?/:path*",
};
