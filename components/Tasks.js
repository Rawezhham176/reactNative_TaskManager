import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Tasks = (props) => {
    return (
            <TouchableOpacity>
        <View style={styles.item}>
        
            <View style={styles.itemLeft}>
                
                <Text style={styles.text}>{props.number} {props.text}</Text>
            </View>
          
        </View>
          </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#17D7A0",
        borderRadius: 10,
        padding: 20,
        justifyContent: "space-between",
        flexDirection: "row",
        felx: 0.5,
        alignItems: "center",
        marginBottom: 20,
        width: "50%",
        boxShadow: "2px 2px 2px black"
    },
    itemLeft: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItem: "center"
    },
    text: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

})

export default Tasks