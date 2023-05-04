import { bundle } from "https://deno.land/x/emit/mod.ts"
import * as esbuild from 'https://deno.land/x/esbuild/mod.js'

const es_url = 'https://esm.sh/mqtt'

const es_bundle = await bundle(
  new URL(es_url)
)


const minimal = await esbuild.transform(
  es_bundle.code
, {
    minify: true
  }
)

await Deno.writeTextFile("./dist/mqtt.js", es_bundle.code)
await Deno.writeTextFile("./dist/mqtt.min.js", minimal.code)

esbuild.stop()
