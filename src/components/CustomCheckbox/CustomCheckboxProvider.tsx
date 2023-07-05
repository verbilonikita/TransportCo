import React, { cloneElement, memo, useState } from "react";
import { View } from "react-native";
import { TransportTypeEnum } from "../../constants";

export interface ICustomCheckboxProvider {
  children: React.ReactNode[] | React.ReactNode;
  setCheckboxState: (param: TransportTypeEnum) => void;
  checkboxState: string;
}

const CustomCheckboxProvider: React.FC<ICustomCheckboxProvider> = ({
  children,
  setCheckboxState,
  checkboxState,
}) => {
  const handleChange = (newValue: TransportTypeEnum) => {
    setCheckboxState(newValue);
  };
  const updatedChildren = React.Children.toArray(children).map((node, i) => {
    return cloneElement(node as React.ReactElement, {
      key: i,
      checkboxState,
      handleChange,
    });
  });
  return (
    <View style={{ gap: 10, flexDirection: "row" }}>{updatedChildren}</View>
  );
};

export default memo(CustomCheckboxProvider);
