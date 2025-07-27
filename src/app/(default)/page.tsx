import Hero from "../lib/components/hero";
import ScrollFadeText from "../lib/components/scrollFadeText";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="">
        <ScrollFadeText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          className="text-2xl text-center font-medium max-w-xl mx-auto"
          start="top 40%"
          height="200vh"
        />
      </div>
    </>
  );
}
