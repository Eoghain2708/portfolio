import { projects } from "./data/projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <div className="min-h-screen w-full px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <section className="mb-20">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Portfolio
          </p>

          <h1 className="mb-6 text-5xl font-black tracking-tight md:text-7xl">
            Welcome
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-zinc-400">
            A collection of projects built with Java, React, Rails, SQL and
            more.
          </p>
        </section>

        <main
          id="next-steps"
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard
              id={project.id}
              key={project.id}
              name={project.name}
              github={project.github}
              description={project.description}
              tools={project.tools}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
