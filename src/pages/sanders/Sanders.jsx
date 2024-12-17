import Structure from "../../components/structure/structure";

function Sanders (){
    const sandersCarousel = {/* ... */};
    const sandersInfo = {/* ... */};
    return (
        <>
            <main className="sanders-page">
                <Structure 
                    carouselContent={sandersCarousel}
                    infoContent={sandersInfo}
                /> 
            </main>
        </>
    );
}

export default Sanders;