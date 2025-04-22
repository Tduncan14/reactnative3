import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import PostImage from '@/assets/images/images/post-it.png';
import { useRouter } from "expo-router";

3

const HomeScreen = () => {


  const router = useRouter();




  return (
    <View style={Styles.container}>
      <Image source={PostImage} style={Styles.image} />
      <Text style={Styles.title}>Welcome To Notes App</Text>
      <Text style={Styles.subTitle}>Capture your Thoughts</Text>

      <TouchableOpacity
        style={Styles.button}
        onPress={() => router.push('/notes')}>

        <Text style={Styles.buttonText}> Get Started</Text>

      </TouchableOpacity>
    </View>
  )
}


const Styles = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa'

  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'

  },

  subTitle: {
    fontSize: 16,
    color: '#655',
    textAlign: 'center',
    marginBottom: 20
  },

  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }


})


export default HomeScreen