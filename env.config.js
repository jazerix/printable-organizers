const outputConfig = {
    destPath: "./dist"
};

const entryConfig = [
    "./src/App.ts"
];

const copyPluginPatterns = {
    patterns: [
        { from: "./src/assets/images", to: "images" },
        { from: "./src/assets/fonts", to: "fonts" },
        { from: "./src/assets/vendor", to: "js" },
    ]
};

const devServer = {
    static: outputConfig.destPath
};

module.exports.copyPluginPatterns = copyPluginPatterns;
module.exports.entryConfig = entryConfig;
module.exports.devServer = devServer;
module.exports.outputConfig = outputConfig;