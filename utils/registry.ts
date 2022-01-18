const S3_BUCKET =
  "http://deno-registry2-prod-storagebucket-b3a31d16.s3-website-us-east-1.amazonaws.com/";

export interface ModuleVersionList {
  latest: string;
  versions: string[];
}

export interface ModuleMetadata {
  name: string;
  description: string;
  starCount: number;
}

export interface ModuleVersionMetadata {
  version: string;
  uploadedAt: Date;
  directoryListing: DirListing[];
  uploadOptions: UploadOptions;
}

export interface UploadOptions {
  type: "github";
  repository: string;
  subdir?: string;
  ref: string;
}

export interface DirListing {
  path: string;
  type: "dir" | "file";
  size?: number;
}

export interface ModuleVersionRawFile {
  data: ReadableStream<Uint8Array>;
  size: number;
  contentType: string;
  etag: string;
}

export class Registry {
  constructor() {}

  async getModuleMeta(module: string): Promise<ModuleMetadata | null> {
    module = encodeURIComponent(module);
    const url = `https://api.deno.land/modules/${module}`;
    const resp = await fetch(url);
    if (resp.status === 404) {
      return null;
    }
    if (resp.status !== 200) {
      const text = await resp.text();
      throw new Error(
        `Failed to get module versions (${resp.status}): ${text}`,
      );
    }
    const json = await resp.json();
    const data = json.data;
    return {
      name: data.name,
      description: data.description,
      starCount: data.star_count,
    };
  }

  async getModuleVersions(module: string): Promise<ModuleVersionList | null> {
    module = encodeURIComponent(module);
    const url = `${S3_BUCKET}${module}/meta/versions.json`;
    const resp = await fetch(url);
    if (resp.status === 403 || resp.status === 404) {
      return null;
    }
    if (resp.status !== 200) {
      const text = await resp.text();
      throw new Error(
        `Failed to get module versions (${resp.status}): ${text}`,
      );
    }
    const json = await resp.json();
    return {
      latest: json.latest,
      versions: json.versions,
    };
  }

  async getModuleVersionMeta(
    module: string,
    version: string,
  ): Promise<ModuleVersionMetadata | null> {
    module = encodeURIComponent(module);
    version = encodeURIComponent(version);
    const url = `${S3_BUCKET}${module}/versions/${version}/meta/meta.json`;
    const resp = await fetch(url);
    if (resp.status === 403 || resp.status === 404) {
      return null;
    }
    if (resp.status !== 200) {
      const text = await resp.text();
      throw new Error(
        `Failed to get module version metadata (${resp.status}): ${text}`,
      );
    }
    const json = await resp.json();
    return {
      version: decodeURIComponent(version),
      uploadedAt: new Date(json.uploaded_at),
      directoryListing: json.directory_listing,
      uploadOptions: json.upload_options,
    };
  }

  async getModuleVersionRawFile(
    module: string,
    version: string,
    path: string,
  ): Promise<ModuleVersionRawFile | null> {
    module = encodeURIComponent(module);
    version = encodeURIComponent(version);
    const url = `${S3_BUCKET}${module}/versions/${version}/raw/${path}`;
    const resp = await fetch(url);
    if (resp.status === 403 || resp.status === 404) {
      return null;
    }
    if (resp.status !== 200) {
      const text = await resp.text();
      throw new Error(
        `Failed to get module version raw file (${resp.status}): ${text}`,
      );
    }

    const contentLength = resp.headers.get("Content-Length");
    if (contentLength === null) {
      throw new Error("Missing Content-Length header");
    }
    const size = parseInt(contentLength, 10);
    const contentType = resp.headers.get("Content-Type");
    if (contentType === null) {
      throw new Error("Missing Content-Type header");
    }
    const etag = resp.headers.get("ETag");
    if (etag === null) {
      throw new Error("Missing ETag header");
    }
    if (resp.body === null) {
      throw new Error("Missing body");
    }

    return {
      data: resp.body,
      size,
      contentType,
      etag,
    };
  }
}

export const registry = new Registry();
