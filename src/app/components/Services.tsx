import { FaDesktop, FaCode, FaCogs } from "react-icons/fa";

export function Services() {
  const services = [
    {
      title: "Technical Support",
      description:
        "I offer complete technical support for the implementation, optimization and maintenance of your website. I monitor performance, correct faults, make updates and adjustments according to your needs, ensuring that the site works efficiently, securely and in line with your business objectives.",
      icon: <FaCogs className="text-indigo-600 text-4xl" />,
    },
    {
      title: "Website Creation",
      description:
        "I develop customized websites from scratch, with an attractive design in line with your visual identity. I use modern frameworks such as ReactJS and NextJS, as well as creating websites using WordPress with Elementor. I also offer ongoing maintenance, ensuring that the site is always up-to-date and working optimally.",
      icon: <FaCode className="text-indigo-600 text-4xl" />,
    },
    {
      title: "Exclusive customizations",
      description:
        "If your current website doesn't reflect what you need, I offer exclusive customizations to adapt the design and functionalities, aligning it exactly with the image you want to convey to your customers.",
      icon: <FaDesktop className="text-indigo-600 text-4xl" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-10 mb-20  mt-20 text-center bg-white text-gray-600 dark:bg-zinc-900 dark:text-white scroll-smooth"
    >
      <h2 className="text-5xl font-bold mb-20">Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 p-10 rounded-lg shadow-lg hover:bg-gray-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 transition-all transform hover:scale-105"
          >
            <div className="mb-6 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-5">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-justify">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
