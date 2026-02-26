#!/usr/bin/env node
import { writeFile, readFile } from "fs/promises";
import { cwd } from "process";
import { join } from "path";

async function init() {
    const config = await readFile(join(__dirname, "../config.js"), "utf-8");
    
    writeFile(join(cwd(), "config.js"), config, "utf-8");
}

init();