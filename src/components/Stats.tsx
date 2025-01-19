const statistics = [
  {
    id: 1,
    title: "Full-Stack Experience",
    value: "3+ years",
    description: "Contributed to 3 companies across diverse projects.",
  },
  {
    id: 2,
    title: "Repositories",
    value: "~200",
    description: "Achieved 999 contributions over the past year.",
  },
  {
    id: 3,
    title: "Problem Solving",
    value: "100+",
    description: "Maintained an 88.7% acceptance rate.",
  },
];

const Stats = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10 p-5 md:p-10 bg-base-100 shadow-md rounded relative z-[2] -mt-40 md:-mt-60 xl:-mt-44">
      {statistics.map((statistic) => (
        <div key={statistic.id}>
          <p className="md:text-xl">{statistic.title}</p>
          <p className="text-5xl md:text-7xl">{statistic.value}</p>
          <p className="text-sm opacity-50">{statistic.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
