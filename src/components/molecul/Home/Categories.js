import { ScrollView } from "native-base";
import * as React from "react";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { dimWidth } from "../../../utils/helper";
import ItemCategory from "./ItemCategory";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const initialCategories = () => {
    setCategories([
      {
        id: 1,
        title: "Rumah Sakit",
        icon: "hospital",
      },
      {
        id: 2,
        title: "Peta",
        icon: "map",
      },
      {
        id: 3,
        title: "Rumah Sakit",
        icon: "hospital",
      },
      {
        id: 4,
        title: "Peta",
        icon: "map",
      },
      {
        id: 5,
        title: "Peta",
        icon: "map",
      },
    ]);
  };

  useEffect(() => {
    initialCategories();
  }, []);

  return (
    <View style={{ marginBottom: dimWidth * 0.05 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((element) => {
          return (
            <ItemCategory
              title={element.title}
              icon={element.icon}
              key={element.id}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
