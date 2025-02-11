export default function HeroSection() {
  return (
    <section className="h-[400px] -z-20 w-full bg-[url('/hero_cover.webp')] bg-cover bg-left bg-no-repeat relative">
      <div className="absolute -z-10 inset-0 backdrop-brightness-75"></div>
      <div className="w-full max-w-screen-xl mx-auto h-full flex items-center justify-center">
        <div className="p-4">
          <h4 className="text-4xl text-white font-semibold">
            Find the Right Home at the Right Place
          </h4>
          <p className="text-white text-lg font-medium w-10/12">
            Explore a wide range of properties that suit your needs and budget.
            Whether you're looking for a cozy apartment or a spacious house, we
            have the perfect home for you. Start your journey with us today!
          </p>
        </div>
      </div>
    </section>
  );
}
