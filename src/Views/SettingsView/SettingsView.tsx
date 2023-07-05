import { useState } from "react";
import { Switch, Text, View } from "react-native";
// localisation
import { useTranslation } from "react-i18next";
import SettingsViewStyles from "./SettingsView.styles";

const SettingsView: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const { t, i18n } = useTranslation();

  const handleSwitch = () => {
    if (i18n.language === "РУ") {
      i18n.changeLanguage("EN");
    } else {
      i18n.changeLanguage("РУ");
    }
    setIsEnabled(!isEnabled);
  };

  return (
    <View style={SettingsViewStyles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>{t("tabs.settings.toggle_title")}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Switch
          trackColor={{ false: "blue", true: "red" }}
          ios_backgroundColor="#3e3e3e"
          onChange={handleSwitch}
          value={isEnabled}
        />
        <Text>{i18n.language}</Text>
      </View>
    </View>
  );
};

export default SettingsView;
