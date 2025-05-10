import Navigation from "./components/navigation/navigation.component";
import Logo from "./components/logo/logo.component";
import ImageLinkForm from "./components/image-link-form/image-link-form.component";
import Rank from "./components/rank/rank.component";

import ParticlesBg from "particles-bg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ParticlesBg type="cobweb" num={150} bg={true} className="particles" />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
