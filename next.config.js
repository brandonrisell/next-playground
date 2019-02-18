module.exports = {
  pageExtensions: ["jsx", "js"],
  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID;
    }

    return null;
  }
};
