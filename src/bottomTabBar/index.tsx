import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Container, Dot, TabContainer } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import IconFontAwesome from "react-native-vector-icons/FontAwesome5";
import IconMaterial from "react-native-vector-icons/MaterialIcons";
import Colors from "../config/colors";

const BottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  function IconComponent({ name, size, ...rest }: any) {
    switch (name.split("-")[0]) {
      case "fa":
        return <IconFontAwesome size={32} name={name.replace("fa-", "")} {...rest} />;
      case "md":
        return <IconMaterial size={36} name={name.replace("md-", "")} {...rest} />;
      default:
        return <Icon size={36} {...rest} />;
    }
  }

  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: -5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: 10,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabContainer
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <IconComponent
              name={String(label)}
              color={isFocused ? Colors["primary"] : Colors["notActive"]}
            />
            {isFocused && (
              <Dot width="5px" height="5px" color={Colors["primary"]} />
            )}
          </TabContainer>
        );
      })}
    </Container>
  );
};

export default BottomTabBar;
