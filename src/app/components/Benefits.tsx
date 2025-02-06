import React from "react";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: string;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}

const Benefits: React.FC<BenefitsProps> = ({ data, imgPos }) => {
  return (
    <section className="flex flex-wrap mb-20 mt-20 lg:gap-10 lg:flex-nowrap">
      {/* Imagem */}
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 ${
          (imgPos || data.imgPos) === "right" ? "lg:order-1" : ""
        }`}
      >
        <img src={data.image} alt="Benefício" className="w-full max-w-lg" />
      </div>

      {/* Texto e Benefícios */}
      <div
        className={`flex flex-wrap items-center w-full lg:w-1/2 ${
          (imgPos || data.imgPos) === "right" ? "lg:justify-end" : ""
        }`}
      >
        <div>
          <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            {data.title}
          </h3>
          <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
            {data.desc}
          </p>

          {/* Lista de Benefícios */}
          <div className="w-full mt-5">
            {data.bullets.map((item, index) => (
              <Benefit key={index} title={item.title} icon={item.icon}>
                {item.desc}
              </Benefit>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface BenefitProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Benefit: React.FC<BenefitProps> = ({ title, icon, children }) => {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11">
        {React.isValidElement(props.icon) ? (
         React.cloneElement(props.icon, {
    className: "w-7 h-7 text-indigo-50"
  })
) : null}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">{children}</p>
      </div>
    </div>
  );
};

export default Benefits;
