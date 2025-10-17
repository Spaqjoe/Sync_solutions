/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    "./postcss/basic-autoprefixer.cjs": {},
  },
};

export default config;
