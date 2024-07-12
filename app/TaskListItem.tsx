import Modal from "react-native-modal";
import { View, Text, StyleSheet, Pressable, Switch, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import CheckBox from "@react-native-community/checkbox";

const task = [
    { id: '1', name: 'Item 1', description: 'Description 1' },
    { id: '2', name: 'Item 2', description: 'Description 2' },
    { id: '3', name: 'Item 3', description: 'Description 3' },
    // Add more items as needed
  ];

export default function TaskListItem({task} : {task:any}) {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };

    const toggleIsCompleted = () => {

      };

    return (
<>
        <Modal isVisible={isModalVisible}>
        <View className="bg bg-zinc-100 h-72 rounded-lg">
          <Pressable onPress={toggleModal}>
            <View className="flex flex-row bg-zinc-50 pt-5 pl-4 pb-2 space-y-1 rounded-b-2xl shadow">
             <View className="flex flex-col space-y-2">
              <Text className="text text-md font-semibold pr-20">
              <Text className="text font-normal"> Nome: </Text> descricao
              </Text>
              <Text className="text text-md font-semibold">
                <Text className="text font-normal"> Serviço realizado: </Text> complete
              </Text>
              </View>
              <AntDesign onPress={toggleModal} name="close" size={22} color="red" /> 
            </View>
          </Pressable>

          <View className="flex">
            <TouchableOpacity className='bg-sky-300 p-3 my-5 rounded-2xl items-center w-42 h-10 self-center shadow-md'>
              <Text className="text font-normal text-md text-gray-50"> Adicionar limpeza INTERNA </Text>
            </TouchableOpacity>
              <View className="flex items-center justify-center self-center rounded-xl p-3 mt-2 w-56 space-y-4 bg-zinc-50 shadow-md">
              <Text className="text text-lg font-light"> Marcar como feito </Text>
              
              </View>
          </View>

        </View>
      </Modal>
          <Pressable
          className="bg bg-white p-4 my-1 rounded-lg flex-row"
          onPress={toggleModal}
        >

        <View className="flex flex-row space-x-14">
          <View>
            <Text className="text font-semibold text-md pb-4">
             task descricao
            </Text>
            {/*<Text className="text text-sm"> {task.createdAt.toString()} </Text>*/}
            <Text className="text text-sm font-semibold mt-4">
              Tipo de limpeza{" "}
            </Text>
            <View className="bg-info p-0.5 w-16 rounded-xl mt-2">
              <Text className="text text-sm text-white"> Externa </Text>
            </View>
          </View>

          <View className="flex justify-end">
            <Text className="text font-light mb-2"> Limp. Externa </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#5f966" }}
      
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleIsCompleted}
            
            />
          </View>
        </View>

          {/* <AntDesign onPress={deleteTask} name="close"  size={20} color="red" /> */}
        </Pressable>
        </>            

    )
}