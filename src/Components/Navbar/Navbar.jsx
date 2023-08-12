const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row w-full justify-around h-[5vh] items-center fixed bg-[#00000033] backdrop-blur-sm z-50 ">
        <div className="flex gap-2">
          <p>Logo</p>
          <h2>LavaRap</h2>
        </div>
        <div >
        <ul className="flex gap-2">
        <li>Home</li>
        <li>About</li>
        <li>Funcionamiento</li>
        </ul>
        </div>
        <div className="flex gap-2">
            <button>Carrito</button>
            <button>Contacto</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar