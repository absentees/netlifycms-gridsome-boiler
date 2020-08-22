// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
          configPath: `static/admin/config.yml`,
          htmlPath: "static/admin/index.html",
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
          typeName: "collectionObject",
          path: "_content/collectionObjects/**/*.md",
          resolveAbsolutePaths: true,
      },
  },
  ]
}
