import { SafeAreaView, View } from "react-native";
// localisation
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LANGUAGE_RESOURCES } from "./src/localisation";
// views
import TabView from "./src/Views/TabView";

i18n.use(initReactI18next).init({
  resources: LANGUAGE_RESOURCES,
  compatibilityJSON: "v3",
  lng: "РУ",
  interpolation: {
    escapeValue: true,
  },
});

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <TabView />
    </View>
  );
};

export default App;
