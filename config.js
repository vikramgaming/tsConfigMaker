const { writeTsConfig } = require("tsconfig-maker");

writeTsConfig({
    compilerOptions: {
        strict: true,
        alwaysStrict: true,
        
        baseUrl: "./",
        rootDir: "./src",
        outDir: "./dist",
        
        incremental: true,
        tsBuildInfoFile: "./node_modules/.cache/.tsbuildinfo"
    },
    include: ["src/**/*"],
    exclude: ["node_modules", "dist"]
}, 2, "./");