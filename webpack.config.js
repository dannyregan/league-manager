const webpack = require("webpack")

module.exports = {
    entry: "./src/index.tsx",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            // if the file has a .tsx extention, use ts-loader on it to transform it from typescript into vanilla js
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            HOST: "0.0.0.0",
            PORT: "8080",
        })
    ]
};