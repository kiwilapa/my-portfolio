import { useRef, useState } from 'react'
import { TextField, Stack, Box, useMediaQuery, Alert } from '@mui/material'
import { Facebook, LinkedIn } from '@mui/icons-material'
import emailjs from '@emailjs/browser'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

// ------ importing from other files ---------
import { ContactForm, SubmitButton, ContactTitle, Email, Or, SocialButton } from './styles'
import { yourEmail, yourName, yourMessage } from '../../Identifiers/identifiers'

const ContactMe = () => {

    // creating css breakpoints
    const break_930 = useMediaQuery('(max-width : 930px)')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isError, setIsError] = useState(false)
    const [isEmpty, setIsEmpty] = useState(false)

    const form = useRef()

    // to control the change in input elements
    const changeHandler = (event, toChange) => {
        setIsEmpty(false)
        setIsError(false)
        switch(toChange) {
            case yourName:
                setName(event.target.value)
                break;
            case yourEmail:
                setEmail(event.target.value.trim())
                break;
            case yourMessage:
                setMessage(event.target.value)
                break;
            default:
                return null
        }
    }

    // this will send the message to my email address
    const submitMessage = (event) => {
        setIsError(false)
        setIsEmpty(false)
        event.preventDefault()
        if (name.length !== 0 && email.length !== 0 && message.length !== 0) {
            const data = {name, email, message}
            emailjs.send('service_o4bschf', 'template_tg8zgih', data, 'vHNGIvVEG6oZ_6_gA')
                .then((result) => {
                    setEmail('')
                    setMessage('')
                    setName('')
                }, (error) => {
                    setIsError(true)
                });
        } else {
            setIsEmpty(true)
        }
    }

    return (
        <Stack
            alignItems = 'center'
            justifyContent = 'center'
            spacing = {1}
            sx = {{height : '100%'}}
            // below for transition effect
            component = {motion.div}
            initial = {{y : 500, opacity : 0}}
            animate = {{y : 0, opacity : 1}}
            exit = {{y : -500, opacity : 0}}
            transition = {{type : 'tween'}}>
            <ContactForm>
                <form ref = {form} onSubmit = {(event) => submitMessage(event)}>
                    <Stack spacing = {3}>
                        <TextField
                            size = 'small'
                            variant = 'outlined'
                            type = 'text'
                            color = 'greyish'
                            label = 'Your Name'
                            value = {name}
                            onChange = {event => changeHandler(event, yourName)}
                            error = {!Boolean(name.length) && isEmpty}
                            helperText = {!Boolean(name.length) && isEmpty && 'please mention your name'} />
                        <TextField
                            size = 'small'
                            variant = 'outlined'
                            type = 'text'
                            color = 'greyish'
                            label = 'Your Email address'
                            value = {email}
                            onChange = {event => changeHandler(event, yourEmail)}
                            error = {isEmpty}
                            helperText = {isEmpty && 'please mention your email address'} />
                        <TextField
                            multiline
                            minRows = {4}
                            size = 'small'
                            type = 'text'
                            color = 'greyish'
                            label = 'Message'
                            variant = 'outlined'
                            value = {message}
                            onChange = {event => changeHandler(event, yourMessage)}
                            error = {isEmpty}
                            helperText = {isEmpty && 'please mention your message'} />
                        <Box>
                            <SubmitButton 
                                disableRipple
                                variant = 'contained' 
                                color = 'orangish'
                                type = 'submit'
                                size = 'large'>
                                <strong>Send</strong>
                            </SubmitButton>
                            {isError &&
                                <Alert 
                                    severity='error'
                                    sx = {{mt:1}}>
                                    Unable to send message. Please try again later
                                </Alert>
                            }
                        </Box>
                    </Stack>
                </form>
                <Or variant = 'h5'>OR</Or>
                <Box
                    display = 'flex' 
                    justifyContent = 'space-between'
                    sx = {{mt:3, width : '100%'}}>
                    <Stack alignItems = 'center'>
                        <ContactTitle variant = 'body'>
                            email me
                        </ContactTitle>
                        <Email variant = 'body'>
                            rahulrana.kiwi@gmail.com
                        </Email>
                    </Stack>
                    <Stack alignItems = 'center'>
                        <ContactTitle variant = 'body'>
                            message me
                        </ContactTitle>
                        <Box>
                            <SocialButton
                                href = 'https://www.facebook.com/dumKiwi'>
                                <Facebook sx = {{fontSize : '2.7rem'}}/>
                            </SocialButton>
                            <SocialButton
                                href = 'https://www.linkedin.com/in/rahul-rana-36057210b'>
                                <LinkedIn sx = {{fontSize : '2.7rem'}} />
                            </SocialButton>
                        </Box>
                    </Stack>
                </Box>
            </ContactForm>
        </Stack>
    )
}

export default ContactMe