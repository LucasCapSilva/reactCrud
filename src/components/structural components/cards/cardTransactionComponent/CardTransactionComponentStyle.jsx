import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerCard: {
       width: "100%",
       paddingVertical: 1,
       borderRadius:25
        
    },flexContainerCard:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:"5%",
       
    },flexContainerItem:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:"5%",
        marginHorizontal:"0%",
    }
    , title: {
        fontSize: 20,
        color:  '#025159',
        fontWeight: "bold",
        marginVertical: 5,
    }, SubTitle: {
        fontSize: 18,
        color:  '#E3371E',
        fontWeight: "bold",
        marginVertical: 5,
        
    }, paragraph: {
        fontSize: 15,
        color:  '#3E848C',
        fontWeight: "bold",
        marginVertical: 5,
    }

});

