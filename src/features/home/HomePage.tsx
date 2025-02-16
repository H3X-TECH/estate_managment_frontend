import estate_one from "~/assets/estate_1.jpg";
import estate_two from "~/assets/estate_2.jpg";
import estate_three from "~/assets/estate_3.jpg";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "~/lib/fetcher";
import { useAuthStore } from "~/stores/auth";
import HeroSection from "./components/HeroSection";
import FilterSection from "./components/FilterSection";
import PropertyCard from "~/components/PropertyCard";

const sample_images = [
  {
    src: estate_one,
    alt: "Estate 1",
  },
  {
    src: estate_two,
    alt: "Estate 2",
  },
  {
    src: estate_three,
    alt: "Estate 3",
  },
];
const HomePage = () => {
  // const { data } = useQuery({
  //   queryKey: ["/profile"],
  //   queryFn: async () => {
  //     return await fetcher("get", "/auth/profile");
  //   },
  // });

  // const { accessToken, refreshToken } = useAuthStore();

  // console.log("profile data ", data);

  // console.log("tokens ", accessToken, refreshToken);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FilterSection />
      <div className="max-w-screen-xl px-4 mx-auto py-10">
        <section className="py-8">
          <h2 className="text-3xl font-bold">Why eainsharmal?</h2>
          <p className="text-base mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            repellat inventore, quos cum odit blanditiis accusamus est, saepe
            aperiam nostrum voluptatibus in consequuntur dolor, placeat eaque
            modi iusto tempora labore! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ea asperiores facere quasi dolore itaque similique
            vel repellendus nihil, fugit corrupti quia qui praesentium alias! Ex
            error a et dolores autem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur qui nesciunt, vitae possimus
            assumenda corrupti hic culpa aliquid at quos aliquam et fugiat.
            Asperiores, laudantium velit. Laborum molestiae distinctio eveniet.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            molestiae facilis, tempore laborum esse, illum modi ullam
            consequuntur itaque fugit error nobis earum deleniti cum accusamus,
            neque sit ducimus in.
          </p>
        </section>
        <section className="py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold">Featured Posts</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="basis-1/3">
              <PropertyCard images={sample_images} title="Estate One" />
            </div>
            <div className="basis-1/3">
              <PropertyCard images={sample_images} title="Estate Two" />
            </div>
            <div className="basis-1/3">
              <PropertyCard images={sample_images} title="Estate Three" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
