exports.config = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: './dist/static',
  routes: {
    '/projects/:slug': {
      type: 'contentFolder',
      // postRenderers: ['toc'],
      slug: {
        folder: './projects',
      },
    },
  }
};
