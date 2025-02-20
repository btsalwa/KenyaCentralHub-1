import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import MainNav from "@/components/main-nav";
import Home from "@/pages/home";
import About from "@/pages/about";
import OurWork from "@/pages/our-work";
import Resources from "@/pages/resources";
import Symposium from "@/pages/symposium";
import Gallery from "@/pages/gallery";
import GetInvolved from "@/pages/get-involved";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/resources" component={Resources} />
          <Route path="/symposium" component={Symposium} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/get-involved" component={GetInvolved} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <footer className="bg-muted py-12 mt-20">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">
            © {new Date().getFullYear()} CA-HUB KENYA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
