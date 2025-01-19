import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <div className="container mx-auto max-w-screen-xl p-10 md:p-20">
        <Stats />
      </div>
    </main>
  );
};

export default HomePage;
