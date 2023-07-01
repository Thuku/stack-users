import { QueryClient, QueryClientProvider } from "react-query";
import Dashboard from ".";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard />
    </QueryClientProvider>
  );
}

export default App;
