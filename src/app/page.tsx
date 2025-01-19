import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <div className="container mx-auto max-w-screen-xl px-10 md:px-20 py-10 md:py-10">
        <Stats />
      </div>
    </main>
  );
};

export default HomePage;
