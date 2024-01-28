import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full bg-white p-3 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] hover:shadow-2xl hover:shadow-primary/20 rounded-xl">
      <div className="wow fadeInUp flex justify-center flex-col items-center p-3" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-black/60">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
