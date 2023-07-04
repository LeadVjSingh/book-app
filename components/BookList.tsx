import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl,
  ActivityIndicator,
  Button,
  TouchableNativeFeedback,
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
    console.log("useffect console");
  }, []);
  const uniqueId = 1;

  const loadUserData = () => {
    setIsLoading(true);
    // Simulating an API call
    console.log("useffect console outside");
    setTimeout(() => {
      console.log("useffect console  inside");
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
      console.log("conditional console");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              {refreshing || isLoading ? <ActivityIndicator /> : null}
              <View>
                <View style={{ backgroundColor: "#fff",  }}>
                  <TouchableHighlight
                    onPressOut={() => navigation.navigate("Details", { item })}
                  >
                    <Image
                      source={{ uri: item.src }}
                      style={{ height: 179, width: 178, alignSelf: "center" }}
                    />
                  </TouchableHighlight>
                </View>
                <View>
                <Text
                  style={{
                    paddingTop: 8,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#1D232B",
                    paddingLeft: 15,
                  }}
                >
                  {item.title}
                </Text>
                </View>
                <View style={{ alignItems: "stretch", flexDirection: "row" }}>
                  <Text
                    style={{
                      paddingTop: 16,
                    
                      paddingBottom: 16,
                      paddingLeft: 14,
                      fontSize: 14,
                      color: "#FF003E",
                      width: "100%",
                      fontWeight: 700,
                    }}
                  >
                    {item.dicount}
                  </Text>
                  <Text
                    style={{
                        paddingTop: 16,
                    
                        paddingBottom: 16,
                        paddingRight: 14,
                    //   paddingVertical: 3,
                      alignSelf: "flex-end",
                      fontSize: 16,
                      color: "#080A0C",
                      width: "100%",
                      fontWeight: 700,
                    }}
                  >
                    {item.price} 원
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
        // ItemSeparatorComponent={myItemSeparator}
        ListEmptyComponent={myListEmpty}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadUserData} />
        }
        ListHeaderComponent={() => (
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              marginTop: 13,
              marginBottom: 17,
              fontWeight: 700,
            //   textDecorationLine: "underline",
              color: '#1D232B',
            }}
          >
            자유톡
          </Text>
        )}
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
    // padding: 1,
    backgroundColor: '#fff'
  },
  item: {
    padding: 1,
    // fontSize: 18,
    // marginTop: 5,
  },
});
