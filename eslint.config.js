// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

module.exports = tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommended,
	{
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		rules: {
			'no-console': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					vars: 'all', // Check all variables for usage
					varsIgnorePattern: '^_', // Ignore variables prefixed with an underscore
					args: 'all', // Check all function arguments after the last used argument
					argsIgnorePattern: '^_', // Ignore arguments prefixed with an underscore
					ignoreRestSiblings: true, // Ignore rest siblings, useful in object destructuring
					caughtErrors: 'none', // Do not check for unused catch clause variables
				},
			],
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/typedef': [
				'error',
				{
					arrayDestructuring: true,
					arrowParameter: true,
					memberVariableDeclaration: true,
					objectDestructuring: true,
					parameter: true,
					propertyDeclaration: true,
					variableDeclaration: true,
					variableDeclarationIgnoreFunction: false,
				},
			],
		},
	}
);
