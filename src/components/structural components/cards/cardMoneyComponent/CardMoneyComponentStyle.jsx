import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCard: {
       backgroundColor:"#C4EEF2",
       width: "45%",
       paddingVertical: 10,
       borderRadius:25
        
    },containerCardDanger: {
        backgroundColor:"#FACFCE",
        width: "45%",
        paddingVertical: 10,
        borderRadius:25
         
     },flexContainerCard:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginTop:"5%",
        marginHorizontal:"0%",
    }, title: {
        fontSize: 22,
        color:  '#025159',
        fontWeight: "bold",
        marginVertical: 5,
    }, SubTitle: {
        fontSize: 25,
        color:  '#FFFFFF',
        fontWeight: "bold",
        marginVertical: 5,
        
    }, paragraph: {
        fontSize: 15,
        color:  '#3E848C',
        fontWeight: "bold",
        marginVertical: 5,
    }

});

