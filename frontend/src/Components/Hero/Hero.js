import styles from "./Hero.module.css";
import HashTechLogo from "../../Images/HashTech.svg";
import HeroImage from "../../Images/HeroImage.svg";
import MainImage from "../../Images/MainContainer.svg";

const Hero = () => {
    return (
        <div className={styles.main_container} id="Hero">
            <img src={MainImage} alt="Main Container Image" />
            <nav className={styles.navbar_container}>
                <img src={HashTechLogo} alt="HashTechLogo" />
                <div className={styles.navbar_list_container}>
                    <ul>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#speakers">Speakers</a>
                        </li>
                        <li className={styles.contact}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <a
                    target="_blank"
                    href="https://www.youtube.com/c/CodeChefVIT"
                    rel="noreferrer"
                >
                    <button className={styles.Watch_now}>Watch Now!</button>
                </a>
            </nav>

            <div className={styles.container}>
                <div className={styles.content_container}>
                    <div className={styles.title_heading_container}>
                        <h1>HashTech</h1>
                        <p>
                            It gives you an edge among your peers as it gives
                            you the opportunity to get an insight into the
                            blockchain community from the best in the scene
                            right now and also lets you get your ideas vetted by
                            these experts.{" "}
                        </p>
                        <h3>Event Location : Dr. Ambedkar TT</h3>
                    </div>
                    <a
                        href="https://ccvit.club/graVITasRegistration"
                        target="_blank"
                    >
                        <button>Register Now!</button>
                    </a>{" "}
                </div>
                <img src={HeroImage} alt="HeroImage" />
            </div>
        </div>
    );
};

export default Hero;
