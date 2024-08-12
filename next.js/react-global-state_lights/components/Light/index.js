import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ name, isOn, id, handleToggle }) {
  //removed state isOn

  function onToggle() {
    handleToggle(id);
  }

  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle();
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
