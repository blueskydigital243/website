import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "MyPandos",
    href: "https://reactjs.dev",
    image: "/images/brands/reactjs.png",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "https://nextjs.com",
    image: "/images/brands/nextjs.png",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "https://graphql.com",
    image: "/images/brands/graphql2.png",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "https://typescript.com",
    image: "/images/brands/typescript.svg",
  },
  {
    id: 5,
    name: "GrayGrids",
    href: "https://python.com",
    image: "/images/brands/Python.png",
  },
  {
    id: 6,
    name: "TailAdmin",
    href: "https://nestjs.com",
    image: "/images/brands/nestjs2.png",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px] p-24"
              data-wow-delay=".1s
              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-20 w-full transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100 "
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};
