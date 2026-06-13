import React from "react";
import { Link } from "react-router";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      desc: "Modern responsive shopping website with cart and product details page.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
      liveDemo: "https://sutro-style.vercel.app/",
      github: "https://github.com/rioncodes-web/sutro_style-update",
    },
    {
      title: "Multiplication table",
      desc: "The magic of multiples: making math click!",
      image:
        "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveDemo: "https://namta-loop-js.vercel.app/",
      github: "https://github.com/rioncodes-web/Namta-LOOP_JS",
    },
    {
      title: "TODO List",
      desc: "A simple and intuitive task management application designed to help users capture daily goals, organize priorities, and track task progress effortlessly.",
      image:
        "https://plus.unsplash.com/premium_photo-1681487870238-4a2dfddc6bcb?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      liveDemo: "https://todo-list-tau-coral-57.vercel.app/",
      github: "https://github.com/rioncodes-web/todo_List",
    },
  ];

  return (
    <>
      <section id="projects" className="py-24 border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-14 text-center">Projects</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-black/10 rounded-[30px] overflow-hidden hover:-translate-y-2 duration-300"
              >
                <div className="h-[250px] overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 duration-500"
                    src={item.image}
                    alt="project"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="text-gray-600 mt-4 leading-7">{item.desc}</p>

                  <div className="flex gap-4 mt-6">
                    <Link
                      target="blank"
                      to={item.liveDemo}
                      className="bg-gray-500 text-white px-5 py-2 rounded-full font-medium"
                    >
                      Live Demo
                    </Link>

                    <Link
                      target="blank"
                      to={item.github}
                      className="border border-white px-5 py-2 rounded-full font-bold"
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
