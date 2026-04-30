import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { getSavedMovies } from '@/services/appwrite'
import useFetch from '@/services/useFetch'
import { Link } from 'expo-router'

const Saved = () => {

  const { data: movies, loading } = useFetch(getSavedMovies);

  return (
    <View className="bg-primary flex-1 px-5 pt-10">

      <Text className="text-white text-xl font-bold mb-5">
        Saved Movies
      </Text>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.$id}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 15
        }}

        renderItem={({ item }) => (
          <Link href={`/movies/${item.movie_id}`} asChild>

          <TouchableOpacity className="w-[30%]">
            <Image
              source={{ uri: item.poster_url }}
              className="w-full h-40 rounded-lg"
            />

            <Text
              className="text-white text-xs mt-2"
              numberOfLines={2}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
          
          </Link>
        )}

        ListEmptyComponent={
          !loading && (
            <View className="flex-1 justify-center items-center mt-20">
              <Text className="text-gray-500">
                No saved movies yet
              </Text>
            </View>
          )
        }
      />

    </View>
  )
}

export default Saved

const styles = StyleSheet.create({})