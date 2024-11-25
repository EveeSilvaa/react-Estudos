const HtmlWebPackPlugin = require("html-webpack-plugin");
const { Resolver } = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",
    module: {
        rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use: { loader: "babel-loader"}
            },
            {
                test: /\.html$/,
                use: [{ loader: "html-loader"}]
             },
             {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
             },
             {
                test: /\.(png|jpe?g|gif)$/i,
                use: ["file-loader"]
             },
        ]
    },
    Resolver: {
        extensions: [".js", ".jsx"],
    },
    Plugins: [
        new HtmlWebPackPlugin ({
            template: "./public/index.html",
        }),
    ],
};