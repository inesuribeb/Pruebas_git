import Structure from "../../components/structure/structure";

function ShoesLikePottery (){
    const shoesLikePotteryCarousel = {/* ... */};
    const shoesLikePotteryInfo = {/* ... */};
    return (
        <>
            <main className="shoesLikePottery-page">
                <Structure 
                    carouselContent={shoesLikePotteryCarousel}
                    infoContent={shoesLikePotteryInfo}
                /> 
            </main>
        </>
    );
}

export default ShoesLikePottery;