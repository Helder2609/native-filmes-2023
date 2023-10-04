import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SeriesPopulares from './SeriesPopulares';
import SeriesDetalhes from './SeriesDetalhes';
import Atores from './Atores';

const Stack = createNativeStackNavigator();

const SeriesStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="series-populares" component={SeriesPopulares} options={{ title: 'Séries Populares' }} />
                <Stack.Screen name="series-detalhes" component={SeriesDetalhes} options={{ title: 'Detalhes' }} />
                <Stack.Screen name="atores-detalhes" component={Atores} options={{ title: 'Atores' }} />
            </Stack.Navigator>
        </>
    )
}

export default SeriesStack