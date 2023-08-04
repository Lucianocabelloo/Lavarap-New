import Navbar from "../Navbar/Navbar"
import header from "../../assets/Header.png"

const Header = () => {
  return (
    <div className="bg-[#3F4862] h-[80vh] flex flex-col">
      <header>
        <Navbar/>
      </header>
      <main className="h-full flex items-center justify-start">
        <article className="h-full w-full flex ">
          <section className="flex items-center justify-center w-[50%]">
        <div className="w-[70ch] m-4 flex-col gap-4 ">
          <h1 className=" text-4xl text-white font-bold">
          Sabanas y Acholchados 3 Estrellas ! ⭐⭐⭐ 
          </h1>
          <p className=" text-xl text-white font-light">Que planchar no te quite el mate. Deja tus sábanas y acolchados en nuestras manos y relajate como nunca.</p>
        </div>

          </section>
          <section className="flex items-center justify-center w-[50%] drop-shadow-2xl" >
            <div>
                <img src={header} alt="Imagen del header de la pagina" height={70} width={532} />
            </div>
          </section>
        </article>
        
      </main>
    </div>
  )
}

export default Header