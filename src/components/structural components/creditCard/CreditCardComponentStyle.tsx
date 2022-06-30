import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCard: {
       backgroundColor:"#626973",
       width: "100%",
       height:220,
       borderRadius:30
        
    },flexContainerCard:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:"5%",
        marginHorizontal:"7%",
    }, title: {
        fontSize: 30,
        color:  '#FFFFFF',
        fontWeight: "bold",
        marginVertical: 5,
    }, SubTitle: {
        fontSize: 25,
        color:  '#FFFFFF',
        fontWeight: "bold",
        marginVertical: 5,
        
    }, paragraph: {
        fontSize: 18,
        color:  '#FFFFFF',
        fontWeight: "bold",
        marginVertical: 5,
    }

});

