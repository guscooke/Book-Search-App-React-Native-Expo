import styled from 'styled-components/native';


export const Container = styled.View`
flex:1;
background-color: rgba(212, 173, 134, 0.1226);
`;

export const ListBooks = styled.FlatList`
font-size:12px;`;

export const SearchContainer = styled.View`
flex-direction: row;
width:100%;
height:48px;
align-items: center;
margin-top:30px;
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
margin-top:30px;
`;

export const SearchButton = styled.TouchableOpacity``;