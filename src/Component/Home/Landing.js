import React from 'react'
import Navbar from '../NavBar/NavBar'

export default function Landing() {
    return (
        <>
        <Navbar/>        
        <section className="landing">
            <div className="dart-overlay">
                <div className="landing-inner">
                    <h1 className="large">AirLine Booking Portal</h1>
                    <p className="lead">
                    &nbsp;&nbsp;&nbsp;AirLine Booking Portal Project is all about book a AirLine ticket. This application is 
                        developed using React. It is the basic trail on developing application 
                        on what we have learned recently. Contrary to popular belief, Lorem 
                        Ipsum is not simply random text. It has roots in a piece of classical 
                        Latin literature from 45 BC, making it over 2000 years old. 
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                        looked up one of the more obscure Latin words, consectetur, from a 
                        Lorem Ipsum passage, and going through the cites of the word in 
                        classical literature, discovered the undoubtable source. Lorem Ipsum 
                        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et 
                        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
                        <br/><br/>
                        &nbsp;&nbsp;&nbsp;This book is a treatise on the theory of ethics, very popular during
                        the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit 
                        amet..", comes from a line in section 1.10.32.
                    </p>
                    
                </div>
            </div>
                                
        </section>
        </>
    )
}