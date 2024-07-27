import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={s.container}>
      <Link className={s.link} to="/generate">
        Generate QR code
      </Link>
      <Link className={s.link} to="/scan">
        Scan QR code
      </Link>
      <Link className={s.link} to="/scanHistory">
        Scan history
      </Link>
      <Link className={s.link} to="/generateHistory">
        Generate history
      </Link>
    </nav>
  );
};
