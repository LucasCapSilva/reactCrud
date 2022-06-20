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
  buttonSend:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    borderColor:"#DC3545",
    backgroundColor:"#DC3545",
   padding:10,
    borderWidth: 1,
    borderRadius:20,
    width:"35%",
    marginVertical:"2%",
    marginRight:"2%"
   
  },
  buttonBack:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:"center",
    borderColor:"#007BFF",
    backgroundColor:"#007BFF",
   padding:10,
    borderWidth: 1,
    borderRadius:20,
    width:"35%",
    marginVertical:"2%",
    marginLeft:"2%"
   
  },
  buttonText:{
    fontSize: 15,
    fontWeight: "bold",
    color:"#FFFFFF"
   
  }
});

