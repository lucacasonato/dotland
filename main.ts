#!/usr/bin/env -S deno run --allow-read --allow-net --allow-env --no-check --watch=static
/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
/// <reference lib="deno.unstable" />

import { start } from "./deps.ts";
import routes from "./routes.gen.ts";

await start(routes);
