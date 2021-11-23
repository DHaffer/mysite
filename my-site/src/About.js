import { Card } from 'react-bootstrap';
import papi from './img/papi.jpg';

function About() {
    return (
        <div className="About" 
        style={{ 
            backgroundImage: `url(${papi})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center center",
            height: "92.4vh" 
        }}>
               <h2 style={{"color": "white"}} className="text-right">About Me</h2>
              
           
        </div>
        
    );
}
 
export default About;