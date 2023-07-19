import "./App.css";
import Routing from "./routing/routing";
import "../node_modules/highlight.js/styles/atom-one-dark-reasonable.css";
import { useHandleSessionQuery } from "./redux/auth";

function App() {
  const { data, isLoading, isError, isSuccess } = useHandleSessionQuery(void 0);

  return <Routing />;
}

export default App;
