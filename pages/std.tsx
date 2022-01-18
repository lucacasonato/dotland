/** @jsx h */
import { h, Head, JSX, PageConfig, PageProps, useData } from "../deps.ts";
import {
  ModuleMetadata,
  ModuleVersionList,
  ModuleVersionMetadata,
  registry,
} from "../utils/registry.ts";

export default function StdModule(props: PageProps) {
  const { module, versions, version, file } = useData("", () =>
    fetcher(
      "std",
      props.params.version as string,
      props.params.path as string,
    ));
  if (module === null || versions === null) {
    return <div>Module not found</div>;
  }
  if (version === null) {
    return <div>Version not found</div>;
  }
  return (
    <div>
      <Head>
        <script type="module" src="/webcomponents.js"></script>
      </Head>
      <ModuleInfo
        module={module}
        versions={versions}
        version={version}
        path={props.params.path as string}
      />
    </div>
  );
}

function ModuleInfo(
  props: {
    module: ModuleMetadata;
    versions: ModuleVersionList;
    version: ModuleVersionMetadata;
    path: string;
  },
) {
  const { module, versions, version, path } = props;
  return (
    <div>
      <h1>{module.name}</h1>
      <p>{module.description}</p>
      <p>{module.starCount} stars</p>

      <p>Version: {version.version}</p>
      <p>Uploaded at: {version.uploadedAt.toLocaleString()}</p>

      {version.version !== versions.latest && (
        <p>
          <a href={`/std@${versions.latest}/${path}`}>Go to latest version</a>
        </p>
      )}

      <deno-version-selector>
        {versions.versions.map((v) => (
          <a
            value={v}
            selected={v === version.version}
            href={`/std@${v}/${path}`}
          >
            {v}
          </a>
        ))}
      </deno-version-selector>
    </div>
  );
}

interface IntrinsicElements {
  "deno-version-selector": HTMLElement;
}

async function fetcher(module: string, version: string, path: string) {
  const modulePromise = registry.getModuleMeta(module);
  const versionsPromise = registry.getModuleVersions(module);
  if (version == "") {
    const versions = await versionsPromise;
    if (versions === null) {
      return { module: null, versions: null, version: null, file: null };
    }
    version = versions.latest;
  }
  const [moduleMeta, versions, versionMeta, file] = await Promise.all([
    modulePromise,
    versionsPromise,
    registry.getModuleVersionMeta(module, version),
    registry.getModuleVersionRawFile(module, version, path),
  ]);
  return { module: moduleMeta, versions, version: versionMeta, file };
}

export const config: PageConfig = {
  runtimeJS: false,
  routeOverride: "/std{@:version}?/:path*",
};
