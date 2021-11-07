import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native"

const width = Dimensions.get('window').width - 40;

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
        width: width / 2 - 10,
        shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginRight: 15
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
    }

})

export default Tasks