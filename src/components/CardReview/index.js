import React from 'react';
import { View, Text } from 'react-native';

import {
    Container,
    Title,
    Author,
    Review,
    Cover
} from './styles';




function CardReader() {
    return (
        <Container activeOpacity={0.6} >
            <Cover
                resizeMethod='resize'
                source={require('../../assets/dont.png')}
            />
        </Container>

    )
}

export default CardReader;