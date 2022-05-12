
import Authenticated from "./Authenticated";
import { useAuth } from "./context/auth-context";
import UnAuth from "./UnAuth";

function App() {
  const { user } = useAuth();
  return user ? <Authenticated /> : <UnAuth />;
}

export default App;