import React, { useEffect, useState } from 'react'
import apiFilmes from '../../services/apiFilmes'
import { Card, Text } from 'react-native-paper'
import { ScrollView } from 'react-native'

const Atores = ({ navigation, route }) => {
    const [atores, setAtores] = useState({})
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/person/${id}`).then(resultado => {
            setAtores(resultado.data)
        })
        apiFilmes.get(`/person${id}/movie_credits`).then(resultado => {
            setFilmes(resultado.data.cast)
        })
    }, [])
    return (
        <>
            <Card style={{ marginBottom: 15 }}>
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + atores.profile_path }} />
                <Card.Content>
                    <Text variant="titleLarge">{atores.name}</Text>
                    <Text variant="bodyMedium">Biografia: {atores.biography}</Text>
                </Card.Content>
            </Card>
            <Card>
                <Card.Content>
                    <Text variant="bodyMedium">Sexo: {atores.gender}</Text>
                    <Text variant="bodyMedium">Data de Nascimento: {atores.birthday}</Text>
                    <Text variant="bodyMedium">Local de Nascimento: {atores.place_of_birth}</Text>
                </Card.Content>
            </Card>


            {filmes.map(item => (
          <Card
            key={item.id}
            onPress={() => navigation.push('filmes-detalhes', { id: item.id })}
            style={{ marginBottom: 15 }}
          >
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
            <Card.Content>
              <Text variant="titleLarge">{item.title}</Text>
              <Text variant="bodyMedium">{item.overview}</Text>
            </Card.Content>
          </Card>
        ))}
        </>
    )
}

export default Atores
