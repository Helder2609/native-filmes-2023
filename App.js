import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';
<<<<<<< HEAD
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilmesStack from './screens/filmes/FilmesStack';
import SeriesStack from './screens/series/SeriesStack';
import AtoresStack from './screens/atores/AtoresStack';
=======
import FilmesDetalhes from './screens/filmes/FilmesDetalhes';
import Atores from './screens/filmes/Atores';
>>>>>>> 1dabe58032851daa6beb1cc46f3cf89cb6109e57

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
<<<<<<< HEAD
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Filmes"
              component={FilmesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="movie-open" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Séries"
              component={SeriesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="remote-tv" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Atores"
              component={AtoresStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-multiple" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Configurações "
              component={FilmesStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="cog" size={26} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
=======
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="filmes-populares" component={FilmesPopulares} options={{ title: 'Filmes Populares' }} />
              <Stack.Screen name="filmes-detalhes" component={FilmesDetalhes} options={{ title: 'Detalhes' }} />
              <Stack.Screen name="ator-detalhes" component={Atores} options={{ title: 'Ator' }} />
            </Stack.Navigator>
          </NavigationContainer>
>>>>>>> 1dabe58032851daa6beb1cc46f3cf89cb6109e57
      </PaperProvider>
    </>
  );
}
