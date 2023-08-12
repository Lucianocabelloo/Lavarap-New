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
        <div className="w-[70ch] m-4 flex flex-col gap-4 h-full justify-center items-center ">
          <h1 className="Titulo text-white">
          Sabanas y Acholchados 5 Estrellas 
          </h1>
          <p className=" text-2xl text-white font-light"> Deja tus sábanas, acolchados en nuestras manos, relajate como nunca y que lavar no te quite el mate.</p>
        <div className="flex gap-4 justify-start w-full">
        <button className="button-36" role="button">Contacto</button>
        <button className="button-36" role="button">Catalogo</button>

        </div>
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