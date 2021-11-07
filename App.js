import React from "react"
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native"
import Tasks from "./components/Tasks"
import { useState } from "react"

const App = () => {
  return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.textTitle}>Hallo Welt</Text>
          <View style={styles.items}>
            <Tasks />
            <Tasks />
          </View>
        </View>

          <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWraper} >
            <TextInput style={styles.input} placeholder="Write something"/>
            
            <TouchableOpacity>
              <View style={styles.addWrapper}>
                <Text  style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </KeyboardAvoidingView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED"
  },
   tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  textTitle: {
      fontSize: 24,
    fontWeight: 'bold'
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
    width: "100%"
  },
  input: {
    backgroundColor: "white",
    width: "60%",
    padding: 15,
    borderRadius: 20
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