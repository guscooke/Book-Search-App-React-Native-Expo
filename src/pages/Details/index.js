import React, { useState, useEffect } from 'react';
import {
    Container,
    ListBooks,
    Header,
    HeaderButton
} from './styles';

import { useRoute } from '@react-navigation/native';
import api from '../../data/api';
import DetailsResult from '../../components/DetailsResult';


function Details() {
    const route = useRoute();
    const [books, setBooks] = useState({});

    useEffect(() => {
        let isActive = true;

        async function getBook() {
            const response = await api.get(`volumes/${route.params.id}`, {
            })
                .catch((err) => {
                    console.log(err)
                })
            if (isActive) {
                setBooks(response.data.items);
                console.log(response.data.items);
            }
        }
        if (isActive) {
            getBook();
        }

        return () => {
            isActive = false;
        }
    }, [])

    return (
        <Container >

            <ListBooks
                data={books}
                showsVerticalscrollIndicator={false}
                numColumns={1}
                renderItem={({ item }) => <DetailsResult data={item} />}
                keyExtractor={(item) => String(item.id)} />
        </Container>
    )
}
export default Details;