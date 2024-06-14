import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { getPlayersByTeam } from '../services/apikl';
import JugadorCard from '../components/JugadorCard';

export default function EquipoScreen({ route }) {
    const { teamId } = route.params;
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const data = await getPlayersByTeam(teamId);
            setPlayers(data);
        };
        fetchPlayers();
    }, [teamId]);

    return (
        <View style={styles.container}>
            <FlatList
                data={players}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <JugadorCard key={item.id} item={item} teamColor={teamColor} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    teamItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    teamName: {
        fontSize: 18,
    },
});