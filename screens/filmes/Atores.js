import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { ScrollView } from 'react-native'

const Atores = ({ navigation, route }) => {

    const [ator, setAtor] = useState({})
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/person/${id}`).then(resultado => {
            setAtor(resultado.data)
        })

        apiFilmes.get(`/person/${id}/movie_credits`).then(resultado => {
            setFilmes(resultado.data.cast)
        })

    }, [])

    return (
        <ScrollView>

            <Card style={{ marginBottom: 15 }}>
                <Card.Cover style={{ height: 400 }} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }} />
                <Card.Content>
                    <Text variant="titleLarge">{ator.name}</Text>
                    <Text variant="bodyMedium">{ator.biography}</Text>
                    <Text variant="bodyMedium">{ator.birthday}</Text>
                    <Text variant="bodyMedium">{ator.place_of_birth}</Text>
                </Card.Content>
            </Card>

            {filmes.map(item => (
                <Card
                    key={item.id}
                    mode="outlined"
                    style={{ marginBottom: 15 }}
                    onPress={() => navigation.push('filmes-detalhes', { id: item.id })}
                >
                    <Card.Title
                        title={item.title}
                        subtitle={item.release_date}
                        left={(props) => <Avatar.Image size={50} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />}
                        right={(props) => <IconButton {...props} icon="chevron-right" />}
                    />
                </Card>
            ))}
        </ScrollView>
    )
}

export default Atores