import { useState, useRef } from 'react';
import '../StyleSheets/AstrixSection.css';
import darkLogo from '../Assets/AstrixPage/AstrixLogo Dark.png'
import purpleStripStar from '../Assets/AstrixPage/Star.svg'
import venue from '../Assets/AstrixPage/AstrixPageEvents/Icons.svg'
import time from '../Assets/AstrixPage/AstrixPageEvents/Iconss.svg'
import artist01 from '../Assets/AstrixPage/AstrixPageEvents/Frame 1261154686.png'
import artist02 from '../Assets/AstrixPage/AstrixPageEvents/Frame 1261154684.png'
import artist03 from '../Assets/AstrixPage/AstrixPageEvents/Frame 1261154685.png'
import people01 from '../Assets/AstrixPage/AstrixPageCollections/Peoples/Ellipse 1.png'
import people02 from '../Assets/AstrixPage/AstrixPageCollections/Peoples/Ellipse 2.png'
import people03 from '../Assets/AstrixPage/AstrixPageCollections/Peoples/Ellipse 3.png'
import people04 from '../Assets/AstrixPage/AstrixPageCollections/Peoples/Ellipse 4.png'
import people05 from '../Assets/AstrixPage/AstrixPageCollections/Peoples/Ellipse 5.png'
import qrCode from '../Assets/AstrixPage/AstrixPageEvents/image 131.svg'
import collectionImage01 from '../Assets/AstrixPage/AstrixPageCollections/Collectible.png'
import SliderImage01 from '../Assets/AstrixPage/AstrixPageEvents/Slider/Frame 1261154670.png'
import SliderImage02 from '../Assets/AstrixPage/AstrixPageEvents/Slider/Frame 1261154671.png'
import SliderImage03 from '../Assets/AstrixPage/AstrixPageEvents/Slider/Frame 1261154672.png'
import SliderImage04 from '../Assets/AstrixPage/AstrixPageEvents/Slider/Frame 1261154673.png'
import SliderCollectImage01 from '../Assets/AstrixPage/AstrixPageCollections/Slider/Frame 1261154670.png'
import SliderCollectImage02 from '../Assets/AstrixPage/AstrixPageCollections/Slider/Frame 1261154671.png'
import SliderCollectImage03 from '../Assets/AstrixPage/AstrixPageCollections/Slider/Frame 1261154672.png'
import SliderCollectImage04 from '../Assets/AstrixPage/AstrixPageCollections/Slider/Frame 1261154673.png'


export default function AstrixSection() {
    const [eventActive, updateEventActive] = useState(true);

    const toggleButton = useRef();
    const ContextDetailHead = useRef();

    function handleEventToggle() {
        updateEventActive(true);
        toggleButton.current.style.left = '0';
        toggleButton.current.style.width = '6.5em';
        ContextDetailHead.current.style.marginBottom = '14em'
    }


    function handleCollectionToggle() {
        updateEventActive(false);
        toggleButton.current.style.left = '48%';
        toggleButton.current.style.width = '9em';
        ContextDetailHead.current.style.marginBottom = '0em'
    }


    return (
        <>
            <div className="AstrixSectionWrapper">
                <div className="AstrixContextWrappper">
                    <div className="AstrixSectionLeft">
                        <div className="darkHeader">
                            <img src={darkLogo} alt="Dark Astrix Logo" />
                        </div>
                        <div className="SectionContextTitle">
                            <p className="astrixBig">ASTR<br />IX</p>

                            {eventActive ? (
                                <>
                                    <p className="contextBig tpmar">
                                        <span>EVE<br />NTS</span>
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="contextBig tpmar">
                                        <span className=''>COLL<br />ECTI<br />BLE</span>
                                    </p>
                                </>
                            )}
                            <div className="imageOverFlowWrapper">
                                <div className="imageSlider">
                                    <div className="slides">
                                        {eventActive ? <img src={SliderImage01} alt="Slider Image" /> : <img src={SliderCollectImage01} alt="Slider Image" />}
                                    </div>
                                    <div className="slides">
                                        {eventActive ? <img src={SliderImage02} alt="Slider Image" /> : <img src={SliderCollectImage02} alt="Slider Image" />}
                                    </div>
                                    <div className="slides">
                                        {eventActive ? <img src={SliderImage03} alt="Slider Image" /> : <img src={SliderCollectImage03} alt="Slider Image" />}
                                    </div>
                                    <div className="slides">
                                        {eventActive ? <img src={SliderImage04} alt="Slider Image" /> : <img src={SliderCollectImage04} alt="Slider Image" />}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="toggleButtonAbs">
                            <div className="toggleButton">
                                <button className="toggleSwitch" onClick={handleEventToggle}>Event</button>
                                <button className="toggleSwitch" onClick={handleCollectionToggle}>Collections</button>
                                <div className="shadow" ref={toggleButton}></div>
                            </div>
                        </div>
                        <div className="purpleStrip">
                            <p className="purpleStripText">Event : Oasis Bus tour , JLN Stadium , Delhi </p>
                            <img src={purpleStripStar} className='StarSymbol' alt="Star Symbol" />
                            <p className="purpleStripText">Collection Live : Meta Lives , live on astrix</p>
                        </div>
                    </div>
                    <div className="contextDetailWrapper">
                        <div className="contextHeading" >Explore Your First <br />{
                            eventActive ? <p>Event</p> : <p>Collections</p>}</div>
                        <div className="ContextDetailHead" ref={ContextDetailHead}>
                            <p className="Context">{
                                eventActive ? (
                                    <p className="contextTitle">Event Name</p>
                                ) : (
                                    <p className="contextTitle lineh">Meta<br />Lives</p>
                                )
                            }</p>
                            <div className="ContextSmallDetail">
                                {eventActive ? (
                                    <>
                                        <div className="ContextBelowWrapper">
                                            <div className="venue marrt">
                                                <img src={venue} alt="Venue Icon" />
                                                <p className="ContextBelowText textAdj">Venue</p>
                                            </div>
                                            <div className="time">
                                                <img src={time} alt="Time Icon" />
                                                <p className="ContextBelowText textAdj">04/3/2024 @19:00</p>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <> <div className="ContextBelowWrapper">
                                        <p className="ContextBelowText">Live in Astrix</p>
                                    </div>
                                    </>
                                )}
                            </div>
                            <div className="ContextDescription">
                                Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
                            </div>
                            {eventActive ? (
                                <>
                                    <div className="ContextFooter">
                                        <div className="eventArtists">
                                            <p className="peopleText peopleMar">Artist Lineup</p>
                                            <div className="ArtistImages">
                                                <img src={artist01} className='smallImage' alt="First Artist" />
                                                <img src={artist02} className='bigImage' alt="Second Artist" />
                                                <img src={artist03} className='smallImage' alt="Third Artist" />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                                : (
                                    <>
                                        <div className="ContextFooter">
                                            <div className="peopleImages">
                                                <img src={people01} className='image1' alt="Profiles" />
                                                <img src={people02} className='image2' alt="Profiles" />
                                                <img src={people03} className='image3' alt="Profiles" />
                                                <img src={people04} className='image4' alt="Profiles" />
                                                <img src={people05} className='image5' alt="Profiles" />
                                            </div>
                                            <div className="peopleText">22k people interested</div>
                                        </div>
                                        <div className="cards">
                                            <p className="collectible">Collectibles</p>
                                            <div className="cardCollection">
                                                <div className="card">
                                                    <div className="cardHead">
                                                        <p className="CardDate">2024</p>
                                                        <p className="byPeople">by <span>Pablo</span></p>
                                                    </div>
                                                    <div className="cardContent">
                                                        <p className="cardCollectionName">Collectible Name</p>
                                                        <img src={collectionImage01} alt="Collection Card" />
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="cardHead">
                                                        <p className="CardDate">2024</p>
                                                        <p className="byPeople">by <span>Pablo</span></p>
                                                    </div>
                                                    <div className="cardContent">
                                                        <p className="cardCollectionName">Collectible Name</p>
                                                        <img src={collectionImage01} alt="Collection Card" />
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="cardHead">
                                                        <p className="CardDate">2024</p>
                                                        <p className="byPeople">by <span>Pablo</span></p>
                                                    </div>
                                                    <div className="cardContent">
                                                        <p className="cardCollectionName">Collectible Name</p>
                                                        <img src={collectionImage01} alt="Collection Card" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            {eventActive ? (
                                <>
                                    <div className="joinWaitingList">
                                        <img src={qrCode} className='qrCode' alt="Qr Code for Buying Tickets" />
                                        <button className="join">Join Waitlist</button>
                                    </div>
                                </>
                            )
                                : (
                                    <>
                                        <div className="joinWaitingList justify">
                                            <button className="join">Join Waitlist</button>
                                        </div>
                                    </>
                                )

                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}