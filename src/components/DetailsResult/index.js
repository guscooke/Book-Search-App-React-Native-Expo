import React from 'react';
import {
    Container,
    Cover,
    Title,
    Author,
    Description,
    Image,
    Header,
    HeaderButton
} from './styles';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function DetailsResult({ data }) {
    const navigation = useNavigation();

    return (
        <Container >
            <Header>
                <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#000"
                    />
                </HeaderButton>
            </Header>
            <Image
                source={require('../../assets/oval2.png')} />
            {data?.volumeInfo?.imageLinks?.thumbnail ? (
                <Cover
                    resizeMethod='resize'
                    source={{ uri: 'https' + data.volumeInfo?.imageLinks?.thumbnail?.substr(4) }}
                />
            ) : (
                <Cover
                    resizeMethod='resize'
                    source={require('../../assets/Sprint.png')}
                />
            )}
            <Title numberOfLines={12}>{data.volumeInfo.title} </Title>
            <Author numberOfLines={2}>{data.volumeInfo.authors}</Author>
            <Description resizeMethod='resize'>{data.volumeInfo.description}</Description>
        </Container>
    )
}
export default DetailsResult;