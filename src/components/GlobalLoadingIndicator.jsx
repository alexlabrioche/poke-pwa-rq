import { useIsFetching } from "react-query";

export default function GlobalLoadingIndicator() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <div
      style={{
        position: "absolute",
        bottom: "1rem",
        right: "1rem",
        fontWeight: "bold",
        fontSize: "0.8rem",
      }}
    >
      Mise à jour des données en arrière plan...
    </div>
  ) : null;
}
