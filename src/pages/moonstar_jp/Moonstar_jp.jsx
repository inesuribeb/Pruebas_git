import Structure from "../../components/structure/structure";

function MoonstarJp (){
    const moonstarJpCarousel = {/* ... */};
    const moonstarJpInfo = {/* ... */};
    return (
        <>
            <main className="moonstarJp-page">
                <Structure 
                    carouselContent={moonstarJpCarousel}
                    infoContent={moonstarJpInfo}
                /> 
            </main>
        </>
    );
}

export default MoonstarJp;