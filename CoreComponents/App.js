import { useState } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  // return (
  // <View
  //   style={{
  //     flex: 1,
  //     backgroundColor: "plum",
  //     padding: 60,
  //   }}
  // >
  //   <Image source={logoImg} style={{ width: 300, height: 300 }} />
  //   <Image
  //     source={{ uri: "https://picsum.photos/200" }}
  //     style={{ width: 200, height: 200 }}
  //   />
  //   <ImageBackground source={logoImg} style={{flex:1}}>
  //     <Text>Image Text</Text>
  //   </ImageBackground>
  //   </View>
  //******************************************************************************************
  // <View style={{ padding: 60, backgroundColor: "plum" }}>
  //   <ScrollView>
  //     <Image source={logoImg} style={{ width: 300, height: 300 }} />
  //     <Text>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
  //       eveniet saepe cupiditate nobis architecto quasi culpa nesciunt. Nobis,
  //       doloremque magnam alias in quod natus saepe explicabo! Exercitationem
  //       fugit unde eos. Lorem ipsum dolor sit amet consectetur adipisicing
  //       elit. Obcaecati eveniet saepe cupiditate nobis architecto quasi culpa
  //       nesciunt. Nobis, doloremque magnam alias in quod natus saepe
  //       explicabo! Exercitationem fugit unde eos. Lorem ipsum dolor sit amet
  //       consectetur adipisicing elit. Obcaecati eveniet saepe cupiditate nobis
  //       architecto quasi culpa nesciunt. Nobis, doloremque magnam alias in
  //       quod natus saepe explicabo! Exercitationem fugit unde eos.
  //       Exercitationem fugit unde eos. Lorem ipsum dolor sit amet consectetur
  //       adipisicing elit. Obcaecati eveniet saepe cupiditate nobis architecto
  //       quasi culpa nesciunt. Nobis, doloremque magnam alias in quod natus
  //       saepe explicabo! Exercitationem fugit unde eos. Exercitationem fugit
  //       unde eos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //       Obcaecati eveniet saepe cupiditate nobis architecto quasi culpa
  //       nesciunt. Nobis, doloremque magnam alias in quod natus saepe
  //       explicabo! Exercitationem fugit unde eos. Exercitationem fugit unde
  //       eos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
  //       Obcaecati eveniet saepe cupiditate nobis architecto quasi culpa
  //       nesciunt. Nobis, doloremque magnam alias in quod natus saepe
  //       explicabo! Exercitationem fugit unde eos.
  //     </Text>
  //     <Image source={logoImg} style={{ width: 300, height: 300 }} />
  //   </ScrollView>
  // </View>
  //******************************************************************************************
  // <View style={{ backgroundColor: "plum", flex: 1, padding: 60 }}>
  //   <Button
  //     title="Press"
  //     onPress={() => console.log("Button pressed")}
  //     color="midnightblue"
  //     disabled
  //   />
  // </View>
  //******************************************************************************************
  // <View style={{ padding: 60, backgroundColor: "plum" }}>
  //   <ScrollView>
  //     <Button
  //       title="Press"
  //       onPress={() => console.log("Button pressed")}
  //       color="midnightblue"
  //     />
  //     <Pressable onPress={() => console.log("Image pressed")}>
  //       <Image source={logoImg} style={{ width: 300, height: 300 }} />
  //     </Pressable>
  //     <Pressable onPress={() => console.log("Text pressed")}>
  //       <Text>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
  //         eveniet saepe cupiditate nobis architecto quasi culpa nesciunt.
  //         Nobis, doloremque magnam alias in quod natus saepe explicabo!
  //         Exercitationem fugit unde eos. Lorem ipsum dolor sit amet
  //         consectetur adipisicing elit. Obcaecati eveniet saepe cupiditate
  //         nobis architecto quasi culpa nesciunt. Nobis, doloremque magnam
  //         alias in quod natus saepe explicabo! Exercitationem fugit unde eos.
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
  //         eveniet saepe cupiditate nobis architecto quasi culpa nesciunt.
  //         Nobis, doloremque magnam alias in quod natus saepe explicabo!
  //         Exercitationem fugit unde eos. Exercitationem fugit unde eos. Lorem
  //         ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eveniet
  //         saepe cupiditate nobis architecto quasi culpa nesciunt. Nobis,
  //         doloremque magnam alias in quod natus saepe explicabo!
  //         Exercitationem fugit unde eos. Exercitationem fugit unde eos. Lorem
  //         ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eveniet
  //         saepe cupiditate nobis architecto quasi culpa nesciunt. Nobis,
  //         doloremque magnam alias in quod natus saepe explicabo!
  //         Exercitationem fugit unde eos. Exercitationem fugit unde eos. Lorem
  //         ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eveniet
  //         saepe cupiditate nobis architecto quasi culpa nesciunt. Nobis,
  //         doloremque magnam alias in quod natus saepe explicabo!
  //         Exercitationem fugit unde eos.
  //       </Text>
  //     </Pressable>
  //     <Image source={logoImg} style={{ width: 300, height: 300 }} />
  //   </ScrollView>
  // </View>
  //******************************************************************************************
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View
      style={{
        backgroundColor: "plum",
        paddingTop: 120,
        paddingStart: 60,
        paddingEnd: 60,
        flex: 1,
      }}
    >
      <Button
        title="Open"
        color="midnightblue"
        onPress={() => setIsModalVisible(true)}
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        // animationType="none" //default
        // animationType="fade"
        animationType="slide"
        // presentationStyle="fullscreen" //default  // presentationStyle only affect ios not android
        // presentationStyle="formSheet"
        presentationStyle="pageSheet"
      >
        <View style={{ backgroundColor: "lightblue", flex: 1, padding: 60 }}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 25,
              marginBottom: 30,
            }}
          >
            Modal content
          </Text>
          <Button
            title="Close"
            color="tomato"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
