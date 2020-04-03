exports.config = {
  projectRoot: "./src",
  projectName: "portfolio",
  outDir: 'docs',
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
