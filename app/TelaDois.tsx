import { View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import React from 'react';
import TaskListItem from "./TaskListItem";


const TelaDois = () => {
  const data = [
    { id: '1', name: 'Item 1', description: 'Description 1' },
    { id: '2', name: 'Item 2', description: 'Description 2' },
    { id: '3', name: 'Item 3', description: 'Description 3' },
    // Add more items as needed
  ];

  const renderItem = ({ item }: {item:any}) => (
    <TaskListItem task={null}/>
  );

  return (
    <View className="flex-1 m-2 mt-4">
      <Text className="text font-semibold text-2xl self-center"> Listinha </Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TelaDois;