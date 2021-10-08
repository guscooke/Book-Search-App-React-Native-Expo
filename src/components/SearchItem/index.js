import React from 'react';
import {
    Container,
    Cover,
    Title,
    Author
} from './styles';


function SearchItem({ data, navBookPage }) {

    return (

        <Container onPress={() => navBookPage(data)}
            activeOpacity={0.7} >

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
            <Title numberOfLines={1}>{data.volumeInfo.title} </Title>
            <Author numberOfLines={1}> by {data.volumeInfo.authors}</Author>

        </Container>
    )
}

export default SearchItem;