import { useRef, useEffect, useState } from 'react';
import headerLogo from '../Assets/EventPage/Astrix Logo.svg'
import textAnimation01 from '../Assets/EventPage/Frame 1261154651.png'
import textAnimation02 from '../Assets/EventPage/Frame 1261154652.png'
import textAnimation03 from '../Assets/EventPage/Frame 1261154653.png'
import textAnimation04 from '../Assets/EventPage/Frame 1261154660.png'
import textAnimation05 from '../Assets/EventPage/Frame 1261154661.png'
import textAnimation06 from '../Assets/EventPage/Frame 1261154662.png'
import textAnimation07 from '../Assets/EventPage/Frame 1261154663.png'
import textAnimation08 from '../Assets/EventPage/Frame 1261154664.png'
import '../StyleSheets/HeroSection.css';



export default function HeroSection() {

    // hooks implementation
    const [animationOn, setAnimationOn] = useState(false);
    const animatedTextRef = useRef();
    const animatedEmptyRef = useRef();
    const animateddTextRef = useRef();
    const animatedddTextRef = useRef();


    //variable declerations
    function addClass(element, classAdd) {
        element.classList.add(classAdd)
    }
    function removeClass(element, classRemove) {
        element.classList.remove(classRemove)
    }

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            setAnimationOn(true);
        }, 5000);

        return () => clearTimeout(timeoutID);
    }, []);

    useEffect(() => {
        if (animationOn) {
            addClass(animatedTextRef.current, 'animate');
            addClass(animatedEmptyRef.current, 'animated');
            addClass(animateddTextRef.current, 'animatedd');
            addClass(animatedddTextRef.current, 'animateddd');

        } else {
            removeClass(animatedTextRef.current, 'animate');
            removeClass(animatedEmptyRef.current, 'animated');
            removeClass(animateddTextRef.current, 'animatedd');
            removeClass(animatedddTextRef.current, 'animateddd');

            const timeoutID = setTimeout(() => {
                setAnimationOn(true);
            }, 3000);

            return () => clearTimeout(timeoutID);
        }
    }, [animationOn]);


    return (
        <>
            <div className="heroSectionWrapper">
                <div className="header">
                    <a href="#">
                        <img src={headerLogo} alt="Astrix Logo" />
                    </a>
                </div>
                <div className="heroSection">
                    <div className="LineAnimation">
                        <p className="lineText">WE</p>
                        <div className="animationContainer">
                            <img src={textAnimation01} className='lineImages lineImagesFirst' alt="heroSection Line 1" />
                            <div className="animatedText" ref={animatedTextRef}>
                                <p className="lineText zeroPadding">ORGANIZE THE</p>
                            </div>
                        </div>
                    </div>
                    <div className="LineAnimation overFlowed">
                        <p className="lineText">CONNNECTION</p>
                        <div className="animationContainer">
                            <img src={textAnimation02} alt="heroSection Line 2" className='lineImages lineSecondImage' />
                            <div className="animatedText emptyContainer" ref={animatedEmptyRef}></div>
                        </div>
                    </div>
                    <div className="LineAnimation">
                        <div className="thirdImageWrapper">
                            <img src={textAnimation03} className='lineImages lineThirdImage' alt="HeroSection Line 3" />
                        </div>
                        <div className="positionWrapper">
                            <div className="animatedText thirdAbsoluteDiv" ref={animateddTextRef}>
                                <p className="lineText zeroPadding">BETWEEN</p>
                                <img src={textAnimation04} className='lineImages lineThirdImagee' alt="HeroSection Line 3" />
                                <p className="lineText zeroPadding">MUSIC</p>
                            </div>
                        </div>
                    </div>
                    <div className="LineAnimation overFlowed">
                        <p className="lineText">ARTIST</p>
                        <div className="animationContainer">
                            <img src={textAnimation05} className='lineImages' alt="HeroSection Line 4" />
                            <div className="animatedText">
                                <p className="lineText">Culture</p>
                                <img src={textAnimation06} className='lineImages overFlowedImage' alt="HeroSection line 4" />
                            </div>
                        </div>
                    </div>
                    <div className="LineAnimation">
                        <div className="FourthImageWrapper">
                            <img src={textAnimation07} className='lineImages lineFourthImage' alt="HeroSection Line 4" />
                        </div>
                        <div className="positionWrapper">
                            <div className="animatedText thirdAbsoluteDiv fourthAbsoluteDiv" ref={animatedddTextRef}>
                                <p className="lineText zeroPadding">ART</p>
                                <img src={textAnimation08} className='lineImages lineFourthImagee' alt="HeroSection Line 4" />
                                <p className="lineText zeroPadding">& COLLECTION</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}