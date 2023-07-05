import { Button, View } from "react-native";
import { memo, useContext, useMemo, useState } from "react";

// components
import CustomCheckbox from "../../../../components/CustomCheckbox/CustomCheckbox";
import CustomCheckboxProvider from "../../../../components/CustomCheckbox/CustomCheckboxProvider";
// consts
import { TransportTypeEnum } from "../../../../constants";
// utils
import { TransportMapViewContext } from "../TransportMapView.utils";
// styles
import { FilterButtonsStyles } from "./FilterButtons.styles";
// localisation
import { useTranslation } from "react-i18next";

const FilterModalView: React.FC = () => {
  const { t } = useTranslation();

  const [checkboxState, setCheckboxState] = useState(TransportTypeEnum.all);

  const { changeTransportType } = useContext(TransportMapViewContext);

  const handlePress = () => changeTransportType?.(checkboxState);

  const checkboxes = useMemo(
    () =>
      Object.values(TransportTypeEnum).map((transportType) => {
        if (transportType === TransportTypeEnum.all) return null;
        return (
          <CustomCheckbox
            key={transportType}
            title={t(`vehicle_types.${transportType}`)}
            value={transportType}
          />
        );
      }),
    []
  );

  return (
    <View style={FilterButtonsStyles.container}>
      <CustomCheckboxProvider
        setCheckboxState={setCheckboxState}
        checkboxState={checkboxState}
      >
        {checkboxes}
      </CustomCheckboxProvider>
      <View>
        <Button onPress={handlePress} title="ОК" />
      </View>
    </View>
  );
};

export default memo(FilterModalView);
