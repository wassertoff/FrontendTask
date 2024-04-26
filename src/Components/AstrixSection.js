import { useState } from 'react';
import '../StyleSheets/AstrixSection.css';
import darkLogo from '../Assets/AstrixPage/AstrixLogo Dark.png'
import purpleStripStar from '../Assets/AstrixPage/Star.svg'




export default function AstrixSection() {
    const [context, updateContext] = useState(<span>EVE<br />NTS</span>);
    const [contextHeading, updateContextHeading] = useState('Event');
    return (
        <>
            <div className="AstrixSectionWrapper">
                <div className="darkHeader">
                    <img src={darkLogo} alt="Dark Astrix Logo" />
                </div>
                <div className="purpleStrip">
                    <p className="purpleStripText">Event : Oasis Bus tour , JLN Stadium , Delhi </p>
                    <img src={purpleStripStar} className='StarSymbol' alt="Star Symbol" />
                    <p className="purpleStripText">Collection Live : Meta Lives , live on astrix</p>
                </div>
                <div className="AstrixSectionLeft">
                    <div className="SectionContextTitle">
                        <p className="astrixBig btmar">ASTR<br />IX</p>
                        <p className="contextBig">{context}</p>
                    </div>
                    <div className="imageSlider"></div>
                </div>
            </div>
        </>
    )
}