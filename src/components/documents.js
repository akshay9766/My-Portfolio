import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Document2 } from './document2';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

export function Documents() {
    const [doc, setDoc] = useState();
    const [cookie, setCookie, removeCookie] = useCookies();
    const [Visible, setVisible] = useState(true);
    const navigate=useNavigate();

    useEffect(() => {
        setVisible(false);
    }, []);

    function showdoc1() {
        setCookie("docname", "resume");
        setVisible(true);
    }
    function showdoc2() {
        setCookie("docname", "BEcertificate");
        setVisible(true);
    }
    function showdoc3() {
        setCookie("docname", "BEmarksheet");
        setVisible(true);
    }
    function showdoc4() {
        setCookie("docname", "12thMarksheet");
        setVisible(true);
    }
    function showdoc5() {
        setCookie("docname", "10thMarksheet");
        setVisible(true);
    }

    function removedoc() {
        setVisible(false)
    }

    function showCourseCertificates(){
        navigate("/certificates")
    }

    return (
        <div className='container-fluid' style={{ backgroundImage: "url(bg3.gif)", width: "1300px" }}>
            <div className='container-fluid' >
                <div>
                    <h1 className='text-white fw-bold p-2' style={{ fontFamily: 'Nanum Myeongjo, serif', textAlign: "center", fontSize: "60px" }}>Documents</h1>
                </div>
                <div className="row ">
                    <div className='col-5 border border-4 border-info rounded-5 p-4' style={{ fontFamily: 'Noto Sans ,sans-serif' }}>
                        <div className='d-flex'>
                            <div style={{ width: "180px" }} className='border border-2 p-3' >
                                <img src='resume.png' width="60px" height="75px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                <p className="text-white mb-0" style={{ fontSize: "25px" }}><i className='bi bi-file-earmark-pdf-fill' style={{ fontSize: "30px", color: "red" }} />&nbsp; Resume </p>
                                <p className='btn text-primary ms-4 mt-0 mb-0' onClick={showdoc1}>See <i className='bi bi-eye-fill' /></p>
                            </div>
                            <div style={{ width: "180px", marginLeft: "20px" }} className='border border-2 p-3 ' >
                                <img src='certificate.png' width="100px" height="75px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                <p className="text-white mb-0" style={{ fontSize: "25px" }}><i className='bi bi-file-earmark-pdf-fill' style={{ fontSize: "30px", color: "red" }} />&nbsp; BE Certificate</p>
                                <p className='btn text-primary ms-4 mt-0 mb-0' onClick={showdoc2}>See <i className='bi bi-eye-fill' /></p>
                            </div>
                            <div style={{ width: "180px", marginLeft: "20px" }} className='border border-2 p-3 ' >
                                <img src='certificate.png' width="60px" height="75px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                <p className="text-white mb-0" style={{ fontSize: "25px" }}><i className='bi bi-file-earmark-pdf-fill' style={{ fontSize: "30px", color: "red" }} />&nbsp; BE Marksheet</p>
                                <p className='btn text-primary ms-4 mt-0 mb-0' onClick={showdoc3}>See <i className='bi bi-eye-fill' /></p>
                            </div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div style={{ width: "180px", marginLeft: "20px" }} className='border border-2 p-3 ' >
                                <img src='hsc.png' width="60px" height="75px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                <p className="text-white mb-0" style={{ fontSize: "25px" }}><i className='bi bi-file-earmark-pdf-fill' style={{ fontSize: "30px", color: "red" }} />&nbsp; HSC Certificate</p>
                                <p className='btn text-primary ms-4 mt-0 mb-0' onClick={showdoc4}>See <i className='bi bi-eye-fill' /></p>
                            </div>
                            <div style={{ width: "180px", marginLeft: "20px" }} className='border border-2 p-3 ' >
                                <img src='ssc.png' width="60px" height="75px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                <p className="text-white mb-0" style={{ fontSize: "25px" }}><i className='bi bi-file-earmark-pdf-fill' style={{ fontSize: "30px", color: "red" }} />&nbsp; SSC Certificate</p>
                                <p className='btn text-primary ms-4 mt-0 mb-0' onClick={showdoc5}>See <i className='bi bi-eye-fill' /></p>
                            </div>
                        </div>
                        <div className='mt-4 p-2' style={{marginLeft:"110px"}} >
                            <button className='btn btn-primary' onClick={showCourseCertificates}>click to see Course Certificates</button>
                        </div>
                    </div>
                    <div className='col-6'>

                        {Visible && (
                            <div>
                                <button onClick={removedoc} style={{ marginLeft: "500px", marginTop: "50px" }} >
                                    close <i className='bi bi-x-square-fill' />
                                </button>
                                <Document2 />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div style={{ padding: "250px" }}></div>
        </div>

    );

}