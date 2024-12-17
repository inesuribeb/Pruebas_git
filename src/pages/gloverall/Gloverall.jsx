import Structure from "../../components/structure/structure";

function Gloverall (){
    const gloverallCarousel = {/* ... */};
    const gloverallInfo = {/* ... */};

    return (
        <>
            <main className="gloverall-page">
                <Structure 
                    carouselContent={gloverallCarousel}
                    infoContent={gloverallInfo}
                /> 
            </main>
        </>
    );
}

export default Gloverall;