import React, { useState } from "react";
import "./Spots.css";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";

function Spots() {
    const initialSpots = [
        {
            img: "https://stayhere.ma/wp-content/uploads/2023/08/Explorez-le-Cap-Spartel-Tanger-Guide-Complet-pour-un-Sejour-Inoubliable-1140x760.webp",
            title: "Cap Spartel",
            link: "https://www.google.com/maps/search/cap+spartel/@35.787698,-5.9624524,13z/data=!3m1!4b1?entry=ttu",
        },
        {
            img: "https://i.pinimg.com/736x/98/23/b8/9823b8949517c7ae64c4d98f60d1da4a.jpg",
            title: "Mnar",
            link: "https://www.google.com/search?client=opera-gx&hs=tHX&sca_esv=9c7901713bdc58da&sca_upv=1&sxsrf=ADLYWILfFaTA0K3e8NT7dIFdH6cGahNVYQ:1716866729814&q=mnar&npsic=0&rflfq=1&rllag=35783629,-5788380,4911&tbm=lcl&sa=X&ved=2ahUKEwirqbr8sq-GAxWwRaQEHSKqCTwQtgN6BAghEAE&biw=1879&bih=977&dpr=1&pccc=1#rlfi=hd:;si:;mv:[[35.8201567,-5.7268479999999995],[35.7560297,-5.8400169]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:1",
        },
        {
            img: "https://pbs.twimg.com/media/Eu0vY_wXYAIq0ji?format=jpg&name=medium",
            title: "Rmilat",
            link: "https://www.google.com/maps/place/Av.+Ahmed+Balafrej,+Tanger/@35.7826983,-5.8626995,17z/data=!3m1!4b1!4m6!3m5!1s0xd0c787e66b0dbf1:0x22ee6a26fd53eff9!8m2!3d35.7826983!4d-5.8626995!16s%2Fg%2F1vcjnhvr?entry=ttu",
        },
        {
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/bd/e6/a2/medina-of-tangier.jpg?w=1200&h=-1&s=1",
            title: "MerKala",
            link: "https://www.google.com/maps/place/Merkala+Beach/@35.7943125,-5.8450264,15z/data=!3m1!4b1!4m6!3m5!1s0xd0c78bfdd17e3e9:0xf0bbc174a16b36b0!8m2!3d35.794296!4d-5.8347052!16s%2Fg%2F12q4tlhwk?entry=ttu",
        },
        {
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/bd/e8/6f/medina-of-tangier.jpg?w=1200&h=-1&s=1",
            title: "Old Medina",
            link: "https://www.google.com/maps/place/Ancien+Medina,+Tangier/@35.7862122,-5.8145192,17z/data=!3m1!4b1!4m6!3m5!1s0xd0c7f4d7ebabf4f:0xdae66f4452080ca9!8m2!3d35.7866443!4d-5.8109931!16s%2Fg%2F1wf2335j?entry=ttu",
        },
        {
            img: "https://images.unsplash.com/photo-1532173311168-91e999ce4e47?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Grottes d'Hercule",
            link: "https://www.google.com/maps/place/Hercules+Caves/@35.7599378,-5.9440974,17z/data=!3m1!4b1!4m6!3m5!1s0xd0b882d10964725:0xa9ac855c8cfd195a!8m2!3d35.7599335!4d-5.9392319!16s%2Fm%2F0w6bp17?entry=ttu",
        },
        {
            img: "https://img.restaurantguru.com/rbc5-facade-Miramonte-Resort-Cafe-Restaurant-La-Cabana.jpg",
            title: "Miramonte",
            link: "https://www.google.com/search?client=opera-gx&hs=Q2C&sa=X&sca_esv=9c7901713bdc58da&sca_upv=1&hotel_occupancy=2&biw=1879&bih=977&sxsrf=ADLYWILFxFawgntYYRWVY_NTxoJ_ep148A:1716868331539&q=miramonte+tanger&npsic=0&rflfq=1&rldoc=1&rllag=35791114,-5831517,21&tbm=lcl&uds=ADvngMiIMiMH9LyyITANaU-tP7Tx88H5D-lKOioXSDpxem1cm95lXhLHad-nUhAMpFOiG1Hqpo6nVQFSslw8ga2Sh7kzeFRPK1mbmKpQRAi_NAXdQstmArckqIk3zUftGnSI4WtRRnvNbiC6XFPxsNSC_WgZ8pO07mpogaP8UnCdCjfCHCMrEpLIi63wJLWeyUCPI6q9cS1cW9-zO8aV1pQFalX3EHBLUu5Lux-2YBkjg6LrvFwj3Nxiz0J_lrNrWNwf-p7faifYebDcuiEHdnIvvB0wBAkoMA&ved=2ahUKEwi875v4uK-GAxUdSaQEHbpeBUYQtgN6BAglEAE#rlfi=hd:;si:;mv:[[35.791321499999995,-5.8314344],[35.790907499999996,-5.8315999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2",
        },
        {
            img: "https://images.trvl-media.com/lodging/4000000/3170000/3162900/3162844/d337c1fb.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            title: "Hôtel Continental",
            link: "https://www.google.com/maps?client=opera-gx&hs=4eX&sca_esv=9c7901713bdc58da&sca_upv=1&biw=1879&bih=977&sxsrf=ADLYWILSpuCsGG7Ge2uHPYq1Aim8LlAJ9A:1716868166078&uds=ADvngMgM3sJHGRUUapkgumPBd1g45LdPumCM9ez4wxOu_WLnmiFlgX3CPcf0emtWlXnHLMN2DmvaHpMAb_Rc1qKoNcz2IliWhA52BA52n2Y1cM-lmFNHNPSWAmfbBFI0E3PNDK90L048VaCoZSacpP5MxTnp_KZN4k9PoNnBfPP3eirTKiA8RE9Ku_dXV29VZxDs4Kaqaxis1KKKLoqNZ60XyKhcTw1eAZ_JEkmJ89uFtD3r9Zo6rDbQ5t1TsVM1L5ytKJAk6mFLfj-qBF4ywhGpEjFccqCLZ0iS5C5emuJs_pO3vwNrtew&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=Kc8xct1NfwwNMQOaE_ip-YPZ&daddr=36+Rue+Dar+Baroud,+Tanger+90000",
        },
        {
            img: "https://www.laprensalatina.com/wp-content/uploads/2021/06/17684745w-780x470.jpg",
            title: "Café Hafa",
            link: "https://www.google.com/maps?client=opera-gx&oe=UTF-8&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=Kc0wpde2eAwNMXlL7RpzTM-j&daddr=Rue+Hafa,+Tangier",
        },
        {
            img: "https://diplomacy.state.gov/wp-content/uploads/2023/08/DSC7134_resized-scaled.jpg",
            title: "tangier american legation museum",
            link: "https://www.google.com/maps?client=opera-gx&hs=8lX&sca_esv=9c7901713bdc58da&sca_upv=1&hotel_occupancy=2&sxsrf=ADLYWIJn7JLmen8TbGj7D0DcrgpTvlgjxA:1716868604207&uds=ADvngMhZGkh55AzE5eBQweVY--kbdEP6B2JqqQ7El_pcro_0XJrOI6FM6HrGQ-zFpzCZ1bjEkcj7U21ocG-4KgkkOewfN51yqcVGtwBRiWON4q3Ayc5612GISaGEIGYMlEbVby5dBzdXVn5eJC6bPmiUWrsgsAxE1GuA5F6kdl6muJDa41nTPS2vLohY6k_X48RIO017VY1_LAQcMqLtGja49YKu4LKGzoYH_DFOXMv8nhT38COTsHFdtBtF3uwKKwI5mwre3DMaszoDwxvYQX9Vjl43PcVH4uPluotWS_nZIbQfxAf7EeY&biw=1879&bih=977&dpr=1&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KZUte0NSfwwNMX8JRWsDuQ8b&daddr=8+Rue+d%27Amerique,+Tanger",
        },
        {
            img: "https://fnm.ma/wp-content/uploads/2022/01/Musee-dart-contemporain-Tanger_40-1024x683.jpg",
            title: "musee art contemporain",
            link: "https://www.google.com/maps?client=opera-gx&sca_esv=9c7901713bdc58da&sca_upv=1&hotel_occupancy=2&sxsrf=ADLYWIJasixSG0K55y0RcOJ7bVfG-1KuOA:1716868814468&uds=ADvngMg-kps6NtUm-8iK4iUZ0Lr-0kDMzg5oI-NIRy21RGhuw-sDzfbphoG2XXYkYOPZR31v7K_wAEhNWLy8LRCxUNZD8gzQHncreCvri1w11WPGmrEHF_hVo-dVXY8G4dIb_ePGBZiIzc9-b3yN1ehA4zrKKvKLlLn5nFxGkZEFuvBtNU37YCXfdWbqd7ONyoOxIDa5_0fZk2qYJlEMEBZY6kALJYCqIzRth8kpfIABP9qhekounONHw9PuffEyYKju4bxl-X-9glOrQNGynHEz52UHnbHF2dDx8RZv166jteZR1V1uNW8&biw=1879&bih=977&dpr=1&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KecysvksfwwNMbe6eTow8N8b&daddr=Q5QQ%2B72P,+Pl.+de+la+Kasbah,+Tanger+90030",
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/1/10/Kasbah_Museum_%2839014311340%29_%28cropped%29.jpg",
            title: "kasbah museum ",
            link: "https://www.google.com/maps?client=opera-gx&sca_esv=9c7901713bdc58da&sca_upv=1&hotel_occupancy=2&sxsrf=ADLYWIIiUhYFHuUM-dIk7McEDb3KksXNiQ:1716868912583&uds=ADvngMjJ9wzlqvfqvV--gTwQh7gPCP_lOePduDi1dp30pCfnJaKBVjaZCQNtALN7VVuPbWHPlfeytDLo0Gn5P8Rp2eH3ax1-7usvhs_1UgpDWthlJ2TGIZZRN5bxKDzKpv2neP7mAQxHoYvYaEBU8_i-WaapYcjzzt5fE1V795P1gHi1cPJcQeWYts8bCiiEcCYKGH_VFrZzCV6W8__PUtSNAAniPLfjCYNJJir3Fadh09qnAyF8QwfZxxSJObiNROxOnz1U3lgzMOlCY5_7G7ZxWiFHN40YfbwofC0cNO9PX1EGBXxS0lM&biw=1879&bih=977&dpr=1&um=1&ie=UTF-8&fb=1&gl=ma&sa=X&geocode=KeWfrKFNfwwNMceV94WI_0Z4&daddr=Pl.+de+la+Kasbah,+Tanger+90030",
        },
    ];

    const [spots, setSpots] = useState(initialSpots.slice(0, 12));
    const [showAll, setShowAll] = useState(false);

    const handleViewAll = () => {
        if (!showAll) {
            setSpots(initialSpots);
        } else {
            setSpots(initialSpots.slice(0, 12));
        }
        setShowAll(!showAll);
    };

    return (
        <>
            <NavBar />
            <div className="container">
                <h1>Spots</h1>
                <p>Explore!</p>
                <div className="spots-grid">
                    {spots.map((spot) => (
                        <Link
                            key={spot.title}
                            to={spot.link}
                            target="_blank"
                            className="spot"
                        >
                            <img src={spot.img} alt={spot.title} />
                            <p>{spot.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Spots;
