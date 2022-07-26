import { Box, Button, IconButton, Typography } from '@mui/material'
import { makeStyles, styled } from '@mui/styles'
import { customTheme } from '../../theme/createTheme'

const colors = customTheme.palette

export const ContactForm = styled(Box)({
    marginTop : 10,
    padding : 50, 
    width : '60%',
    boxShadow : `0 0 5px 0 ${colors.orangish.main}`,
    borderRadius : 10
})

export const SubmitButton = styled(Button)({
    borderRadius : 0,
    fontFamily : 'Shrikhand, cursive !important',
    '&:hover' : {
        boxShadow : `0 0 6px 0 ${colors.orangish.main} !important`
    }
})

export const ContactTitle = styled(Typography)({
    color : colors.orangish.main,
    fontFamily : 'Josefin Sans, sans-serif',
    fontSize : '1.5rem'
})

export const Email = styled(Typography)({
    fontFamily : 'Quicksand, sans-serif',
    fontSize : '1.3rem',
    color : colors.greyish.main
})

export const Or = styled(Typography)({
    fontFamily : 'Righteous, cursive !important',
    marginTop : 20, 
    textAlign : 'center',
    color : colors.orangish.main,
})

export const SocialButton = styled(IconButton)({
    color : `${colors.greyish.main} !important`,
    '&:hover' : {
        color : colors.greyish.main
    }
})