import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
export default function Libraries() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Tela Libraries
            </Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: 25,
            fontWeight: 'bold'
        }
    });
