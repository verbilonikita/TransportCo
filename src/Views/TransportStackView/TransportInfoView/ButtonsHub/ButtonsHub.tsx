import { memo, useContext } from "react";
import { Button, Linking, View } from "react-native";
// utils
import { TransportInfoViewContext } from "../TransportInfoView.utils";
// localisation
import { useTranslation } from "react-i18next";
// styles
import { ButtonsHubStyles } from "./ButtonsHub.styles";
// consts
import { ButtonsHubBtnsEnum, default_message } from "./ButtonsHub.consts";

const ButtonsHub = () => {
  const { t } = useTranslation();
  const { driver } = useContext(TransportInfoViewContext);

  const onCallPress = async () => {
    try {
      await Linking.openURL(`tel:${driver?.phone_number}`);
    } catch (err) {
      console.error(err);
    }
  };

  const onMessagePress = async () => {
    const whatsAppUrl = `https://wa.me/${
      driver?.phone_number
    }?text=${encodeURIComponent(default_message)}`;

    try {
      const res = await Linking.canOpenURL(whatsAppUrl);

      if (res) {
        Linking.openURL(whatsAppUrl);
      } else {
        console.log("WhatsApp not installed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={ButtonsHubStyles.container}>
      <Button
        title={t(ButtonsHubBtnsEnum.call)}
        onPress={onCallPress}
        color="blue"
      />
      <Button
        title={t(ButtonsHubBtnsEnum.whatsapp)}
        onPress={onMessagePress}
        color="green"
      />
    </View>
  );
};

export default memo(ButtonsHub);
