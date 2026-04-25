import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons';

type MovieCardProps = {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  release_date: string;
};

const MovieCard = ({id, poster_path, title, vote_average, release_date}: MovieCardProps) => {
  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className = "w-[30%]">
        <Image source={{
          uri: poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : 'https://via.placeholder.com/600x400/1a1a1a/ffffff.png'
        }}

          className="w-full h-52 rounded-lg mb-2"
          resizeMode="cover"
        />

        <Text className="text-white text-sm font-thin mt-2" numberOfLines={1}>{title}</Text>

        <View className="flex-col gap-x-1 w-full">

          <View className="flex-row gap-x-5 w-full">
            <Text className="text-xs text-gray-400">{release_date?.split('-')[0]}</Text>
            <Text className='text-xs font-medium text-light-300 uppercase'>Movie</Text>
          </View>
          
          <View className="flex-row items-center justify-start gap-x-1">
            <Image source={icons.star} className="w-3 h-3" />
            <Text className="text-xs text-white">{vote_average.toFixed(1)}</Text>
            
          </View>

          
          
        </View>

      </TouchableOpacity>
    </Link>
  )
}

export default MovieCard