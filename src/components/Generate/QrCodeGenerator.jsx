import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import s from "./qrCodeGenerator.module.css";
import { GENERATE_DATA } from "../../constants";

const QrCodeGenerator = () => {
  // let test = "1";
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const onClickHeandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    setValue(event.target.value);
    setResult("");
  };

  console.log("result", result);
  return (
    <div className={s.container}>
      <input
        type="text"
        value={value}
        placeholder="enter text..."
        onChange={onChangeHandler}
        className={s.input}
      />
      <button type="button" onClick={onClickHeandler} className={s.button}>
        generate qr
      </button>

      {result !== "" && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={value} size={256} />
        </div>
      )}
    </div>
  );
};

export { QrCodeGenerator };
