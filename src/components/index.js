import { BrowserRouter ,Link, Route,Routes} from "react-router-dom";
import { Home } from "./home";
import { AboutUs } from "./aboutus";
import { Contact } from "./contact";
import ScrollToTop from "./ScrollToTop";
import { Skills } from "./Skills";
import { Education } from "./education";
import { Documents } from "./documents";
import { Document2 } from "./document2";
import { Certificates } from "./certificates";
import { Certificates2 } from "./certificates2";

import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export function Index() {
    


    return (
        <div className="container-fluid">
            <BrowserRouter basename="/My-Portfolio">
                <div className="row">
                    <div className="col-sm-2 fixed-top one bg-dark" style={{ height: "800px" }}>
                        <img src="photo.jpg" width="200px" height="200px" className="rounded-circle border border-default border-5" />
                        <div style={{ marginLeft: "50px" }}>
                            <nav>
                                <Link to="home"><div className="btn text-white mb-4 mt-3" style={{fontWeight:"500",fontSize:"20px"}}><i class="bx bx-home"></i>Home</div></Link>
                                <Link to="aboutus"><div className="btn text-white mb-3" style={{fontWeight:"500",fontSize:"20px"}}>About me</div></Link>
                                <Link to="education" ><div className="btn text-white mb-3" style={{fontWeight:"500",fontSize:"20px"}}>Education</div></Link>
                                <Link to="skills"><div className="btn text-white mb-3" style={{fontWeight:"500",fontSize:"20px"}}>Skills</div></Link><br/>
                                <Link to="documents"><div className="btn text-white mb-3" style={{fontWeight:"500",fontSize:"20px"}}>Documents</div></Link>
                                <Link to="contact"><div className="btn text-white mb-3" style={{fontWeight:"500",fontSize:"20px"}}>Contact</div></Link>
                            </nav>
                        </div>
                        <div className="d-flex " style={{ marginTop: "60px" }}>
                            <i class="bi bi-facebook bi-fill text-primary me-3" style={{ fontSize: "25px" }}></i>
                            <i class="bi bi-instagram bi-fill text-danger me-3" style={{ fontSize: "25px" }}></i>
                            <i class="bi bi-linkedin bi-fill text-primary me-3" style={{ fontSize: "25px" }}></i>
                            <i class="bi bi-whatsapp bi-fill text-success me-3" style={{ fontSize: "25px" }}></i>
                        </div>
                    </div>
                    <div className="col-sm-10 two " style={{marginLeft:"240px"}}>
                        <nav>
                                <ScrollToTop/>
                                    <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="home" element={<Home />} />
                                        <Route path="aboutus" element={<AboutUs />} />
                                        <Route path="contact" element={<Contact />} />
                                        <Route path="home/contact" element={<Contact />} />
                                        <Route path="skills" element={<Skills/>} />
                                        <Route path="education" element={<Education/>} />
                                        <Route path="documents" element={<Documents/>}/>
                                        <Route path="documents2/:docname" element={<Document2/>}/>
                                        <Route path="certificates" element={<Certificates/>}/>
                                        <Route path="certificates2" element={<Certificates2/>}/>
                                    </Routes>
                            
                        </nav>
                    </div>
                </div>

            </BrowserRouter>
        </div>
    )
}