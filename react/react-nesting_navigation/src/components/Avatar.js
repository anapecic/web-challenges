import Image from "./Image";
import avatar from "../img/avatar.jpg";

export default function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image alt="avatar" src={avatar} />
    </button>
  );
}
