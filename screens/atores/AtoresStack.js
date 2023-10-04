import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AtoresPopulares from './AtoresPopulares';
import AtoresDetalhes from './AtoresDetalhes';
import Atores from './Atores';

const Stack = createNativeStackNavigator();

const AtoresStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="atores-populares" component={AtoresPopulares} options={{ title: 'Atores Populares' }} />
                <Stack.Screen name="atores" component={AtoresDetalhes} options={{ title: 'Detalhes' }} />
                <Stack.Screen name="ator-detalhes" component={Atores} options={{ title: 'Atores' }} />
            </Stack.Navigator>
        </>
    )
}

export default AtoresStack