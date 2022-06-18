import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
height:"100%",
    backgroundColor: '#EDEDED',
    padding: "5%"
  },
  title: {
    color: "#DA5E61",
    fontSize: 25,
    marginVertical: 20,
    fontWeight: "bold"
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:"5%",
    backgroundColor: '#FFFFFF',
    borderColor:"#cecece",
    borderRadius: 10,
    padding:"5%",
    width: "100%"

  },
  cardItem:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textItem: {
    fontSize: 25,
    fontWeight: "bold"
  },
  buttonItem:{
    marginLeft:"10%"
  }
});

