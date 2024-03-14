import check from '../../assets/check.svg'
import './CardaStile/Card.css'
interface Card{
  title:string
  precio:number
  personas:string
  sesion:string
  online:string
  plataforma:string
}
export const Card = ({ title,precio,personas,sesion,online, plataforma }:Card) => {
  return (
    <article className="article_card md:max-w-[40%]">
      <div className="container1_card">
        <p className="font-bold text-[1rem] lg:text-xl uppercase">
          {title}
        </p>
        <h1 className="flex justify-center gap-1 mt-6  text-6xl">
          <span className="text-4xl">$</span>
          {precio}
          <span className="self-end text-4xl">/sesión</span>
        </h1>
      </div>
      <div className="p-0">
        <ul className="flex flex-col gap-4 text-start">
          <li className="flex items-center gap-2">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <img className='w-[12px]' src={check} alt="check" />
            </span>
            <p className="block text-base antialiased font-normal leading-relaxed text-inherit">
              {personas}
            </p>
          </li>
          <li className="flex items-center gap-2">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <img className='w-[12px]' src={check} alt="check" />
            </span>
            <p className="block text-base antialiased font-normal leading-relaxed text-inherit">
              {sesion}
            </p>
          </li>
          <li className="flex items-center gap-2">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <img className='w-[12px]' src={check} alt="check" />
            </span>
            <p className="block text-base antialiased font-normal leading-relaxed text-inherit">
              {online}
            </p>
          </li>
           <li className="flex items-center gap-2">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <img className='w-[12px]' src={check} alt="check" />
            </span>
            <p className="block text-base antialiased font-normal leading-relaxed text-inherit">
              {plataforma}
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
