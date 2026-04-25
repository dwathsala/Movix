import { StyleSheet, Text, View, Image, FlatList, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { images } from '@/constants/images'
import MovieCard from '@/components/MovieCard'
import { fetchMovies } from '@/services/api'
import useFetch from '@/services/useFetch'
import { icons } from '@/constants/icons'
import SearchBar from '@/components/SearchBar'

const Search = () => {

  const[searchQuery, setSearchQuery] = useState("");

  const {data : movies,
    loading : moviesLoading,
    error : moviesError
    } = useFetch(() => fetchMovies({
    query: searchQuery,
    }), );
    
  return (
    <View className='flex-1 bg-primary'>
      <Image source ={images.bg} className = "flex-1 absolute w-full z-0" resizeMode='cover'/>

      <FlatList data={movies} 
      renderItem = {({item}) => <MovieCard {...item}/>}
      keyExtractor={(item) => item.id.toString()}
      className="px-5"
      numColumns={3}
      columnWrapperStyle={{ 
        justifyContent: 'center',
        gap: 16, 
        marginVertical: 16,}}
      contentContainerStyle={{paddingBottom: 100}}

      ListHeaderComponent={
      <>
        <View className = "w-full flex-row justify-center mt-20 items-center">
          <Image source={icons.logo} className="w-12 h-10" />
        </View>

        <View className="my-5">
          <SearchBar placeholder="Search for a movie"/>
        </View>

        {moviesLoading && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="my-3"
          />
        )}

        {moviesError && (
          <Text className="text-red-500 text-center px-5 my-3">
            Error: {moviesError.message}
          </Text>
        )}

        {!moviesLoading && !moviesError && searchQuery.trim() && movies ?.length > 0 && (
          <Text className="text-xl text-white font-bold">
            Serch Results for{' '}
            <Text className= "text-accent">{searchQuery}</Text>
          </Text>
        )}

      </>
      }
      />
      
    </View>
  )
}

export default Search

const styles = StyleSheet.create({})