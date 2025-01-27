import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import { ScrollView, View } from 'react-native'
import apiFilmes from '../../services/apiFilmes'

const AtoresPopulares = ({ navigation }) => {

  const [atores, setAtores] = useState([])

  useEffect(() => {
    apiFilmes.get('/person/popular').then(resultado => {
      setAtores(resultado.data.results)
    })
  }, [])

  return (
    <>
      <ScrollView style={{ padding: 15 }}>

        {atores.map(item => (
          <Card
            key={item.id}
            onPress={() => navigation.push('ator-detalhes', { id: item.id })}
            style={{ marginBottom: 15 }}
          >
            <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }} />
            <Card.Content>
              <Text variant="titleLarge">{item.name}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </>
  )
}

export default AtoresPopulares