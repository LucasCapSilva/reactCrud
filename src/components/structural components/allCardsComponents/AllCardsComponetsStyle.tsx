import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    marginVertical: "5%",
    backgroundColor: '#FFFFFF',
    borderColor: "#cecece",
    borderRadius: 10,
    paddingVertical: "10%",
    width: "100%"

  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: "5%",
    marginVertical: "3%"
  },
  image: {
    width: 250,
    height: 250,
  },
  textItem: {
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonRegister:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    alignSelf:"center",
    borderColor:"#28A745",
    backgroundColor:"#28A745",
    padding: 15,
    borderWidth: 1,
    borderRadius:20,
    width:"70%",
    marginVertical:"2%",
  },
  buttonText:{
    fontSize: 20,
    fontWeight: "bold",
    color:"#FFFFFF"
   
  }
});

