module.exports = {
  plugins: [
    require('prettier-plugin-tailwindcss'),
    require('prettier-plugin-astro'),
  ],
  overrides: [
    {
      files: '*.astro',
      options: { parser: 'astro' },
    },
  ],
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  printWidth: 80,
};
