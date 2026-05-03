import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'

const profile = () => {
  return (
    <View className="bg-primary flex-1">

      <Image source={images.bg} className="absolute w-full z-0" />

      <View className = " flex-1">
        <ScrollView contentContainerStyle={{paddingBottom: 100}}>
          <View className="items-center mt-16">
            <Image
              source={{ uri: 'https://i.pravatar.cc/150' }}
              className="w-24 h-24 rounded-full"
            />

            <Text className="text-white text-xl font-bold mt-4">
              Jack Dawson
            </Text>

            <Text className="text-gray-400 text-sm mt-1">
              jack@email.com
            </Text>
          </View>

          <View className="flex-row justify-around mt-10 px-5">
            <View className="items-center">
              <Text className="text-white text-lg font-bold">12</Text>
              <Text className="text-gray-400 text-sm">Saved</Text>
            </View>

            <View className="items-center">
              <Text className="text-white text-lg font-bold">5</Text>
              <Text className="text-gray-400 text-sm">Reviews</Text>
            </View>

            <View className="items-center">
              <Text className="text-white text-lg font-bold">20</Text>
              <Text className="text-gray-400 text-sm">Watched</Text>
            </View>
          </View>

           <View className="mt-10 px-5 gap-4">

            <TouchableOpacity className="bg-dark-100 p-4 rounded-lg flex-row items-center gap-3">
              <Image source={icons.person} className="size-5" tintColor="#fff" />
              <Text className="text-white">Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-dark-100 p-4 rounded-lg flex-row items-center gap-3">
              <Image source={icons.save} className="size-5" tintColor="#fff" />
              <Text className="text-white">Saved Movies</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-dark-100 p-4 rounded-lg flex-row items-center gap-3">
              <Image source={icons.arrow} className="size-5" tintColor="#fff" />
              <Text className="text-white">Logout</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})
