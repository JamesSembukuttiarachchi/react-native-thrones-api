const path = require("path");

module.exports = {
  resolver: {
    extraNodeModules: {
      "missing-asset-registry-path": path.resolve(
        __dirname,
        "path-to-your-asset"
      ),
    },
  },
};
