import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import Productcard from "@/components/Productcard";

export default function Home() {
  return (
    <main>
      <Hero />
      <Heading />

      <div
        className={`grid grid-cols-1 md:grid-cols-2 
    lg:grid-cols-3 gap-5 px-5 md:px-32 my-14`}
      >
        <Productcard />
        <Productcard />
        <Productcard />
      </div>
    </main>
  );
}
