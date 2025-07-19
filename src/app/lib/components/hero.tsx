import style from "../styles/hero.module.scss";
import Badge from "./badge";
import Button from "./button";

export default function Hero() {
  return (
    <section className="text-center py-50 relative overflow-hidden">
      <Badge className="mb-6" title="New feature coming soon" href="new" />
      <h1 className="text-6xl font-medium">
        Your Home <br />
        Your Roules
      </h1>
      <div className="mt-6 text-black/50">Your Open-Source Home System</div>

      <Button className="mt-12">Joint to the waitlist</Button>

      <div className="flex justify-center my-16">
        <div className="relative w-fit max-w-6xl bg-neutral-100/60 backdrop-blur-2xl rounded-2xl border border-neutral-200 p-4">
          {/* Desktop Controls */}
          <div className="hidden md:flex gap-1 mb-4">
            <div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
            <div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
            <div className="w-3 h-3 bg-neutral-300 rounded-full"></div>
          </div>

          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/02/Screenshot-2022-02-21-at-14.56.04.png"
              alt=""
            />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden absolute bottom-1.5 left-1/2 -translate-x-1/2 h-1 w-40 bg-black/60 rounded-full"></div>

          {/* Blur */}
          <div className="absolute top-0 left-0 w-full h-full -z-10">
            <div
              className={`absolute w-40 h-40 md:w-80 md:h-80 bg-purple-400 opacity-60 blur-3xl rounded-full ${style.animateSpinSlowTop} top-0 left-0`}
            ></div>
            <div
              className={`absolute w-40 h-40 md:w-64 md:h-64 bg-blue-400 opacity-60 blur-3xl rounded-full ${style.animateSpinSlowBottom} bottom-0 right-0`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
