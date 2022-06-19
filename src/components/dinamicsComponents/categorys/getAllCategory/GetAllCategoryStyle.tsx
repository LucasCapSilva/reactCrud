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
});

