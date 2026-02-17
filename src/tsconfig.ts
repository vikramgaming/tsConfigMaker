import { writeFile } from "fs";
import { cwd } from "process";
import type { TSConfig } from "./tsConfigType.ts";

export function tsc(config: TSConfig): void {
    writeFile(cwd() + "/tsconfig.json", JSON.stringify(config, null, 4), (err) => {
        if (err) console.log(err);
    });
}