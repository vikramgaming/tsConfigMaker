const { writeTsConfig } = require("tsconfig-maker");

writeTsConfig({
    compilerOptions: {
        strict: true,
        alwaysStrict: true,
        
    },
    include: [],
    exclude: []
}, 2, "./");