import { ThemeProvider } from "@/components/theme-provider";
import { RouterManager } from "./router/router-manager";

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterManager />
    {/* <Loading />
      <FeedbackDialog /> */}
  </ThemeProvider>
);

export default App;
