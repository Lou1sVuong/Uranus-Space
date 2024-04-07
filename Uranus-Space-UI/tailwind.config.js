/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#0F051D',
                // background: 'rgb(229 246 255)',
                bgsecondary: '#042337',
                captiontext: '#B7B4BB',
                primary: '#FFF',
            },
            backgroundImage: {
                // Gradients
                gradient01:
                    'linear-gradient(108deg, #342b98 13.57%, #4799c1 97.65%)',
                gradient02:
                    'linear-gradient(62deg, #342b98 13.57%, #4799c1 97.65%)',
            },
        },
    },
    plugins: [],
}
