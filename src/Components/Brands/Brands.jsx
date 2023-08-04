import ala from "../../assets/ala.png"

const Brands = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center bg-[#D9D9D9]">
    <h1 className=" text-xl font-semibold">Marcas que utilizamos</h1>
    <div className="flex w-full justify-around">
        <img src={ala} alt="Detergente para ropa Ala" className="h-[100px] w-[100px]" />
        <img src="https://4.bp.blogspot.com/-THqihKatifo/UlESZZ-GlXI/AAAAAAAAT8s/i6DrzL6n1BE/s1600/ari3.png" alt="Detergente para ropa Ariel" className="h-[100px] w-[100px]" />
        <img src="https://logodownload.org/wp-content/uploads/2022/10/comfort-logo-0.png" alt="Suavizante para ropa comfort" className="h-[100px] w-[100px]" />
        <img src="https://www.tuhogar.com/content/dam/cp-sites/home-care/tu-hogar/latam/productos/suavitel/suavitel-logo.png" alt="Suavizante para ropa Suavitel" className="h-[100px] w-[100px]" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Febreze_Logo.svg/1200px-Febreze_Logo.svg.png" alt="Perfume para ropa Febreze" className="h-[100px] w-[100px]" />
        <img src="https://seeklogo.com/images/A/ace-logo-5604966647-seeklogo.com.png" alt="Detergente para ropa Ace" className="h-[100px] w-[100px]" />
    </div>
    </div>
    </>
  )
}

export default Brands