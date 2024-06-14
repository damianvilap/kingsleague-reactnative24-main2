import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EquipoScreen from '../Screen/EquipoScreen'
import KingsLeague from '../Screen/KingsLeagueScreen';

const KingStack = createNativeStackNavigator();

export default function StackKing() {
    return (
        <KingStack.Navigator>
            <KingStack.Screen
                name="KingsLeague"
                component={KingsLeague}
            />
            <KingStack.Screen
                name="EquipoScreen"
                component={EquipoScreen}
                options={({ route }) => ({ title: `Kingsleague - ${route.params.teamName}` })}
            />
        </KingStack.Navigator>
    )
}