import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Promotions = () => {
  return (
    <>
    <div className="">

    <Carousel className="
    "
    autoPlay
    autoFocus
    infiniteLoop
    >
    <div className=" object-contain">
        <img src="https://www.mibelgrano.com.ar/wp-content/uploads/2019/02/2x1.jpg" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4sxmLbdOl1FD4yvTeuuUohjvw6wfSGU1Ogv95itCMdofOh_KcFZrxhPVTqtau_gWG30&usqp=CAU" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src="https://cuadernodemarketing.com/wp-content/uploads/2015/01/promocionesydescuentos.jpg" />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
        </div>
        </>
  )
}


export default Promotions