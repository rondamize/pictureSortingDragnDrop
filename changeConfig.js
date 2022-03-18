// in ./build.js
const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

console.log("CONFIG: " + config);
/**
 * Do not mangle component names in production, for a better learning experience
 * @link https://kentcdodds.com/blog/profile-a-react-app-for-performance#disable-function-name-mangling
 */
config.resolve.fallback = {
    "querystring": require.resolve("querystring-es3"),
    "buffer": require.resolve("buffer/"),
    "timers": require.resolve("timers-browserify")
};