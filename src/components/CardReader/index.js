import React from 'react';
import {
    Container,
    Title,
    Author,
    Review,
    Cover,

} from './styles';
import { Image, StyleSheet } from 'react-native';


import { Ionicons } from '@expo/vector-icons';


function CardReader({ data, navBookPage }) {
    return (
        <Container activeOpacity={0.6} onPress={() => navBookPage(data)} >


            <Title numberOfLines={4}>
                {data.volumeInfo.title}
            </Title>
            <Author>
                {data.volumeInfo.authors}
            </Author>

            <Review>
                <Ionicons name='md-star' size={12} color='#2A2B26' />
                Chapter 2 From 9
            </Review>

            <Cover
                // source={{ uri: 'https://images.unsplash.com/photo-1549122728-f519709caa9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1325&q=80' }}
                source={{ uri: 'https' + data.volumeInfo.imageLinks.thumbnail.slice(4) }}
            />
            {/* <Image
                style={styles.img}
                source={require('../../assets/ovaly.png')} /> */}


        </Container>

    )
}
const styles = StyleSheet.create({
    img: {

        zIndex: -1,
        left: 0,
        height: 100,
        width: 331,

    },
});

export default CardReader;