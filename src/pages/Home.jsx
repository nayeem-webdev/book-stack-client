import { Helmet, HelmetProvider } from "react-helmet-async";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>My Application</title>
        </Helmet>
        <div>
          <h1>Welcome to My App</h1>
        </div>
      </HelmetProvider>
      <Hero />
    </>
  );
};

export default Home;
