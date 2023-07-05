// navigate
import { NavigationContainer } from "@react-navigation/native";
// buttons
import { Tab } from "./TabView.utils";
// icons
import { AntDesignIcons, EvilIcons } from "../utilities/icons";
// views
import SettingsView from "./SettingsView/SettingsView";
import TransportStackView from "./TransportStackView/TransportStackView";
// localisation
import { useTranslation } from "react-i18next";
// consts
import { TabViewNamesEnum, TabViewTitlesEnum } from "./TabView.consts";
import { APP_TITLE } from "../constants";
import { View } from "react-native";
// components
import CustomText from "../components/CustomText/CustomText";

const TabView: React.FC = () => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      {/* title */}
      <CustomText align="center" size="medium">
        {APP_TITLE}
      </CustomText>
      {/* two tabs - Settings and Transport */}
      <NavigationContainer>
        <Tab.Navigator initialRouteName={TabViewNamesEnum.transport}>
          <Tab.Screen
            options={{
              tabBarLabel: `${t(TabViewTitlesEnum.transport)}`,
              tabBarIcon: (props) => <AntDesignIcons name="car" {...props} />,
              headerShown: false,
            }}
            name={TabViewNamesEnum.transport}
            component={TransportStackView}
          />
          <Tab.Screen
            options={{
              tabBarLabel: `${t(TabViewTitlesEnum.settings)}`,
              tabBarIcon: (props) => <EvilIcons name="gear" {...props} />,
              headerShown: false,
            }}
            name={TabViewNamesEnum.settings}
            component={SettingsView}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default TabView;
