import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const profile = () => {
  return (
    <View className = "bg-primary flex-1 px-10">
      <Text className = "flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-10" tintColor="#fff" />
        <Text className="text-gray-500 font-bold text-base">Prifile</Text>
      </Text>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})
