import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sucess: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderColor:"#007BFF",
        backgroundColor:"#007BFF",
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        width: "35%",
        marginVertical: "2%",
        marginRight: "2%"
    },
    danger: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderColor: "#DC3545",
        backgroundColor: "#DC3545",
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        width: "35%",
        marginVertical: "2%",
        marginRight: "2%"
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
});

