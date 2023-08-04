import primera from "../../assets/Fase1.png"
import segunda from "../../assets/Fase2.jpg"
import tercera from "../../assets/Fase3.png"
import cuarta from "../../assets/Fase4.png"

const ToDo = () => {
  return (
    <div>
        <article className=" max-w-[80%] mx-auto my-10">
            <h2 className=" text-4xl font-bold text-black w-full text-center my-8">Como funciona nuestra Lavanderia 💯 </h2>
            <section className="w-full flex justify-center items-center ">
                <div className="w-50% flex flex-col">
                    <h3 className="text-3xl font-bold">¡Solicita y Descansa!</h3>
                    <p className="text-xl font-medium w-[60ch]">Recibimos tu consulta. Solo decinos qué necesitas y prepárate para relajarte 
mientras nosotros nos encargamos de todo.</p>
                </div>
                <div className="w-[50%] grid place-content-center">
                    <img src={primera} alt="Imagen de llamada por celular" height={551} width={321}  />
                </div>
            </section>
            <section className="w-full flex justify-center items-center ">
                <div className="w-[50%] flex justify-start">
                    <img src={segunda} alt="Imagen de retiro o entrega de ropa" height={551} width={321}  />
                </div>
                <div className="w-50% flex flex-col">
                    <h3 className="text-3xl font-bold ">Organizamos el Retiro o Recepción!</h3>
                    <p className="text-xl font-medium w-[60ch]">Facilitamos el proceso para vos. Programaremos el retiro o recepción de tus prendas sin complicaciones..</p>
                </div>
            </section>
            <section className="w-full flex justify-center items-center ">
                <div className="w-50% flex flex-col">
                    <h3 className="text-3xl font-bold">¡Máxima Frescura!!</h3>
                    <p className="text-xl font-medium w-[60ch]">Confía en nosotros para dar a tus prendas el tratamiento que se merecen. Lavamos cada una con esmero y cuidado, garantizando una limpieza impecable.</p>
                </div>
                <div className="w-[50%] grid place-content-center">
                    <img src={tercera} alt="Imagen de lavarropas industrial" height={551} width={321}  />
                </div>
            </section>
            <section className="w-full flex justify-center items-center ">
                <div className="w-[50%] flex justify-start">
                    <img src={cuarta} alt="Imagen de retiro o entrega de ropa" height={551} width={321}  />
                </div>
                <div className="w-50% flex flex-col">
                    <h3 className="text-3xl font-bold">Entregamos Limpio y Fresco</h3>
                    <p className="text-xl font-medium w-[60ch]">El momento de disfrutar ha llegado. Te entregamos tus prendas completamente limpias y listas para su uso.</p>
                </div>
            </section>
        </article>
    </div>
  )
}

export default ToDo