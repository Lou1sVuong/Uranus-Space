/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#010110',
                // background: 'rgb(229 246 255)',
                bgsecondary: '#293364',
                captiontext: '#B7B4BB',
                primary: '#EFEFFE',
                border: '#293364',
                gradient01: 'linear-gradient(108deg, #342b98 13.57%, #4799c1 97.65%)',
            },
            backgroundImage: {
                // Gradients
                gradient01: 'linear-gradient(108deg, #342b98 13.57%, #4799c1 97.65%)',
                gradient02: 'linear-gradient(30deg, #342b98 13.57%, #4799c1 97.65%)',
                gradientText: 'linear-gradient(214deg, #6262D9 21.1%, #9D62D9 102.26%, #9D62D9 102.26%)',
                gradientBg: 'linear-gradient(to right, #93C5FD, #ACB6E5)'
               
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },

        },
    },
    plugins: [],
}
