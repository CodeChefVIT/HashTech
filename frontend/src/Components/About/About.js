import styles from "./About.module.css";
import AboutImage from "../../Images/About.svg";

const About = () => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.title_heading_container}>
                <h1>What’s HashTech?</h1>
                <p>
                    HashTech is an event designed to get you started on your
                    blockchain-developing journey. It gives you an edge compared
                    to your peers and the opportunity to learn and work
                    alongside the best in the industry right now. You also have
                    a chance to get your blockchain-inspired ideas vetted by
                    these experts. Become a connoisseur of blockchain and get
                    started in your journey!
                </p>
            </div>
            <img src={AboutImage} alt="About Image here" />
        </div>
    );
};

export default About;
