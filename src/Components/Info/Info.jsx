

const Info = () => {
  return (
    <div className=" h-[30vh] my-[100px] flex justify-around items-center max-w-[80%] mx-auto ">
        <div>
            <h3 className=" text-3xl font-bold tracking-wide leading-8 text-black">Lavarap</h3>
            <p className="w-[30ch] text-base font-bold text-slate-500 ">
            Con tecnología de vanguardia y técnicas de limpieza avanzadas para asegurarnos de que tus acolchados, sábanas y ropa de cama reciban el tratamiento que merecen
            </p>
        </div>
        <div className="flex flex-col gap-2">
        <h3 className=" text-3xl font-bold tracking-wide leading-8 text-black">Contactos</h3>
            <p className="w-[30ch] text-base font-bold text-slate-500 ">Contacto</p>
            <p className="w-[30ch] text-base font-bold text-slate-500 ">Contacto</p>
            <p className="w-[30ch] text-base font-bold text-slate-500 ">Contacto</p>
        </div>
        <div className="flex flex-col gap-2">
        <h3 className=" text-3xl font-bold tracking-wide leading-8 text-black">Seguinos en redes</h3>
            <p className="w-[30ch] text-base font-bold text-slate-500 ">Redes</p>
            <p className="w-[30ch] text-base font-bold text-slate-500 ">Redes</p>
            <p className="w-[30ch] text-base font-bold text-slate-500 ">Redes</p>

        </div>
    </div>
  )
}

export default Info