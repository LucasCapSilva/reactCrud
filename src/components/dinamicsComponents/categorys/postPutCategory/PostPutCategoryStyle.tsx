import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#EDEDED',
    padding: "5%"
  },
  title: {
    color: "#DA5E61",
    fontSize: 25,
    marginVertical: "2%",
    fontWeight: "bold"
  },
  card: {
    marginVertical: "5%",
    backgroundColor: '#FFFFFF',
    borderColor: "#cecece",
    borderRadius:20,
    paddingVertical: "10%",
    width: "100%"

  },
  cardItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: "5%",
    marginVertical: "1%"
  },
  input: {
  
    margin: 12,
    width:"100%",
    fontSize:20,
    borderColor:"#adadad",
    borderWidth: 2,
    borderRadius:20,
    padding: 15,
  },
  textItem: {
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonSend:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    borderColor:"#527BFF",
    backgroundColor:"#527BFF",
    padding: 15,
    borderWidth: 1,
    borderRadius:20,
    width:"35%",
    marginVertical:"2%",
    marginLeft:"5%"
   
  },
  buttonText:{
    fontSize: 20,
    fontWeight: "bold",
    color:"#FFFFFF"
   
  }
});

