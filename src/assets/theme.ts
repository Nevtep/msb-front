// $palette: (
//     bg:					#333,
//     fg:					#666,
//     fg-bold:			#555,
//     fg-light: 			#999,
//     border:				rgba(144,144,144,0.5),
//     border-bg:			rgba(144,144,144,0.075),
//     border2:			rgba(144,144,144,0.75),
//     border2-bg:			rgba(144,144,144,0.2),
//     accent1:			
//     accent2:			,
//     accent3:			#D8BE74,
//     accent4:			#B28C4E,
//     accent5:			,
//     accent6:			,
//     accent1-alt:		desaturate(darken(#FAF78C, 15), 20),
//     accent2-alt:		desaturate(darken(#FFE382, 15), 20),
//     accent3-alt:		desaturate(darken(#D8BE74, 15), 20),
//     accent4-alt:		desaturate(darken(#B28C4E, 15), 20),
//     accent5-alt:		desaturate(darken(#BB8644, 15), 20),
//     accent6-alt:		desaturate(darken(#8F5E33, 15), 20),

//     dark: (
//         bg:				#666666,
//         fg-bold:		#fff,
//         fg:				rgba(255,255,255,0.75),
//         fg-light:		rgba(255,255,255,0.5),
//         border:			#ffffff,
//         border-bg:		rgba(255,255,255,0.125),
//         border2:		rgba(255,255,255,0.75),
//         border2-bg:		rgba(255,255,255,0.25)
//     )
// )

export const baseTheme = {
    palette: {
      primary: {
        main: '#FAF78C',
        light:  '#FFE382'
      },
      secondary: {
        main: '#8F5E33',
        light: '#BB8644'
      },
      border: {
        main: 'rgba(144,144,144,0.5)',
        light: '#EBEBEB',
      },
      text: {
        primary: '#000000',
        secondary: '#7D10FF',
        white: '#FFFFFF',
        light: '#616161',
      }
    },
    shadow: {
      bottom: '0 3px 6px rgba(0,0,0,0.16)',
      top: '0 -3px 6px rgba(0,0,0,0.16)',
      card: '3px 3px 6px rgba(0,0,0,0.16)'
    },
  };
  