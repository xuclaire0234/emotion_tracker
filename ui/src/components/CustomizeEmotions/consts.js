import { red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey } from '@mui/material/colors';

const defaultRed = {
    500: '#F44336'
}
const defaultMagenta = {
    500: '#BF41FE'
}
const defaultBlue = {
    500: '#2196F3'
}
const defaultGreen = {
    500: '#30DB5B'
}
const defaultYellow = {
    500: '#D8AD00'
}
const defaultIndigo = {
    500: '#5D59FF'
}

// Need to do this because MUI doesn't have an 'import all' for colors
export const colorSwatch = [
    { id: 0,  value: 'red',  label: 'Red', colorData: red },
    { id: 1,  value: 'pink',  label: 'Pink', colorData: pink },
    { id: 2,  value: 'purple',  label: 'Purple', colorData: purple },
    { id: 3,  value: 'deepPurple',  label: 'Deep Purple', colorData: deepPurple },
    { id: 4,  value: 'indigo',  label: 'Indigo', colorData: indigo },
    { id: 5,  value: 'blue',  label: 'Blue', colorData: blue },
    { id: 6,  value: 'lightBlue',  label: 'Light Blue', colorData: lightBlue },
    { id: 7,  value: 'cyan',  label: 'Cyan', colorData: cyan },
    { id: 8,  value: 'teal',  label: 'Teal', colorData: teal },
    { id: 9,  value: 'green',  label: 'Green', colorData: green },
    { id: 10, value: 'lightGreen',  label: 'Light Green', colorData: lightGreen },
    { id: 11, value: 'lime',  label: 'Lime', colorData: lime },
    { id: 12, value: 'yellow',  label: 'Yellow', colorData: yellow },
    { id: 13, value: 'amber',  label: 'Amber', colorData: amber },
    { id: 14, value: 'orange',  label: 'Orange', colorData: orange },
    { id: 15, value: 'deepOrange',  label: 'Deep Orange', colorData: deepOrange },
    { id: 16, value: 'brown',  label: 'Brown', colorData: brown },
    { id: 17, value: 'grey',  label: 'Grey', colorData: grey },
    { id: 18, value: 'blueGrey',  label: 'Blue Grey', colorData: blueGrey },
    { id: 19, value: 'defaultRed', label: 'Default Red', colorData: defaultRed},
    { id: 20, value: 'defaultMagenta', label: 'Default Magenta', colorData: defaultMagenta},
    { id: 21, value: 'defaultBlue', label: 'Default Blue', colorData: defaultBlue},
    { id: 22, value: 'defaultGreen', label: 'Default Green', colorData: defaultGreen},
    { id: 23, value: 'defaultYellow', label: 'Default Yellow', colorData: defaultYellow},
    { id: 24, value: 'defaultIndigo', label: 'Default Indigo', colorData: defaultIndigo},
]
