import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { fetchMovieDetails } from '@/services/api';
import useFetch from '@/services/useFetch';
import { icons } from '@/constants/icons';
import { Label } from '@react-navigation/elements';


interface MovieInfoProps {
  Label: string;
  value: string | number | undefined;
}

const MovieInfo = ({Label, value}: MovieInfoProps) => (
  <View className = "flex-col items-start justify-center mt-5">
    <Text className = "text-light-200 font-normal text-sm">
      {Label}
    </Text>

    <Text className ="text-light-100 font-bold text-sm mt-2">
      {value || 'N/A'}
    </Text>
  </View>
)

const MovieDetails  = () => {
  const {id} = useLocalSearchParams();

  const {data : movie, loading, error} = useFetch(() => fetchMovieDetails(id as string));

  return (
    <View className = "bg-primary flex-1">
      
    <ScrollView contentContainerStyle={{paddingBottom: 80}}>
      <View>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }} className="w-full h-[550px]" resizeMode="stretch" />
      </View>

      <View className="flex-col items-start justify-center mt-5 px-5">
        <Text className = "text-white font-bold text-xl">
          {movie?.title}
        </Text>

        <View className = "flex-row items-center gap-x-1 mt-2">
          <Text className = "text-light-200 text-sm ">
            {movie?.release_date?.split("-")[0]}
            <Text className="text-light-200 text-sm">
            {movie?.runtime ? ` • ${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : ''}
            </Text>
          </Text>
        </View>

        <View className = "flex-row items-center bg-dark-100 px-2 py-1 rounded-md gap-x-1 mt-2">
          <Image source = {icons.star} className="size-4"/>
          <Text className = "text-white text-sm font-bold">
            {Math.round(movie?.vote_average ?? 0)}/10
          </Text>

          <Text className = "text-light-200 text-sm">
            {movie?.vote_count && movie?.vote_count !== 0 ? `(${movie.vote_count})` : ''} votes
          </Text>
        </View>

        <MovieInfo Label="Overview" value={movie?.overview} />

        <MovieInfo Label="Genres" value={movie?.genres?.map((g) => g.name).join(', ') || 'N/A'} />

        <View className="flex flex-row justify-between w-full ">
          <MovieInfo Label="Language" value={movie?.original_language?.toUpperCase()} />
          <MovieInfo Label="Budget" value={movie?.budget ? `$${(movie.budget / 1_000_000).toFixed(2)} M` : 'N/A'} />
          <MovieInfo Label="Revenue" value={movie?.revenue ? `$${(movie.revenue / 1_000_000).toFixed(2)} M` : 'N/A'} />
        </View>

        <MovieInfo Label="Production Companies" value={movie?.production_companies?.map((c) => c.name).join(', ') || 'N/A'} />
      </View>
    </ScrollView>

    <TouchableOpacity className="absolute bottom-5 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50" onPress={() => window.history.back()}>
      {/*<Text className="text-white font-bold text-sm">Watch Now</Text>*/}
      <Image source={icons.arrow} className="size-5 mr-1 mt-0.5 rotate-180" tintColor="#fff" />
      <Text className="text-white font-semibold text-base">Go Back</Text>
    </TouchableOpacity>

    </View>
  )
}

export default MovieDetails 

