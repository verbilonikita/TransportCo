// navigate
import { NavigationContainer } from "@react-navigation/native";
// buttons
import { Tab } from "./TabView.utils";
// icons
import { AntDesignIcons, EvilIcons } from "../utilities/icons";
// views
import SettingsView from "./SettingsView/SettingsView";
import TransportTabView from "./TransportTabView/TransportTabView";
// localisation
import { useTranslation } from "react-i18next";
// consts
import { TabViewRouteNamesEnum, TabViewTitlesEnum } from "./TabView.consts";
import { APP_TITLE } from "../constants";
import { View } from "react-native";
// components
import CustomText from "../components/CustomText/CustomText";

const TabView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      <CustomText align="center" size="medium">
        {APP_TITLE}
      </CustomText>
      <NavigationContainer>
        <Tab.Navigator initialRouteName={TabViewRouteNamesEnum.transport}>
          <Tab.Screen
            options={{
              tabBarLabel: `${t(TabViewTitlesEnum.transport)}`,
              tabBarIcon: (props) => <AntDesignIcons name="car" {...props} />,
              headerShown: false,
            }}
            name={TabViewRouteNamesEnum.transport}
            component={TransportTabView}
          />
          <Tab.Screen
            options={{
              tabBarLabel: `${t(TabViewTitlesEnum.settings)}`,
              tabBarIcon: (props) => <EvilIcons name="gear" {...props} />,
              headerShown: false,
            }}
            name={TabViewRouteNamesEnum.settings}
            component={SettingsView}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default TabView;
