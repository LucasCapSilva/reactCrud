import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCard: {
       backgroundColor:"#C4EEF2",
       width: "100%",
       paddingVertical: 20,
       borderRadius:25,
       marginVertical: "5%",
    
        
    },containerCardDanger: {
        backgroundColor:"#FACFCE",
        width: "45%",
        paddingVertical: 10,
        borderRadius:25
         
     },flexContainerCard:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        
        marginHorizontal:"0%",
    }, title: {
        fontSize: 30,
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

