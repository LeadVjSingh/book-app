import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  ActivityIndicator,
  // Button,
  // TouchableNativeFeedback,
  TouchableHighlight,
} from "react-native";
import myItemSeparator from "./myItemSeparator";
import myListEmpty from "./myListEmpty";
import { useState, useEffect } from "react";
import SafeAreaView from "react-native-safe-area-view";

const apiResponse = [
  {
    id: "1",
    title: "레이블라우스",
    description: "book details",
    dicount: "10%",
    price: "57,600",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
  },
  {
    id: "2",
    title: "레이블라우스",
    description: "book details",
    dicount: "10%",
    price: "57,600",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
  },
  {
    id: "3",
    title: "레이블라우스",
    description: "book details",
    dicount: "40%",
    price: "57,600",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
  },
  {
    id: "4",
    title: "레이블라우스",
    description: "book details",
    dicount: "40%",
    price: "57,600",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
  },
];

export default function BookList({ navigation }) {
  const [refreshing, setRefreshing] = useState(true);
  const [data, setData] = useState([...apiResponse]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadUserData();
  }, []);
  const uniqueId = 1;

  const loadUserData = () => {
    setIsLoading(true);
    // Simulating an API call
    setTimeout(() => {
      data.map((element) => element.id + Math.random().toString());
      setData((prevData) => [...prevData, ...data]);
      setPage((prevPage) => prevPage + 1);
      setRefreshing(false);
    }, 1500);
    setIsLoading(false);

    // clear timer
  };
  const handleLoadMore = () => {
    if (!isLoading) {
      loadUserData();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        renderItem={({ item }) => {
          return (
            <View>
              {refreshing || isLoading ? <ActivityIndicator /> : null}
              <View style={styles.itemBox}>
                <View>
                  <TouchableHighlight
                    onPressOut={() => navigation.navigate("Details", { item })}
                  >
                    <Image source={{ uri: item.src }} style={styles.imageBox} />
                  </TouchableHighlight>
                </View>
                <View style={styles.titleDiscountPriceBox}>
                  <Text style={styles.titleBox}>{item.title}</Text>

                  <View style={styles.priceDiscountBox}>
                    <Text style={styles.discountBox}>{item.dicount}</Text>

                    <Text style={styles.priceBox}>{item.price} 원</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
        }
        ListHeaderComponent={() => <Text style={styles.headerBox}>자유톡</Text>}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.333}
      ></FlatList>
    </SafeAreaView>
  );
}

//styles to see the data more clearly

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemBox: {
    height: 257,
    width: 187,
  },
  imageBox: {
    height: 187,
    width: 187,
    paddingTop: 16,
  },
  titleBox: {
    width: 156,
    height: 14,
    marginTop: 8,
    fontSize: 14,
    fontWeight: "500",
    color: "#1D232B",
  },
  discountBox: {
    width: 30, //text width is mention is 27px but facing issue in this width but current width is 30 for resolve to issue
    height: 14,
    marginRight: 50,
    fontSize: 14,
    color: "#FF003E",
    // width: "100%",
    fontWeight: "700",
  },
  priceBox: {
    width: 78, //text width is mention is 27px but facing issue in this width but current width is 30 for resolve to issue
    height: 16,
    fontSize: 16,
    color: "#080A0C",
    // width: "100%",
    fontWeight: "700",
  },
  priceDiscountBox: {
    width: 156,
    height: 16,
    marginBottom: 16,
    marginTop: 16,
    flexDirection: "row",
  },
  headerBox: {
    height: 48,
    width: 375,
    fontSize: 18,
    textAlign: "center",
    paddingTop: 13,
    paddingBottom: 17,
    fontWeight: 700,
    color: "#1D232B",
  },
  titleDiscountPriceBox: {
    width: 156,
    height: 70,
    marginLeft: 16,
    marginRight: 16,
  },
});
