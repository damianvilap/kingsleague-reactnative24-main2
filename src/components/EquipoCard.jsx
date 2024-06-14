import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function EquipoCard({ item }) {

    const backgroundColor = getBackgroundColor(item.nombre);
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
function getBackgroundColor(teamName) {
    switch (teamName) {
        case '1K FC':
            return '#4A90E2'; // Azul
        case 'Aniquiladores FC':
            return '#D0021B'; // Rojo
        case 'El Barrio':
            return '#7ED321'; // Verde
        case 'Jijantes FC':
            return '#9013FE'; // Púrpura
        case 'Kunisports':
            return '#F5A623'; // Naranja
        default:
            return '#FFFFFF'; // Blanco por defecto
    }
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
