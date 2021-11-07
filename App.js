import React from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard, ScrollView, SafeAreaView  } from "react-native"
import Tasks from "./components/Tasks"
import { useState } from "react"

const App = () => {
    const [taskNumber, setTaskNumber] = useState()
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleTasks = () =>{
      Keyboard.dismiss()
      setTaskItems([...taskItems, task])
      setTaskNumber()
      setTask(null)
    }


  return (

      <View style={styles.container}>
           <SafeAreaView style={styles.safeArea}>
         <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.textTitle}>My To Do List...</Text>
          <View style={styles.items}>
            {
              taskItems.map((item) => {
                return <Tasks text={item} number={taskNumber}/>
              })
            }
            
          </View>
        </View>

        </ScrollView>
              </SafeAreaView>

          <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWraper} >
            <TextInput style={styles.input} placeholder="Write something" value={task} onChangeText={text => setTask(text)} />
            
            <TouchableOpacity onPress={() => handleTasks()}>
              <View style={styles.addWrapper}>
                <Text  style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </View>

  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#1F1D36"
  },
   tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  textTitle: {
      fontSize: 24,
    fontWeight: 'bold',
    color: "white"
  },
  items: {
    marginTop: 30
  },
  writeTaskWraper: {
    padding: 20,
    margin: 5,
    position: "absolute",
    bottom: 60,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",

  },
  input: {
    backgroundColor: "white",
    width: "60%",
    padding: 15,
    borderRadius: 20,

  },
  addWrapper: {
    width: 45,
    height: 45,
    backgroundColor: "#678983",
    borderRadius: 30,
    textAligment: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  addText: {
    fontSize: 30,
    color: "white"
  }
})

export default App