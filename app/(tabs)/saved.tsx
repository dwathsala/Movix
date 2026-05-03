import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { getSavedMovies,removeSavedMovie } from '@/services/appwrite'
import useFetch from '@/services/useFetch'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const Saved = () => {

  const { data: movies, loading, refetch } = useFetch(getSavedMovies);

  const handleRemove = async (id: string) => {
    const success = await removeSavedMovie(id);
    if (success) {
      refetch(); // Refresh the list to show the movie is gone
    } else {
      Alert.alert("Error", "Could not remove the movie. Please try again.");
    }
  };

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
          justifyContent: 'flex-start',
          gap:15,
          marginBottom: 15
        }}

        renderItem={({ item }) => (
          <View className="w-[30%] relative">
            <Link href={`/movies/${item.movie_id}`} asChild>

            <TouchableOpacity className="w-full">
              <Image
                source={{ uri: item.poster_url }}
                className="w-full h-40 rounded-lg" resizeMode="cover"
              />

              <Text
                className="text-white text-xs mt-2"
                numberOfLines={2}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
            </Link>

            <TouchableOpacity 
              onPress={() => handleRemove(item.$id)}
              className="absolute top-1 right-1 z-10 p-1 bg-dark-100 rounded-full"
            >
              <Ionicons name="close" size={12} color="white" />
            </TouchableOpacity>
          </View>
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