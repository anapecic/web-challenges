import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights({ isOn, handleToggle }) {
  return (
    <StyledLights>
      {isOn.map((room) => {
        return (
          <li key={room.id}>
            <Light
              name={room.name}
              isOn={room.isOn}
              id={room.id}
              handleToggle={handleToggle}
            />
          </li>
        );
      })}
    </StyledLights>
  );
}
