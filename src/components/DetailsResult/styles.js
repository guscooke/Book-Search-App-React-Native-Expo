import styled from 'styled-components/native';


export const Container = styled.TouchableOpacity`
 flex: 1;
 padding:0 5px;
 margin-top:10px;
`;

export const Cover = styled.Image`
height: 229px;
width: 153px;
align-self: center;
border-radius: 5px;
padding: 10px;
margin-top:120px;
`;

export const Image = styled.Image`
/* height: 229px;
width: 153px; */
align-self: center;
border-radius: 5px;
padding: 20px;
z-index:-99;
position: absolute;
`;

export const Title = styled.Text`
color: #000;
font-size: 24px;
padding: 20px;
margin-top:10px;
align-self: center;
/* align-self: center; */
/* falta a fonte */
`;

export const Author = styled.Text`
color: #000;
font-size:16px;
margin-bottom:12px;
margin-top:10px;
margin-left:7px;
color:#FF6978;
padding: 0 10px;
`;

export const Description = styled.Text`
font-size:14px;
color:#313131;
padding: 0 20px;
margin-top:10px;
line-height:25px;
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
/* background-color: rgba(25, 30, 50, 0.8); */
border-radius:5px;
justify-content: center;
align-items: center;
`;


