import "./aboutus.css"
export function AboutUs() {

    return (
        <div className="container-fluid" style={{ backgroundImage: "url(bg3.gif)"}}>
            <div style={{ backgroundImage: "url(aboutme.png)", height: "200px" }}>
                <div style={{ marginLeft: "430px", paddingTop: "60px",opacity:"1" }}>
                    <h1 className="text-white"style={{fontSize:"50px"}}>Know me more</h1>
                    <hr className="mt-1 " style={{ marginLeft: "60px", color: "green", width: "150px", background: "#095484", border: "5", height: "3px" }} />
                </div>
            </div>
            <div className="d-flex p-4" style={{ height: "500px", width: "1260px"}}>
                <div className="border border-dark rounded-5 m-4" id="size" style={{ backgroundImage: "url(bg.jpg)", width: "1000px" }}>
                    <h1 className="p-4" style={{ fontFamily: 'Nanum Myeongjo, serif' }} ><b>Rayate Akshay Madhav</b></h1>
                    <hr className="ms-4 me-4" />
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: "18px" }}>
                        <div className="ms-4 d-flex" style={{ marginBottom: "0" }} ><p><b className="bi bi-geo-alt"> Address : </b></p><p>&nbsp; At. Post khadak Malegaon, Tal. Niphad, Dist. Nashik, Maharashtra -422304.</p></div>
                        <hr className="ms-4 me-4" style={{ marginTop: "0" }} />
                        <div className="ms-4 d-flex"><p><b className="bi bi-envelope"> Email : </b></p><p>&nbsp;akshayrayate1999@gmail.com</p></div>
                        <hr className="ms-4 me-4" style={{ marginTop: "0" }} />
                        <div className="ms-4 d-flex"><p><b className="bi bi-phone"> Mobile No. : </b></p><p>&nbsp;+91 9766387043</p></div>
                        <hr className="ms-4 me-4" style={{ marginTop: "0" }} />
                        <div className="ms-4 d-flex"><p><b className="bi bi-phone"> Date of Birth : </b></p><p>&nbsp;15/05/1999</p></div>
                        <hr className="ms-4 me-4" style={{ marginTop: "0" }} />
                        <div className="ms-4 d-flex"><p><b className="bi bi-phone"> Gender : </b></p><p>&nbsp;Male</p></div>
                    </div>
                </div>
                <div className="w-50 ">
                    <div className="border border-success rounded-5 m-4" id="size" style={{ backgroundImage: "url(bg.jpg)", height: "200px" }}>
                        <h4 className="p-4 pb-0" style={{ fontFamily: 'Nanum Myeongjo, serif' }}><b>Langauage I Know :</b></h4>
                        <hr className="ms-4 me-4 mb-3" />
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: "16px" }}>
                            <ul>
                                <div className="d-flex pe-4">
                                    <li className="ms-4 pb-2 " style={{ width: "100px" }}><b>English</b></li>
                                    <div class="skill-bar">
                                        <span class="skill-per english">
                                            <span class="tooltip">90</span>
                                        </span>
                                    </div>
                                </div>
                                <hr className="ms-4 me-4" style={{ marginTop: "2px", marginBottom: "5px" }} />
                                <div className="d-flex pe-4">
                                    <li className="ms-4  pb-2" style={{ width: "100px" }}><b>Hindi</b></li>
                                    <div class="skill-bar">
                                        <span class="skill-per hindi">
                                            <span class="tooltip">95%</span>
                                        </span>
                                    </div>
                                </div>
                                <hr className="ms-4 me-4" style={{ marginTop: "2px", marginBottom: "5px" }} />
                                <div className="d-flex pe-4">
                                    <li className="ms-4  pb-2" style={{ width: "100px" }}><b>Marathi</b></li>
                                    <div class="skill-bar  ">
                                        <span class="skill-per marathi">
                                            <span class="tooltip">100%</span>
                                        </span>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="border border-primary rounded-5 m-4 " id="size" style={{ backgroundImage: "url(bg.jpg)", height: "200px" }} >
                        <h4 className="p-4 pt-2 pb-0" style={{ fontFamily: 'Nanum Myeongjo, serif' }}><b>Hobbies :</b></h4>
                        <hr className="ms-4 me-4 mb-1" />
                        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: "16px" }}>
                            <ul>
                                <li className="ms-4 pb-2 "><b>Travelling</b></li>
                                <hr className="ms-4 me-4" style={{ marginTop: "0px", marginBottom: "0px" }} />
                                <li className="ms-4 pb-2 " ><b>Crafting</b></li>
                                <hr className="ms-4 me-4" style={{ marginTop: "0px", marginBottom: "0px" }} />
                                <li className="ms-4 pb-2 "><b>Listening Music</b></li>
                                <hr className="ms-4 me-4" style={{ marginTop: "0px", marginBottom: "0px" }} />
                                <li className="ms-4 pb-2 "><b>Always Like to learn new things.</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}