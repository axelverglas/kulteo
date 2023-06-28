interface StatCardsProps {
  percentage: string;
  text: string;
  highlight?: string;
  textAfterHighlight?: string;
}

const stats = [
  {
    percentage: '27%',
    text: 'Des habitants des communes rurales osent braver la nuit pour aller au cinéma, contre',
    highlight: ' 58 %',
    textAfterHighlight: ' des Parisiens.',
  },
  {
    percentage: '31%',
    text: 'Des équipements culturels sont principalement concentrés en Ile-de-France.',
  },
  {
    percentage: '15€',
    text: 'C’est le prix que le ministère de la culture dépense par habitant par an sur le reste du territoire contre',
    highlight: ' 139€',
    textAfterHighlight: ' en île de France.',
  },
];

export default function Number() {
  return (
    <section className="bg-slate-50 py-12 dark:bg-black md:py-24">
      <div className="container max-w-7xl">
        <h2 className="mb-10 text-center font-roc text-3xl font-bold md:text-4xl">
          Ô
          <span className="mx-1 rounded-lg bg-secondarylight px-2 pt-1 text-white dark:bg-primary dark:text-night">
            révélations
          </span>
          !
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-10">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  percentage,
  text,
  highlight,
  textAfterHighlight,
}: StatCardsProps) {
  return (
    <div className="flex justify-center">
      <div className="w-[250px]">
        <h3 className="mb-6 text-center font-roc text-4xl font-bold text-secondarylight dark:text-primary">
          {percentage}
        </h3>
        <p className="text-center">
          {text}
          <span className="font-semibold text-secondarylight dark:text-primary">
            {highlight}
          </span>
          {textAfterHighlight}
        </p>
      </div>
    </div>
  );
}
