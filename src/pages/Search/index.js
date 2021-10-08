import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    Container,
    ListBooks,
    SearchContainer,
    Input,
    SearchButton,
} from './styles';
import api from '../../data/api';

import SearchItem from '../../components/SearchItem'
import { Feather } from '@expo/vector-icons';

function Search() {

    const navigation = useNavigation();
    const route = useRoute();
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');


    useEffect(() => {
        let isActive = true;
        const ac = new AbortController();

        async function getSearchBook() {
            const response = await api.get(`volumes?q=${route?.params.name}+&maxResults=40`, {
            }
            )
                .catch((err) => {
                    console.log("DEU ERRADO")
                })

            if (isActive) {
                setBook(response.data.items);
                // console.log(response.data.items);
                setLoading(false);
            }
        }
        if (isActive) {
            getSearchBook();
        }
        return () => {
            isActive = false;
            ac.abort();
        }
    }, [])

    function navDetailsPage(item) {
        navigation.navigate('Details', { id: item.id })
    }
    function handleSearchBook() {
        // console.log("valor do input", input)
        if (input === '') return;

        navigation.navigate('Search', { name: input })
        setInput('');
    }

    if (loading) {
        return (
            <Container>
                <ActivityIndicator size="large" color="#483D8B" />
            </Container>
        )
    }

    return (
        <Container >
            <SearchContainer>
                <SearchButton onPress={handleSearchBook}>
                    <Feather name='search' size={15} color='#000' />
                </SearchButton >
                <Input
                    placeholder="Search book"
                    placeholderTextColor="#54565A"
                    value={input}
                    onChangeText={(text) => setInput(text)} />

            </SearchContainer>
            <ListBooks
                data={book}
                showsVerticalscrollIndicator={false}
                numColumns={3}
                renderItem={({ item }) => <SearchItem data={item} navBookPage={() => navDetailsPage(item)} />}
                keyExtractor={(item) => String(item.id)} />
        </Container>
    )
}

export default Search;