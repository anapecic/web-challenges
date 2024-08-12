import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";
import { uid } from "uid";

const rooms = [
  { name: "Living Room", id: uid(), isOn: false },
  { name: "Kitchen", id: uid(), isOn: false },
  { name: "Bedroom", id: uid(), isOn: false },
  { name: "Bathroom", id: uid(), isOn: false },
  { name: "Garage", id: uid(), isOn: false },
  { name: "Porch", id: uid(), isOn: false },
  { name: "Garden", id: uid(), isOn: false },
  { name: "Office", id: uid(), isOn: false },
];

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(rooms);
  const sumLightsOn = isOn.filter((room) => room.isOn === true).length;
  const isDimmed = sumLightsOn === 8 ? false : true;

  function handleToggle(id) {
    setIsOn(
      isOn.map((room) =>
        room.id === id ? { ...room, isOn: !room.isOn } : room
      )
    );
  }

  function onTurnAllOff() {
    setIsOn(isOn.map((room) => (room ? { ...room, isOn: false } : room)));
  }

  function onTurnAllOn() {
    setIsOn(isOn.map((room) => (room ? { ...room, isOn: true } : room)));
  }

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        isOn={isOn}
        handleToggle={handleToggle}
        sumLightsOn={sumLightsOn}
        onTurnAllOn={onTurnAllOn}
        onTurnAllOff={onTurnAllOff}
      />
    </Layout>
  );
}
