
module.exports = {
    darkMode: 'class',
    content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/components/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                glass: 'rgba(255, 255, 255, 0.05)',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
};
  