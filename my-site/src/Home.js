import me from './img/me.jpg';
import { BlinkingCursorTextBuilder } from 'react-animated-text-builders';

function Home() {
    return (
        <div 
            className="Home" 
            style={{ 
                backgroundImage: `url(${me})`,
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "center center",
                height: "92.4vh" 
            }} 
        >
            <div className="container h-100 d-flex justify-content-center align-items-center">
                            <BlinkingCursorTextBuilder
                                blinkTimeAfterFinish={-1}
                                timeout={75}
                                // cursorComponent={<div>..</div>}
                                style={{
                                "color": "#c9c9c9",
                                "font-size": "7.6rem",
                                "font-family": "Bebas Neue"
                                }}
                                >Hey,         I'm         Daryn. 
                            </BlinkingCursorTextBuilder>
            </div>
        </div>
        
    );
}
 
export default Home;