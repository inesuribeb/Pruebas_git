import Logo from '../../components/phone/logo/Logo';
import Carrusel from '../../components/phone/carrusel/Carrusel'
import History from '../../components/phone/textPhone/History';
import Origin from '../../components/phone/textPhone/Origin';
import Socials from '../../components/phone/textPhone/Socials';

import './SunrayPhone.css';

function SunrayPhone() {
    const sunrayCarrusel = {
        images: [
            {
                url: "https://i.ibb.co/pLR5n36/sunray7.jpg",
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
            // {
            //     url: "https://i.shgcdn.com/b4a9ea66-ccfd-4f8b-90e0-8a729f87bb0b/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
            //     description: "",
            // },
            {
                url: "https://i.ibb.co/18sYJG6/sunray8.jpg",
                description: "",
                textColor: "dark"
            },
            // {
            //     url: "https://i.shgcdn.com/6053eb6a-cbbc-4517-bf65-7867a4dd783c/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
            //     description: "",
            // },
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
            }     
        ]
    };
    return (
        <div>
            <Logo url="https://sunraysportswear.co.uk/wp-content/uploads/2020/07/Sunray_main_logo_red.png" />
            <Origin brandOrigin="Cornwall, UK" />
            <Carrusel content={sunrayCarrusel} />
            <h3 className='history-phone-title'>History</h3>
            <History brandText="Sunray Sportswear is a brand born from the frustration of not finding the perfect white t-shirt for 30 years. After a failed attempt in Portugal, they moved production to Japan, where perfection is a standard. They found a small, family-owned factory with nearly 100 years of experience, known for making uniforms for the Japanese Imperial Palace using vintage circular knitting machines." />
            <img
                className='slp-fabric'
                src='https://i.shgcdn.com/ce1f369c-eb74-4907-8a6e-a47a384c02c0/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
                alt='Sunray'
            />
            <History brandText="Convincing the family to work with a small husband and wife team was a challenge. Despite differences in fits and styles, they managed to align on their vision ofperfection, building a relationship of friendship and mutual respect." />
            <History brandText="With their punk attitude toward traditional business models, Sunray is now stocked by influential stores worldwide." />
            {/* <img
                className='slp-fabric'
                src=''
                alt='Sunray'
            /> */}
            <img
                className='slp-fabric'
                src='https://i.shgcdn.com/b4a9ea66-ccfd-4f8b-90e0-8a729f87bb0b/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
                alt='Sunray'
            />
            <img
                className='slp-fabric'
                src='https://i.shgcdn.com/6053eb6a-cbbc-4517-bf65-7867a4dd783c/-/format/auto/-/preview/3000x3000/-/quality/lighter/'
                alt='Sunray'
            />
            <Socials
                instagram="https://www.instagram.com/sunraysportswear/"
                website="https://sunraysportswear.co.uk/"
            />
        </div>
    )
}

export default SunrayPhone;