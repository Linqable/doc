module.exports = {
    entry: "./src/index.tsx",
    mode: "production",
    output: {
        filename: "app.js",
        path: __dirname + "/public"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".css"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        '@babel/plugin-syntax-typescript',
                        '@babel/plugin-syntax-jsx',
                        'react-hot-loader/babel',
                    ]
                },
            },
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            { test: /\.css$/, include: /node_modules/, loader: 'style-loader!css-loader' },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    devServer: {
        contentBase: './public'
    }
};