import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Button = ({
  children,
  className = "",
  variant = "default",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors";
  const variants = {
    default: "bg-primary text-white hover:bg-primary/90",
    outline: "border-2 border-white text-white hover:bg-[#1a1c24]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Separator = ({ orientation = "horizontal", className = "" }) => {
  const baseClass =
    orientation === "horizontal"
      ? "w-full h-px bg-gray-300 my-4"
      : "h-full w-px bg-gray-300 mx-4";

  return <div className={`${baseClass} ${className}`} />;
};

const AchievementsAndPublications = () => {
  const achievements = [
    {
      content: {
        imageSrc: "/images/startuppoint.png",
        imageAlt: "Startup Point logo",
        height: 224,
        width: 224,
      },
      title: "2nd Place",
      category: "Award",
      description: "Startup Point 2024",
      link: "https://startuppoint.startupbraga.com/#noticias",
    },
    {
      content: {
        imageSrc: "/images/mnje.png",
        imageAlt: "National Contest for Young Entrepreneurs logo",
        height: 1336,
        width: 1134,
      },
      title: "Capgemini Prize",
      category: "Award",
      description: "National Contest for Young Entrepreneurs 2024",
      link: "https://www.fjuventude.pt/pt/noticias/fundacao/conhecidos-os-projetos-vencedores-da-mostra-nacional-de-jovens-empreendedores",
    },
  ];

  return (
    <section
      id="achievements"
      className="w-full mx-auto py-8 lg:py-16 scroll-mt-[80px]"
    >
      {/* Awards Section */}
      <div id="achievements" className="mt-24 space-y-10">
        <h1 className="mt-24 mb-8 text-3xl sm:text-5xl lg:text-5xl font-semibold text-blue-200 font-poppins text-left">
          Awards & Recognition
        </h1>
        <div className="flex flex-col mb-8 lg:mb-16">
          <Separator />
          {achievements.map((item, index) => (
            <React.Fragment key={index}>
              <div className="grid items-center gap-y-2 sm:gap-y-6 gap-x-6 sm:gap-x-10 md:grid-cols-4 md:gap-x-24 py-2 sm:py-3">
                <div className="order-2 md:order-none flex items-center gap-4">
                  <Image
                    src={item.content.imageSrc}
                    alt={item.content.imageAlt}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                  <div>
                    {/* Title */}
                    <h3 className="font-semibold text-blue-200 font-poppins text-base sm:text-lg">
                      {item.title}
                    </h3>
                    {/* Category */}
                    <p className="text-sm text-blue-200 font-poppins text-muted-foreground">
                      {item.category}
                    </p>
                  </div>
                </div>
                {/* Description */}
                <p className="order-1 md:order-none md:col-span-2 font-semibold text-blue-200 font-poppins text-base sm:text-lg md:text-2xl">
                  {item.description}
                </p>
                {/* Link Button */}
                {item.link && (
                  <div className="order-3 md:order-none justify-self-end mt-4 md:mt-0">
                    <Button variant="outline" className="w-fit gap-2" asChild>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <span className="font-inter">View</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsAndPublications;
