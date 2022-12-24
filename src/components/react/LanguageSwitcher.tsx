import React from "react";
import GB from "../../assets/GB.svg";
import IT from "../../assets/IT.svg";

const LanguageSwitcher = () => {
  const [Language, setLanguage] = React.useState("IT");

  const getLanguage = () => {
    const url = window.location.href;
    if (url.includes("en/")) {
      setLanguage("EN");
    } else {
      setLanguage("IT");
    }
  };

  React.useEffect(() => {
    if (typeof window != "undefined") {
      getLanguage();
    }
  }, [typeof window != "undefined" && window.location.href]);

  const eng = Language === "EN";

  const handleLanguageSwitch = () => {
    console.log("switching language");
    if (!eng) {
      setLanguage("EN");

      if (typeof window != "undefined") {
        window.location.href =
          window.location.origin + "/en" + window.location.pathname;
      }
    } else {
      setLanguage("IT");
      // remove /en from url
      if (typeof window != "undefined") {
        window.location.href =
          window.location.origin + window.location.pathname.replace("/en", "");
        +window.location.pathname;
      }
    }
  };
  return (
    <label className={`btn btn-circle btn-ghost swap swap-rotate`}>
      <input type="checkbox" checked={eng} onChange={handleLanguageSwitch} />
      <div className="swap-on">
        <img height={12} width={24} src={GB} alt="english" />
      </div>
      <div className="swap-off">
        <img height={12} width={24} src={IT} alt="italiano" />
      </div>
    </label>
  );
};

export default LanguageSwitcher;
