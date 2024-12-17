import Structure from "../../components/structure/structure";

function IlBussetto (){
    const ilBussettoCarousel = {/* ... */};
    const ilBussettoInfo = {/* ... */};
    return (
        <>
            <main className="ilBussetto-page">
                <Structure 
                    carouselContent={ilBussettoCarousel}
                    infoContent={ilBussettoInfo}
                /> 
            </main>
        </>
    );
}

export default IlBussetto;