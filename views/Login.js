import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { Form, Formik } from 'formik';
import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    Colors,
    StyledButton,
    ButtonText,
    MsgBox,
    ForgotPassword,
    ForgotPasswordContent,
    Footer,
    FooterText,
    Help,
    Here
} from './../components/styles';
import { View } from 'react-native';

import { Octicons, Ionicons } from '@expo/vector-icons';

const { white, inputPlaceholder } = Colors;

const Login = () => {

    const [ hidePassword, setHidePassword ] = useState(true);
    return(
        <StyledContainer>
            <StatusBar style='dark' />
            <InnerContainer>
                <PageTitle>MoneyRise</PageTitle>

                <Formik
                    initialValues = {{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values }) => 
                (<StyledFormArea>
                    <SubTitle>Sign in</SubTitle>
                    <MyTextInput 
                        
                        icon="mail"
                        placeholder="Email address"
                        placeholderTextColor={inputPlaceholder}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboardType="email-address"
                    />

                    <MyTextInput 
                        
                        icon="lock"
                        placeholder="Password"
                        placeholderTextColor={inputPlaceholder}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry={hidePassword}
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                    />
                    <MsgBox>...</MsgBox>
                    <StyledButton onPress={ handleSubmit }>
                        <ButtonText>
                            SIGN IN
                        </ButtonText>
                    </StyledButton>
                    <ForgotPassword>
                        <ForgotPasswordContent>I forgot my password</ForgotPasswordContent>
                    </ForgotPassword>
                </StyledFormArea>)}
                </Formik>
                <Footer>
                    <FooterText>If you find difficulty accessing your account, Get help</FooterText>
                    <Help>
                        <Here>here.</Here>
                    </Help>
                </Footer>
            
            </InnerContainer>
        </StyledContainer>
    );
};

const MyTextInput = ({ isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <StyledTextInput { ...props } />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={ hidePassword ? 'md-eye' : 'md-eye-off' } size={30} color={ white } />
                </RightIcon>
            )}
        </View>
    )
}



export default Login;