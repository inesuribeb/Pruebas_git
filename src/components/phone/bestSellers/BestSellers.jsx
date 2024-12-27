import Carrusel from '../carrusel/Carrusel';
import './BestSellers.css'

function BestSellers({ brandBsContent }) {
    return (
        <div className="brandBsContent">
            <h3 className='best-sellers-title'>Heritage Icons</h3>
            <Carrusel content={brandBsContent} />
        </div>
    )
}

export default BestSellers;