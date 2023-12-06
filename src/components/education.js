import { Carousel, CarouselItem } from "react-bootstrap"

export function Education() {
    return (
        <div className="container-fluid " style={{ backgroundImage: "url(bg3.gif)", height: "750px" }}>
            <Carousel >
                <CarouselItem interval={2000}>
                    <div className=" border border-white rounded-5" style={{ marginLeft: "200px", marginTop: "150px", width: "900px", background: "url(bg.jpg)" }}>
                        <div className=" border border-white rounded-5" style={{ padding: "50px" }}>
                            <h2 className="text-center text-danger" style={{ fontFamily: 'Nanum Myeongjo, serif' }} ><b>Bachelor of Engineering</b></h2>
                            <h4><b>Institute: </b>&nbsp; Late G.N. Sapkal college of Engineering, Nashik,Maharashtra.</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>University: </b>&nbsp;Savitribai Phule Pune University, Maharashtra.</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>Branch: </b>&nbsp;Civil</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>Year of Passing:</b>&nbsp;2021.</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>Percentage: </b>&nbsp;70.10% (7.6 CGPA)</h4>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem interval={2000}>
                    <div className=" border border-white rounded-5" style={{ marginLeft: "200px", marginTop: "150px", width: "900px", background: "url(bg.jpg)" }}>
                        <div className=" border border-white rounded-5" style={{ padding: "50px" }}>
                            <h2 className="text-center text-danger" style={{ fontFamily: 'Nanum Myeongjo, serif' }} ><b>Higher Secondary School Certificate</b></h2>
                            <h4><b>Institute:</b>&nbsp;K.T.H.M. College, Gangapur Road,Nahik , Maharashtra. </h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>University:</b> &nbsp;State Board of Maharashtra.</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>Branch: </b>&nbsp;Science</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>Year of Passing:</b>&nbsp;2017.</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>Percentage:</b>&nbsp;67.54%</h4>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem interval={2000} >
                    <div className=" border border-white rounded-5" style={{ marginLeft: "200px", marginTop: "150px", width: "900px", background: "url(bg.jpg)" }}>
                        <div className=" border border-white rounded-5" style={{ padding: "50px" }}>
                            <h2 className="text-center text-danger" style={{ fontFamily: 'Nanum Myeongjo, serif' }} ><b>Secondary School Certificate</b></h2>
                            <h4><b>Institute:</b> &nbsp;K. K. Wagh Vidyabhavan ,BhausahebNagar,Nashik , Maharashtra.</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>University:</b> &nbsp; State Board of Maharashtra.</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>Year of Passing:</b>&nbsp;2015.</h4>
                            <hr className=" me-4" style={{ marginTop: "0" }} />
                            <h4><b>Percentage:</b> &nbsp;86.80%</h4>
                            <br />
                        </div>
                    </div>
                </CarouselItem>
            </Carousel>
        </div>
    )
}
