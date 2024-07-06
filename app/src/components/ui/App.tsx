import { ThemeProvider } from "@/components/theme-provider";
import { RouterManager } from "@/router/router-manager";
import Loading from "@/components/loading";
import { Toaster } from "@/components/ui/toaster";
const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RouterManager />
    <Loading />
    <Toaster />
    {/* <FeedbackDialog /> */}
  </ThemeProvider>
);

export default App;
