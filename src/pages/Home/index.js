import React, { useState, useEffect } from 'react';
import { ScrollView, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
    Container,
    SearchContainer,
    Input,
    SearchButton,
    Title,
    SliderBook,
    WelcomeText
} from './styles';

import BookSlider from '../../components/BookSlider';
import CardReader from '../../components/CardReader';
import CardReview from '../../components/CardReview';
import { getListBook, randomBook } from '../../Tools/book';

import { Feather } from '@expo/vector-icons';
import api from '../../data/api';

function Home() {

    const [newBooks, setNewBooks] = useState({});
    const [readingNow, setReadingNow] = useState([]);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        let isActive = true;
        const ac = new AbortController();


        async function getBooks() {
            const [BookShelf, ReadingUp] = await Promise.all([

                api.get('volumes?q=search+starwars'),
                api.get('volumes?q=search+harrypotter')
            ])

            if (isActive) {
                const nowList = getListBook(1, BookShelf.data.items)
                const slideBook = getListBook(4, ReadingUp.data.items)

                setNewBooks(slideBook);
                setReadingNow(nowList);
                setLoading(false);
            }
        }
        getBooks();

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
        <Container>
            <SearchContainer>
                <SearchButton onPress={handleSearchBook}>
                    <Feather name='search' height="100px" size={15} color='#000' />
                </SearchButton >
                <Input
                    placeholder="Search book"
                    placeholderTextColor="#54565A"
                    value={input}
                    onChangeText={(text) => setInput(text)} />

            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false}>
                <WelcomeText>
                    Hi, Mehmed Al Faith👋
                </WelcomeText>
                <Title
                    style={styles.oval}>
                    Discover new book
                    <Image
                        style={styles.img}
                        source={require('../../assets/oval.png')} />
                </Title>

                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={newBooks}
                    renderItem={({ item }) => <BookSlider data={item} navBookPage={() => navDetailsPage(item)} />}
                    keyExtractor={(item) => String(item.id)} />
                <Title>

                    Currently Reading
                </Title>

                <SliderBook
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={readingNow}
                    renderItem={({ item }) => <CardReader data={item} navBookPage={() => navDetailsPage(item)} />}
                    keyExtractor={(item) => String(item.id)} />

                <Title>
                    Review of The Days
                </Title>
                <CardReview
                    resizeMethod='resize' />
            </ScrollView>
        </Container>
    )
}

const styles = StyleSheet.create({
    oval: {
        left: 0,
        height: 60,
        zIndex: -1
    },
    ovaly: {
        left: 0,
        height: 20,
        zIndex: -99
    },

});

export default Home;




