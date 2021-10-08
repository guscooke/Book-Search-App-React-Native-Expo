import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
background-color: rgba(212, 173, 134, 0.1226);
flex:1;
padding: 4px 0;
height: 812px;
width: 100%;
`;

export const SearchContainer = styled.View`
flex-direction: row;
width:100%;
height:48px;
align-items: center;
margin-top:50px;
margin-bottom:30px;
padding: 0 19px;

`;
export const Input = styled.TextInput`
background-color: #FFF;
width:100%;
height:48px;
border-radius: 10px;
padding: 0 41px;
font-size: 15px;
`;

export const WelcomeText = styled.Text`
padding:19px;
font-weight:600;
font-size:24px;
/* margin-bottom: 30px; */
/* font-family: SF Pro Display; */
`;

export const SearchButton = styled.TouchableOpacity``;

export const Title = styled.Text`
 font-size: 18px;
 /* font-weight: ; */
 padding: 19px;
 color: #3F4043;
 letter-spacing:0.5px;
 align-items: center;
 justify-content: center;
 
`;

export const SliderBook = styled.FlatList`
height: 150px;
padding: 0 0px`
    ;





