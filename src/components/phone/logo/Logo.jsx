import './Logo.css'

function Logo ({ url }){
    return (
        <div className="logo-container-phone">
            <img src={url} alt="Brand logo" className="logo" />
        </div>
    )
}

export default Logo;