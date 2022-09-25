import styles from "./Speakers.module.css";
// import Banner from "../../Images/SpeakersBanner.svg";
// import SampleImage1 from "../../Images/Speaker1.png";
// import SampleImage2 from "../../Images/Speaker2.png";
// import SampleImage3 from "../../Images/Speaker3.png";
// import SampleImage4 from "../../Images/Speaker4.png";
// import SampleImage5 from "../../Images/Speaker5.png";

// import Link from "../../Images/Link.svg";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const Speakers = () => {
    // const [images, setImages] = useState(SampleImage1);

    // const navigate = useNavigate();

    const [desc, setDesc] = useState(
        "After working in Dubai for 4 years as Technical Product Architect, started his Tech services firm, called Myrl Tech in 2018 and since then, they've worked with multiple Enterprise clients to build SAAS products."
    );
    const [title, setTitle] = useState("Akhil Sharma");
    const [url, setUrl] = useState("https://www.linkedin.com/in/akhilsails/");
    // console.log(images);

    return <div>Speakers</div>;
};

export default Speakers;
