/**
 * @type {import('@remix-run/dev').AppConfig}
 */
require("dotenv").config({ path: process.env.ENV_PATH });
const packageJson = require("./package.json");

module.exports = {
  ignoredRouteFiles: [".*"],
  appDirectory: "app",
  assetsBuildDirectory: `${process.env.ASSETS_BUILD_DIRECTORY}/build/${packageJson.name}`,
  publicPath: `${process.env.PUBLIC_PATH}/${packageJson.name}/`
};
