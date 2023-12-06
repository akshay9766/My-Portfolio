import { Link } from "react-router-dom";
import { useTypewriter, Typewriter, Cursor } from "react-simple-typewriter";

export function Home() {

    return (

        <div className="container-fluid" style={{ backgroundImage: "url(home.jpg)", height: "715px" }}>
            <div className="d-flex">
                <div style={{ paddingTop: "100px", marginLeft: "250px" }}>
                    <img src="Man.png" width="250px" height="500px" />
                </div>
                <div style={{ width: "450px", paddingTop: "250px", marginLeft: "30px"  }} >
                    <h2 className="text-white"> Hello</h2>
                    <h1 className="text-white" style={{ fontFamily: 'Oswald ,sans-serif' }}>
                        <span style={{ fontWeight: 'bold' }}>
                            <Typewriter
                                words={['Myself Akshay', `I'm Web Developer`]}
                                loop={false}
                                typeSpeed={100}
                                deleteSpeed={50}
                            />
                        </span>
                        <span style={{ color: "white" }}>
                            <Cursor cursorStyle='|' />
                        </span>
                    </h1>
                    <p className="text-white fs-6 pt-1">I seek challenging opportunities where allow me to enhance my skills and knowledge.</p>
                    <div><Link to="contact"><span className="btn btn-outline-success mt-4 p-2 w-50 border border-3 border-success rounded-pill fw-bold fs-4">Hire me</span></Link></div>
                </div>

            </div>
        </div>


    )
}