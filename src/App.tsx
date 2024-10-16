import { ApiReferenceReact } from "@scalar/api-reference-react";
import "@scalar/api-reference-react/style.css";

function App() {
  return (
    <div>
      <ApiReferenceReact
        configuration={{
          spec: {
            url: "/petstore.yaml",
          },
        }}
      />
    </div>
  );
}

export default App;
