import { useEffect, useState } from "react";

const Banner = ({ children, ok }) => (
  <div
    style={{
      background: ok ? "lightseagreen" : "tomato",
      textAlign: "center",
      padding: "1rem",
    }}
  >
    {children}
  </div>
);

const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    console.log({ standalone });

    if (!standalone) {
      window.addEventListener("beforeinstallprompt", handler);
    }
    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  if (!supportsPWA) {
    return (
      <Banner ok={false}>
        <span style={{ color: "white" }}>
          Attention votre navigateur n'est pas compatible, Merci d'utiliser
          Chrome, Firefox ou Opera
        </span>
      </Banner>
    );
  }

  return (
    <Banner ok>
      <button onClick={onClick}>Installer l'App</button>
    </Banner>
  );
};

export default InstallPWA;
