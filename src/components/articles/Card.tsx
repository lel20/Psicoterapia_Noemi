export const Card = ({ title }: { title: string }) => {
  return (
    <div className="w-full md:w-1/5 p-4 shadow-lg">
      <h2 className="text-xl lg:text-2xl font-bold mb-4">{title}</h2>
      <ul className="list-disc list-inside">
        <li className="text-lg">Ter</li>
        <li className="text-lg">Terapia de pareja</li>
        <li className="text-lg">Terapia familiar</li>
      </ul>
    </div>
  );
};
