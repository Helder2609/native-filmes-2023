import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import { Image, ScrollView } from 'react-native'
import apiFilmes from '../../services/apiFilmes'

const SeriesDetalhes = ({ navigation, route }) => {

    const [serie, setSerie] = useState({})
    const [atores, setAtores] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/tv/${id}`).then(resultado => {
            setSerie(resultado.data)
        })

        apiFilmes.get(`/tv/${id}/credits`).then(resultado => {
            setAtores(resultado.data.cast)
        })

    }, [])

    return (
        <>
            <ScrollView style={{ padding: 15 }}>
                <Card style={{ marginBottom: 15 }}>
                    <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + serie.backdrop_path }} />
                    <Card.Content>
                        <Text variant="titleLarge">{serie.title}</Text>
                        <Text variant="bodyMedium">{serie.overview}</Text>
                    </Card.Content>
                </Card>
                <Card mode='outlined' style={{ marginBottom: 15 }}>
                    <Card.Content>
                        <Text variant="bodyMedium">Orçamento: {serie.budget}</Text>
                        <Text variant="bodyMedium">Voto: {serie.vote_average}</Text>
                        <Text variant="bodyMedium">Duração: {serie.runtime} min.</Text>
                        <Text variant="bodyMedium">Lançamento: {serie.release_date}</Text>
                    </Card.Content> 
                </Card>

                <Text variant="titleMedium" style={{textAlign: 'center', color: 'red'}} >Atores</Text>
                {atores.map(item => (
                    <Card 
                        key={item.id} 
                        mode="outlined" 
                        style={{ marginBottom: 15 }}
                        onPress={()=>navigation.push('atores', {id: item.id})}
                        >
                        <Card.Title
                            title={item.character}
                            subtitle={item.name}
                            left={(props) => <Avatar.Image size={50} source={{uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path}} />}
                            right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => { }} />}
                        />  
                    </Card>
                ))}

            </ScrollView>
        </>
    )
}

export default SeriesDetalhes