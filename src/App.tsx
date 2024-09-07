import About from "./components/About";
import Blogs from "./components/Blogs";
import Education from "./components/Education";
import Expereince from "./components/Experience";
import Information from "./components/Information";
import ProfileDetails from "./components/ProfileDetails";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ThemeProvider } from "./theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="md:flex max-w-5xl mx-auto md:p-6 p-2">
        <div className="flex flex-col gap-4 md:max-w-80">
          <ProfileDetails />
          <About />
          <Information />
        </div>
        <div className="md:ml-4 w-full mt-4 md:mt-0">
          <Tabs defaultValue="experience">
            <TabsList className="grid w-full grid-cols-3 bg-white dark:bg-gray-800 sticky top-0 z-10 md:static shadow-lg md:shadow-none">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="blog">Blogs</TabsTrigger>
            </TabsList>
            <TabsContent value="experience">
              <Expereince />
            </TabsContent>
            <TabsContent value="education">
              <Education />
            </TabsContent>
            <TabsContent value="blog">
              <Blogs />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
