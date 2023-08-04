
import imgAbout from "../../assets/About.png"

const About = () => {
  return (
    <div>
        <section className='h-[40vh] bg-[#3F4862] w-full flex'>
            <article className='w-[50%] flex flex-col text-center items-center justify-center gap-4 m-10'>
            <h2 className=" text-4xl text-white font-bold tracking-wide leading-9 text-start">
                    Bienvenido a Lavarap: Expertos en Cuidado de Ropa de Cama y Acolchados</h2>
                <p className=" text-xl text-white font-light">En Lavarap, estamos orgullosos de nuestra historia como una empresa familiar que ha crecido a partir de un pequeño emprendimiento

Lo que nos distingue en Lavarap es nuestra dedicación y el trato personalizado que ofrecemos a cada cliente</p>
            </article>
            <article className='w-[50%]'>
                <img src={imgAbout} alt="" className=" object-cover drop-shadow-2xl" />
            </article>
        </section>
<article>
    <section className="h-[50vh] mb-8">
    </section>
</article>
    </div>
  )
}

export default About