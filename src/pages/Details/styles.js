import styled from 'styled-components/native';

export const Container = styled.View`
flex:1;
height: 812px;
width:100%;
background-color: rgba(212, 173, 134, 0.1226);
`;

export const Header = styled.View`
position:absolute;
top:35px;
display:flex;
flex-direction: row;
justify-content: space-between;
padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
width: 46px;
height: 46px;
background-color: rgba(25, 30, 50, 0.8);
border-radius:5px;
justify-content: center;
align-items: center;
`;


export const Title = styled.Text`
font-size:34px;
color: #000;
`;

export const SubTitle = styled.Text`
`;

export const ListBooks = styled.FlatList`
`;

export const Description = styled.Text`
`;


export const Cover = styled.Image`
position: absolute;
height: 234px;
width: 100%;
/* align-self: center; */
/* margin-top: -105px; 
margin-left: 150px; */
/* border-radius: 5px; */
`;

export const SearchContainer = styled.View`
flex-direction: row;
width:100%;
height:48px;
align-items: center;
margin-top:30px;
margin-bottom:30px;
padding: 0 19px;

`;
export const SearchButton = styled.TouchableOpacity`
`
    ;