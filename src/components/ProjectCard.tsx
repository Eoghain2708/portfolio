type Props = {
  id: number;
  name: string;
  github: string[];
  description: string;
  tools: string;
};

function ProjectCard({ name, github, description, tools }: Props) {
  return (
    <article
      className="
        group
        flex
        h-full
        flex-col
        rounded-3xl
        border
        border-zinc-800
        p-8
        transition-all
        duration-150
        hover:border-purple-500/50
        hover:shadow-2xl
      "
    >
      <div className="mb-5">
        <h2 className="text-2xl font-bold tracking-tight">{name}</h2>
      </div>

      <p className="mb-6 leading-7 text-zinc-400">{description}</p>

      <div className="mb-8 flex flex-wrap gap-2">
        {tools.split(",").map((tool) => (
          <span
            key={tool}
            className="
              rounded-full
              border
              border-zinc-700
              px-3
              py-1
              text-sm
              text-zinc-300
            "
          >
            {tool.trim()}
          </span>
        ))}
      </div>

      <div className="mt-auto">
        {github.map((link) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
            inline-flex
            items-center
            rounded-2xl
            border
            border-purple-500
            px-5
            py-3
            font-semibold
            transition-all
            duration-300
            hover:bg-purple-500
            hover:text-black
          "
          >
            Repo
          </a>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
