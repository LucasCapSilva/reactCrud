
import { StyleSheet,StatusBar } 
from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: '#FFFFFF',
    padding: "7%",
    paddingTop: StatusBar.currentHeight,
  },
miniContainer:{
marginHorizontal: "3%",
},
flexContainer:{
flexDirection:'row',
alignItems:"flex-start",
justifyContent:'center',
}
  
  });
  
