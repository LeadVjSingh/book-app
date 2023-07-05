import { StyleSheet, Text, View, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";

export default function DetailsScreen({ route }) {
  route.params = {
    item: {
      id: "1",
      title: "레이블라우스",
      description:
        "Description of the book...\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      discount: "10%",
      price: "57,600",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    },
  };
  return (
    <SafeAreaView style={styles.container}>
    <View >
      <View style={styles.imageViewBox}>
        <Image
          source={{ uri: route.params.item.src }}
          style={styles.imageBox}
        />
      </View>
      <View style={styles.tddpBox}>
        <Text style={styles.titleBox}>{route.params.item.title} </Text>
        <Text style={styles.descriptionBox}>
          {route.params.item.description}
        </Text>
        <View style={styles.discountPriceBox}>
          <Text style={styles.discountBox}>{route.params.item.discount}</Text>
          <Text style={styles.priceBox}>{route.params.item.price} 원</Text>
        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 50,
    backgroundColor: "#ffffff",
  },

  item: {
    // padding: 20,
    fontSize: 15,
    // marginTop: 5,
  },
  descriptionBox: {
    // paddingVertical: 10,
    fontSize: 12,
    marginLeft: 16,
    marginTop: 8,
    // paddingStart: 5,
    // paddingEnd: 16,
    color: "#000000",
    fontWeight: '400',
    width: 343,
    height: 137,
  },
  titleBox: {
    // paddingVertical: 10,
    fontSize: 16,
    // paddingStart: 5,
    // paddingEnd: 16,
    color: "#000000",
    fontWeight: '700',
    marginLeft: 16,
    marginTop: 8,

  },
  imageBox: {
    height: 450,
    width: 375,
    alignSelf: "center",
  },
  discountBox: {

    // paddingVertical: 10,
    fontSize: 14,
    // paddingStart: 5,
    // paddingEnd: 16,
    color: "#FF003E",
    fontWeight: '700',
    width: 50, //text width is mention is 27px but facing issue in this width but current width is 30 for resolve to issue
    height: 18,
    marginTop: 91,
    marginLeft: 16,
  },
  priceBox: {
    // paddingVertical: 10,
    fontSize: 14,
    // paddingStart: 5,
    // paddingEnd: 16,
    // paddingTop: 765,
    // alignSelf: "flex-end",
    // textAlign: 'left',
    color: "#000000",
    fontWeight: '700',
    width: 93,
    height: 18,
    marginLeft: 238,
    marginTop: 91,
  },
  imageViewBox: {
    backgroundColor: "#ffffff",
    // margin: 5,
  },
  tddpBox: {
    backgroundColor: "#ffffff",
    // margin: 5,
  },
  discountPriceBox: {
    alignItems: "stretch",
    flexDirection: "row",
  },
});
