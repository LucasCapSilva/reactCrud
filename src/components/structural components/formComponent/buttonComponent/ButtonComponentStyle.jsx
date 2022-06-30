import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    none:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        paddingTop:"2%"
        
    },
    default: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderColor:"#007BFF",
        backgroundColor:"#007BFF",
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        width: "95%",
        marginVertical: "2%",
        marginHorizontal: "2%"
    },
    sucess: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderColor:"#007BFF",
        backgroundColor:"#007BFF",
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        width: "95%",
        marginVertical: "2%",
        marginHorizontal: "2%"
    },
    warning: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderColor: "#FFC107",
        backgroundColor: "#FFC107",
        padding: 10,
        borderWidth: 1,
        borderRadius: 20,
        width: "95%",
        marginVertical: "2%",
        marginHorizontal: "2%"
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
        width: "95%",
        marginVertical: "2%",
        marginRight: "2%"
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#FFFFFF"
    }
    ,
    buttonTextNoDecorator: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#007BFF",
    }
});