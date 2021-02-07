const { override, addBabelPlugins } = require('customize-cra');

module.exports = override(
  ...addBabelPlugins([
    'babel-plugin-root-import',
		{
			"paths": [
				{
					"rootPathSuffix": "./src",
					"rootPathPrefix": "~/",
				},
				{
					"rootPathSuffix": "./src/components",
					"rootPathPrefix": "@/",
				},
				{
					"rootPathSuffix": "./src/utils",
					"rootPathPrefix": "!/",
				}
			],
		}
  ],
		[
			"babel-plugin-styled-components",
			{
				"ssr": true,
				"displayName": true,
			}
		])
);
