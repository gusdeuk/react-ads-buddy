import { createTheme } from '@mui/material/styles'

// TODO: custom theme for this app
// https://material-ui.com/customization/theming/
// https://material-ui.com/customization/default-theme/#default-theme
// backup pallette and basic typography aligned with neptune theme / base colors

export const MyCustomTheme = createTheme({
    components: {
        // default for gloibal base MUI CSS BASE LINE
        MuiCssBaseline: {
            styleOverrides: `
            h1 {

            },
            body {
                font-family: Proxima Nova,Nunito Sans,sans-serif;
            }
          `
        }
    },
    palette: {
        primary: {
            main: '#0768fd',
            light: '#ECF3FF',
            dark: '#0557d5'
        },
        secondary: {
            main: '#9E54B0',
            light: '#9E54B0',
            dark: '#9E54B0'
        },
        error: {
            main: '#e20000',
            light: '#e20000',
            dark: '#e20000'
        },
        warning: {
            main: '#ff9300',
            light: '#ff9300',
            dark: '#ff9300'
        },
        info: {
            main: '#0768fd',
            light: '#0768fd',
            dark: '#0768fd'
        },
        success: {
            main: '#00c221',
            light: '#00c221',
            dark: '#00c221'
        },
        background: {
            default: '#FFFFFF'
        },
        grey: {
            50: '#fafafa',
            100: '#f5f5f5',
            200: '#eeeeee',
            300: '#e0e0e0',
            400: '#bdbdbd',
            500: '#9e9e9e',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
            A100: '#d5d5d5',
            A200: '#aaaaaa',
            A400: '#303030',
            A700: '#616161'
        }
    },
    typography: {
        /* htmlFontSize: 10,*/
        // fontSize: 13,
        //fontFamily: ['poppins', 'Arial', 'Helvetica', 'sans-serif'].join(','),
        fontFamily: 'Proxima Nova, Nunito Sans, sans-serif',
        //fontWeightLight: 300,
        //fontWeightRegular: 400,
        //fontWeightMedium: 500,
        //fontWeightBold: 700,
        h1: {
            color: '#000',
            fontSize: 40,
            fontWeight: 600,
            lineHeight: 1
        },
        h2: {
            color: '#000',
            fontSize: 32,
            fontWeight: 600,
            lineHeight: 1
        },
        // title1
        h3: {
            color: '#000',
            fontSize: 20,
            fontWeight: 600,
            lineHeight: 1.04
        },
        // title2
        h4: {
            color: '#000',
            fontSize: 18,
            lineHeight: 1.17
        },
        body1: {
            color: '#000',
            fontSize: 16,
            lineHeight: 1.5
        },
        body2: {
            color: '#000',
            fontSize: 14,
            lineHeight: 1.5
        },
        caption: {
            color: '#000',
            fontSize: 13,
            lineHeight: 1.66
        },
        button: {
            textTransform: 'none'
        }
    }
})
