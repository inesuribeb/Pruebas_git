import Structure from "../../components/structure/structure";
import './Sunray.css'

function Sunray (){
    const sunrayCarousel = {
        images: [
            {
                url: "https://i.ibb.co/pLR5n36/sunray7.jpg",
                description: "",
            },
            {
                url: "https://i.shgcdn.com/ce1f369c-eb74-4907-8a6e-a47a384c02c0/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
                description: "",
            },
            {
                url: "https://i.shgcdn.com/5fd4dc2a-4a29-4824-b68c-94f91db52bd9/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
                description: "",
            },
            
            {
                url: "https://i.ibb.co/Np0xcnj/sunray11.jpg",
                description: "",
            },
            {
                url: "https://i.ibb.co/6DVw8VP/sunray12.jpg",
                description: "",
            },
            {
                url: "https://i.ibb.co/WVC7R5r/sunray10.jpg",
                description: "",
                textColor: "dark"
            },
            
            {
                url: "https://i.ibb.co/7t3pfLJ/sunray13.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/hdNQV9D/sunray2.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/9nmTmjf/sunray9.jpg",
                description: "",
            },
            {
                url: "https://i.ibb.co/m9HxN2b/sunray6.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.shgcdn.com/b4a9ea66-ccfd-4f8b-90e0-8a729f87bb0b/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
                description: "",
            },
            {
                url: "https://i.ibb.co/18sYJG6/sunray8.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.shgcdn.com/6053eb6a-cbbc-4517-bf65-7867a4dd783c/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
                description: "",
            },
            {
                url: "https://i.ibb.co/JFsQ74D/sunray3.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/QFFrKP8/sunray5.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/8DRrTnB/sunray4.jpg",
                description: "",
                textColor: "dark"
            },
            {
                url: "https://i.ibb.co/hgPFN7Q/sunray1.jpg",
                description: "",
                textColor: "dark"
            },
            
            
        ]
    };
    
    const sunrayInfo = {
        logo: "https://sunraysportswear.co.uk/wp-content/uploads/2020/07/Sunray_main_logo_red.png",
        title: "Sunray Sportswear",
        origin: "Cornwall, UK",
        socials: [
            {
                name: "Instagram",
                url: "https://www.instagram.com/sunraysportswear/"
            },
            {
                name: "Website",
                url: "https://sunraysportswear.co.uk/"
            }
        ],
        history: "Sunray Sportswear is a brand born from the frustration of not finding the perfect <i>white t-shirt</i> for 30 years. After a failed attempt in <i>Portugal</i>, they moved production to <i>Japan</i>, where <i>perfection</i> is a standard. They found a small, family-owned factory with nearly 100 years of experience, known for making <i>uniforms</i> for the <i>Japanese Imperial Palace</i> using <i>vintage circular knitting machines</i>.\n\nConvincing the family to work with a small <i>husband and wife team</i> was a challenge. Despite differences in <i>fits</i> and <i>styles</i>, they managed to align on their vision of<i>perfection</i>, building a relationship of <i>friendship</i> and <i>mutual respect</i>.\n\nWith their <i>punk attitude</i> toward traditional <i>business models</i>, Sunray is now stocked by influential stores worldwide."
    };
    
    return (
        <>
                <Structure 
                    carouselContent={sunrayCarousel}
                    infoContent={sunrayInfo}
                    pageClass={"sunray-page"}
                /> 
        </>
    );
}

export default Sunray;