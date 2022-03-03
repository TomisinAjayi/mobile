import styled from 'styled-components';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    body: "#23292f",
    formBody : "#3a4044",
    borderColor: "#808589",
    inputPlaceholder: "#e4e5e5",
    inputBackground: "#5e6366",
    red: "#ef4444",
    white: "#fff",
    black: "#000"
};

const { body, formBody, borderColor, inputPlaceholder, inputBackground, red, white, black } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 5%;
    padding-top: ${StatusBarHeight + 10 }px;
    background-color: ${body};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: ${white};
    padding: 5px;
`;

export const StyledFormArea = styled.View`
    width: 100%;
    margin: 15% auto 0;
    border-radius: 10px;
    border: 1px solid ${borderColor};
    background-color: ${formBody};
`;

export const SubTitle = styled.Text`
    font-size: 26px;
    margin-bottom: 20px;
    color: ${white};
    width: 90%;
    margin: 20px auto;
`;

export const StyledTextInput = styled.TextInput`
    padding: 15px;
    border: 1px solid ${borderColor};
    color: ${inputPlaceholder};
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    background-color: ${inputBackground};
    width: 90%;
    margin: 0 auto 10px;
`;

export const StyledInputLabel = styled.Text`
    font-size: 13px;
    text-align: left;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 10%;
    top: 23%;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${white};
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-vertical: 5px;
    height: 60px;
    width: 90%;
    margin: 0 auto;
`;

export const ButtonText = styled.Text`
    color: ${black};
    font-size: 16px;
    font-weight: bold;
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    width: 90%;
    margin: 12px auto;
`;

export const ForgotPasswordContent = styled.Text`
    color: ${inputPlaceholder};
    font-size: 16px;
`;

export const Footer = styled.View`
    width: 90%;
    margin: 10px auto;
    bottom: 0;
    position: absolute;
`;
export const FooterText = styled.Text`
    color: ${white};
    font-size: 16px;
`;
export const Help = styled.TouchableOpacity`
    
`;
export const Here = styled.Text`
    text-decoration: underline;
    text-decoration-color: ${white};
    color: ${white};
    font-size: 16px;
    margin-left: 44%;
    margin-top: -6.3%;
`;





