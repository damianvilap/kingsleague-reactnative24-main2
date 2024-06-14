import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function JugadorCard({ item, teamColor }) {
    return (
        <View style={[styles.card, { backgroundColor: teamColor }]}>
            <Image source={{ uri: item.imagen }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{item.nombre}</Text>
                <Text style={styles.position}>{item.demarcacion}</Text>
                <Text style={styles.rating}>Media {item.media}</Text>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    info: {
        marginLeft: 10,
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
    },
    position: {
        color: 'white',
    },
    rating: {
        color: 'orange',
    },
});