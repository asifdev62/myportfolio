import Banner from "./components/Banner";
import WhatIDo from "./components/WhatIDo";
import LatestProjects from "./components/LatestProjects";
import CurrentlyExploring from "./components/CurrentlyExploring";
import ConnectCTA from "./components/ConnectCTA";

export default function Home() {
  return (
    <div>
      <Banner />
      <WhatIDo />
      <LatestProjects />
      <CurrentlyExploring />
      <ConnectCTA />
    </div>
  );
}
