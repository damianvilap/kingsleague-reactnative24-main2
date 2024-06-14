import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function EquipoCard({ item }) {

    const backgroundColor = item.color;
    return (
        <View style={[styles.card, { backgroundColor }]}>
            <Image source={{ uri: item.escudo }} style={styles.logo} />
            <View style={styles.textContainer}>
                <Text style={styles.teamName}>{item.nombre}</Text>
            </View>
            <Image source={{ uri: item.imagenpresidente }} style={styles.presidente} />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
    },
    logo: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    teamName: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    presidente: {
        width: 80,
        height: 80,
    },
});
