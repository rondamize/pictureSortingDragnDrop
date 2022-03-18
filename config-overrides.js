module.exports = function override(config, env) {
    config.resolve.fallback = {
        "querystring": require.resolve("querystring-es3"),
        "buffer": require.resolve("buffer/"),
        "timers": require.resolve("timers-browserify")
    };
    return config;
}