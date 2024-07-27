import { QRCodeSVG } from "qrcode.react";
import { SCAN_DATA } from "../constants";

export const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || "[]");
  console.log(data);

  return (
    <div
      style={{
        border: "1px solid",
        borderRadius: "5px",
        margin: "50px 15px",
        color: "white",
        fontSize: "20px",
        background: "#2F4858",
      }}
    >
      {data.map((text) => (
        <div
          key={text}
          style={{ padding: "5px", borderBottom: "1px solid #fff" }}
        >
          <p style={{ margin: "0" }}>{text}</p>
          <QRCodeSVG value={text} size={100} />
        </div>
      ))}
    </div>
  );
};
