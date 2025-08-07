tailwind.config = {
    theme: {
        extend: {
            // Custom Colors
            colors: {
                'text': {
                    50: '#0A0A0A',
                    100: '#979797',
                    150: '#111010',
                    200:'#616161',
                    250:'#B4B4B4',
                    300:'#A4A4A4',
                },
                'bg' : {
                    primary : '#111010'
                },
                'custom-gray': '#2d3748',
                'accent': '#ff6b6b',
            },


            
            // Custom Fonts
            fontFamily: {
                body: ['Proxima Nova', 'sans-serif'],
            },
            
            fontWeight: {
                thin: 100,
                light: 300,
                normal: 400,
                semibold: 600,
                bold: 700,
                extrabold: 800,
                black: 900,
            },
            
            // Custom Font Sizes
            fontSize: {
                'xxs': '0.625rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
                '7xl': '4.5rem',
                '8xl': '6rem',
                '9xl': '8rem',
            },
            
            
            // Custom Border Radius
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            
            // Custom Shadows
            boxShadow: {
                'custom': '0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)',
                'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
                'brutal': '8px 8px 0px 0px #000',
            },
            
            // Custom Animations
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.3s ease-out',
                'bounce-slow': 'bounce 2s infinite',
                'spin-slow': 'spin 3s linear infinite',
                'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            
            // Custom Keyframes
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100%)' },
                    '100%': { transform: 'translateY(0)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            },
            
            // Custom Breakpoints
            screens: {
                'xs': '475px',
                '2xl': '1422px',
            },
            
            // Custom Container
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                },
            },
        }
    },
    
    // Enable dark mode
    darkMode: 'class',
    
    // Add plugins functionality via CDN
    plugins: [],
}