import React from 'react';
import {
    Container,
    Title,
    Author,
    Review,
    Cover
} from './styles';
import { Ionicons } from '@expo/vector-icons';

export default function BookSlider({ data, navBookPage }) {
    return (

        <Container activeOpacity={0.6} onPress={() => navBookPage(data)} >
            <Title numberOfLines={1}>
                {data.volumeInfo.title}
            </Title>
            <Author numberOfLines={1}>
                {data.volumeInfo.authors}
            </Author>
            <Review>
                <Ionicons name='md-star' size={12} color='#FFF' />
                120+ Read Now
            </Review>
            <Cover
                source={{ uri: 'https' + data.volumeInfo.imageLinks.thumbnail.slice(4) }}
            // source={{ uri: `${data.volumeInfo.Thumbnail}` }}
            />
        </Container>

    )
}

