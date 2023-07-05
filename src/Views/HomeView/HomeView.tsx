import { View } from "react-native";
// stack
import { Stack } from "./HomeView.utils";
// views
import TransportMapView from "./TransportMapView/TransportMapView";
import TransportInfoView from "./TransportInfoView/TransportInfoView";
// consts
import { HomeViewStackNameEnum } from "../../constants";
import { HomeViewOther, HomeViewTitleNames } from "./HomeView.consts";
// localisation
import { useTranslation } from "react-i18next";
// styles
import AppStyles from "../../../App.styles";

const HomeView: React.FC = () => {
  const { t } = useTranslation();
  return (
    <View style={AppStyles.container}>
      <Stack.Navigator initialRouteName={HomeViewStackNameEnum.map}>
        <Stack.Screen
          name={HomeViewStackNameEnum.map}
          component={TransportMapView}
          options={{
            title: t(HomeViewTitleNames.map),
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen
          name={HomeViewStackNameEnum.info}
          component={TransportInfoView}
          options={{
            title: t(HomeViewTitleNames.info),
            headerBackTitle: t(HomeViewOther.button),
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default HomeView;
