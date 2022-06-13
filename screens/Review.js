import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image, StyleSheet, TextInput, Alert } from "react-native";

export default function ReviewScreen() {
  const [defaultRating, setDefaultRating] = useState()
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5])

  const starImgFilled = "https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png"
  const starImgCorner = "https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png"

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity 
              activeOpacity={0.7} 
              key={item}
              onPress={() => setDefaultRating(item)}>
                <Image 
                style={styles.starImgStyle}
                source={
                  item <= defaultRating
                  ? {uri: starImgFilled}
                  : {uri: starImgCorner}
                }/>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const [review, onChangeReview] = React.useState(null);
  const [stall, onChangeStall] = React.useState(null);

  function SubmitPressed() {
    Alert.alert (
    "Review submitted", 
    "Thank you.", 
    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.stall}
        onChangeText={onChangeStall}
        value={stall}
        placeholder="Stall name"
      />
      <CustomRatingBar />
      <TextInput
        style={styles.review}
        onChangeText={onChangeReview}
        value={review}
        placeholder="Your review"
      />
      <TouchableOpacity onPress={SubmitPressed}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    padding: 10, 
    justifyContent: "center", 
    backgroundColor: "#f7f4e3", 
    borderWidth: 3, 
    borderColor: "#eedbc0", 
  }, 
  stall: {
    height: 50, 
    marginBottom: 30, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 25, 
    backgroundColor: "#fdfdfd", 
    alignSelf: "flex-start", 
    marginLeft: 10, 
    left: 0, 
  }, 
  customRatingBarStyle: {
    justifyContent: "center", 
    flexDirection: "row", 
  }, 
  starImgStyle: {
    width: 50, 
    height: 50, 
    resizeMode: "cover", 
  }, 
  review: {
    height: 50, 
    margin: 10, 
    marginTop: 40, 
    marginBottom: 40, 
    borderWidth: 1, 
    padding: 10, 
    fontSize: 25, 
    backgroundColor: "#fdfdfd", 
  }, 
  button: {
    fontSize: 20, 
    textAlign: "center", 
    padding: 5, 
    color: "#fdfdfd", 
    backgroundColor: "#c10000", 
    borderRadius: 5, 
    height: 40, 
    width: 80, 
    alignSelf: "flex-end", 
    marginRight: 10, 
    right: 0, 
  }, 
})