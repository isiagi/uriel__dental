import Page from "./Page";
import "./dynamic.css";

function Dynamic({ route }) {
  return (
    <div>
      {(() => {
        switch (route) {
          case "treat":
            return <Page />;
          case "try":
            return <Page />;

          default:
            break;
        }
      })()}
    </div>
  );
}

export default Dynamic;
