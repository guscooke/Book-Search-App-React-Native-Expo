import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
 flex: 1;
 padding:0 5px;

 
`;
export const ListBooks = styled.FlatList`
font-size:12px;`;

export const Cover = styled.Image`
height: 153px;
width: 99px;
margin-top:50;
align-self: center;
border-radius: 5px;

`;

export const Title = styled.Text`
color: #000;
font-size: 12px;
padding: 0px;
margin-top:10px;
margin-left:7px;
/* align-self: center; */
/* falta a fonte */
`;

export const Author = styled.Text`
color: #000;
font-size:10px;
margin-bottom:12px;
margin-top:3px;
margin-left:7px;



/* falta a fonte */
`;


