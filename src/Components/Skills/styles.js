import { makeStyles, styled } from '@mui/styles'
import { Grid } from '@mui/material'
import { customTheme } from '../../theme/createTheme'

const colors = customTheme.palette

export const CustomGrid = styled(Grid)({
    padding : 30, 
    boxShadow : `0 0 5px 1px ${colors.orangish.main}`, 
    borderRadius : 20, 
    height : 300,
    '@media (max-width : 981px)' : {
        height : 240,
    },
    '@media (max-width : 622px)' : {
        height : 'auto'
    }
})

export const styles = makeStyles({
    main : {
        width : '100%', 
        height : '100%', 
        textAlign : 'center',
        paddingTop : 10
    },
    title : {
        fontSize : '1.8rem !important',
        color : colors.orangish.main,
        fontFamily : "'Anton', sans-serif !important",
        textAlign : 'center'
    },
    skillName : {
        color : colors.greyish.main,
        fontFamily : "'Signika', sans-serif !important"
    }
})

