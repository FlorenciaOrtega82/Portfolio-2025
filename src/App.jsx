import React from "react";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

const App = () => {
    const hasAnimated = useIntersectionObserver();
    const showScrollTop = useScrollToTop();

    return (
        <div className="min-h-screen bg-white text-black">
            <Navigation />
            <Hero hasAnimated={hasAnimated} />
        </div>
    );
};

export default App;
