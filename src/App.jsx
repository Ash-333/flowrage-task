import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      
        <NavBar />
        <Home />
        <QueryClientProvider client={queryClient}>
        <Projects />
        </QueryClientProvider>
        <Contact />
      
    </>
  );
}

export default App;
