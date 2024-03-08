import check from '../../assets/check.svg'
interface Card{
  title:string
  precio:number
  personas:string
  sesion:string
}
export const Card = ({ title,precio,personas,sesion }:Card) => {
  return (
    <article className="font-sans relative flex flex-col rounded-xl bg-gradient-to-tr from-blue-700 to-blue-300 text-white w-full max-w-[20rem] p-8">
      <div className="pb-4 mb-4  text-center text-yellow-400  border-b">
        <p className="text-md font-bold antialiased uppercase">
          {title}
        </p>
        <h1 className="flex justify-center gap-1 mt-6  antialiased font-normal text-7xl">
          <span className="text-4xl">$</span>
          {precio}
          <span className="self-end text-4xl">/sesión</span>
        </h1>
      </div>
      <div className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <img className='w-[12px]' src={check} alt="check" />
            </span>
            <p className="block text-base antialiased font-normal leading-relaxed text-inherit">
              {personas}
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <img className='w-[12px]' src={check} alt="check" />
            </span>
            <p className="block text-base antialiased font-normal leading-relaxed text-inherit">
              {sesion}
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <img className='w-[12px]' src={check} alt="check" />
            </span>
            <p className="block  text-base antialiased font-normal leading-relaxed text-inherit">
              40+ built-in pages
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <img className='w-[12px]' src={check} alt="check" />
            </span>
            <p className="block text-base antialiased font-normal leading-relaxed text-inherit">
              1 year free updates
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <img className='w-[12px]' src={check} alt="check" />
            </span>
            <p className="block  text-base antialiased font-normal leading-relaxed text-inherit">
              Life time technical support
            </p>
          </li>
        </ul>
      </div>
      <div className="p-0 mt-12">
        <button
          className="font-bold text-center uppercase transition-all text-sm py-3.5 px-7 rounded-lg bg-yellow-400  w-full hover:scale-[1.02] "
          type="button">
          Reserva tu cita
        </button>
      </div>
    </article>
  );
};
