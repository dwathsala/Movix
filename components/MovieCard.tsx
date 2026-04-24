import { View, Text } from 'react-native'
import React from 'react'

const MovieCard = ({id, poster_path, title, vote_average, release_date}) => {
  return (
    <View>
      <Text className="text-white text-sm">MovieCard</Text>
    </View>
  )
}

export default MovieCard