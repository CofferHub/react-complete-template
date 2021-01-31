module.exports = {
	// Browser jsdom test
	testEnvironment: 'jsdom',
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.js(x)?', '!src/**/stories.jsx'],
	setupFilesAfterEnv: ['<rootDir>/.jest/setup.js'],
	modulePaths: ['<rootDir>/src/'],
}
