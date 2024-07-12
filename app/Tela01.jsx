import { View, Text, TouchableOpacity } from "react-native";
import { StatusBar } from "react-native";

export default function Tela01() {

return (
  <View className="flex-1 bg-gray-100">
  <StatusBar style="auto" />

  <View className="flex-1 bg-white rounded-t-3xl pt-20 px-5">
    <View className="flex items-center">

      <Text className="text-2xl font-bold mt-3">John Doee</Text>
      <Text className="text-gray-500">Software Engineer</Text>
    </View>
    
    <View className="mt-6">
      <Text className="text-lg font-semibold">About Me</Text>
      <Text className="text-gray-600 mt-2">
        Passionate developer with experience in building mobile applications.
        Love to learn new technologies and improve my skills.
      </Text>
    </View>

    <View className="flex-row justify-around mt-8">
      <TouchableOpacity className="bg-blue-500 rounded-lg p-3 w-28">
        <Text className="text-center text-white font-semibold">Follow</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-green-500 rounded-lg p-3 w-28">
        <Text className="text-center text-white font-semibold">Message</Text>
      </TouchableOpacity>
    </View>
  </View>
</View>
  );
}