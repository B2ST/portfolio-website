import Home from "./home";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {Home()}
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
