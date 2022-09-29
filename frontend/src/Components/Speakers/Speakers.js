import styles from "./Speakers.module.css";

import YellowSun from "../../Images/BannerYellowSun.svg";
import RedSun from "../../Images/BannerRedSun.svg";

// import Link from "../../Images/Link.svg";
import SpeakerCard from "./SpeakerCard";

import { useState } from "react";

import Speaker1 from "../../Images/Speaker1.svg";
import Speaker2 from "../../Images/Speaker2.svg";
import Speaker3 from "../../Images/Speaker3.svg";

// import { useNavigate } from "react-router-dom";

const Speakers = () => {
    // const [images, setImages] = useState(SampleImage1);

    // const navigate = useNavigate();

    // const Speaker1 = {
    //     desc: "After working in Dubai for 4 years as Technical Product Architect, started his Tech services firm, called Myrl Tech in 2018 and since then, they've worked with multiple Enterprise clients to build SAAS products.",

    //     title: "Akhil Sharma",
    //     url: "https://www.linkedin.com/in/akhilsails/",
    // };
    // const Speaker2 = {
    //     desc: "After working in Dubai for 4 years as Technical Product Architect, started his Tech services firm, called Myrl Tech in 2018 and since then, they've worked with multiple Enterprise clients to build SAAS products.",

    //     title: "Akhil Sharma",
    //     url: "https://www.linkedin.com/in/akhilsails/",
    // };
    // const Speaker3 = {
    //     desc: "After working in Dubai for 4 years as Technical Product Architect, started his Tech services firm, called Myrl Tech in 2018 and since then, they've worked with multiple Enterprise clients to build SAAS products.",

    //     title: "Akhil Sharma",
    //     url: "https://www.linkedin.com/in/akhilsails/",
    // };
    // console.log(images);

    return (
        <div className={styles.main_container} id="speakers">
            <div id={styles.rssBlock}>
                <div className={styles.cnnContents}>
                    <div className={styles.marqueeStyle}>
                        <span>HASHTECH</span> <img src={YellowSun} alt="" />{" "}
                        <span>CODECHEF-VIT</span>
                        <span>HASHTECH</span> <img src={RedSun} alt="" />{" "}
                        <span>CODECHEF-VIT</span>
                        <span>HASHTECH</span> <img src={YellowSun} alt="" />{" "}
                        <span>CODECHEF-VIT</span>
                        <span>HASHTECH</span> <img src={YellowSun} alt="" />{" "}
                        <span>CODECHEF-VIT</span>
                        <span>HASHTECH</span> <img src={RedSun} alt="" />{" "}
                        <span>CODECHEF-VIT</span>
                        <span>HASHTECH</span> <img src={YellowSun} alt="" />{" "}
                        <span>CODECHEF-VIT</span>
                        <span>HASHTECH</span> <img src={RedSun} alt="" />{" "}
                        <span>CODECHEF-VIT</span>
                    </div>
                    {/* <div className={styles.marqueeStyle}>
                        &nbsp;HASHTECH <img src={RedSun} alt="" />{" "}
                        <span>CODECHEF-VIT</span>&nbsp;
                    </div>
                    <div className={styles.marqueeStyle}></div> */}
                </div>
            </div>
            <div className={styles.container}>
                <h1>Speakers</h1>
                <div className={styles.container_row}>
                    {/* <SpeakerCard
                        desc={Speaker1.desc}
                        title={Speaker1.title}
                        url={Speaker1.url}
                    />
                    <SpeakerCard
                        desc={Speaker2.desc}
                        title={Speaker2.title}
                        url={Speaker2.url}
                    />
                    <SpeakerCard
                        desc={Speaker3.desc}
                        title={Speaker3.title}
                        url={Speaker3.url}
                    /> */}
                    <img src={Speaker1} alt="" />
                    <img src={Speaker2} alt="" />
                    <img src={Speaker3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Speakers;
