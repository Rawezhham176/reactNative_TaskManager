import React from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

const Tasks = () => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text style={styles.text}>Tasks</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#17D7A0",
        borderRadius: 10,
        padding: 20,
        justifyContent: "space-between",
        flexDirection: "row",
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
    square: {
        backgroundColor: "#678983",
        borderRadius: 5,
        width: 20,
        height: 20,
        opacity: 0.4,
        marginRight: 20
    },
    circle: {
        borderColor: "#181D31",
        borderRadius: 5,
        borderWidth:2,
        width: 10,
        height: 10,
        opacity: 0.6
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