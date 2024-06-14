import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { getTeams } from '../services/apikl';
import EquipoCard from '../components/EquipoCard';
import { useNavigation } from '@react-navigation/native';

export default function KingsLeague() {
    const [teams, setTeams] = useState([])

    const navigation = useNavigation();

    useEffect(() => {
        getTeams().then((data) => {
            console.log(data)
            setTeams(data)
        })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={teams}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('EquipoScreen', {
                        teamColor: backgroundColor,
                        teamName: item.nombre, teamid: item.id
                    })}>
                        <EquipoCard key={item.id} item={item} />
                    </TouchableOpacity>
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