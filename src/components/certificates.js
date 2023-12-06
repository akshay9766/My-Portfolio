import { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { Document2 } from './document2';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Certificates2 } from './certificates2';

export function Certificates() {
    const [doc, setDoc] = useState();
    const [cookie, setCookie, removeCookie] = useCookies();
    const [Visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(false);
    }, []);

    function showdoc1() {
        setCookie("CertificateName", "cj");
        setVisible(true);
    }
    function showdoc2() {
        setCookie("CertificateName", "hcj");
        setVisible(true);
    }
    function showdoc3() {
        setCookie("CertificateName", "oracle");
        setVisible(true);
    }
    function showdoc4() {
        setCookie("CertificateName", "react");
        setVisible(true);
    }

    function removedoc() {
        setVisible(false)
    }

    return (
        <div className='container-fluid' style={{ backgroundImage: "url(bg3.gif)", width: "1300px" }}>
            <div className='container-fluid' >
                <div>
                    <h1 className='text-white fw-bold p-2' style={{ fontFamily: 'Nanum Myeongjo, serif', textAlign: "center", fontSize: "60px" }}>Course Ceertificates</h1>
                </div>
                    <div className='row' style={{ fontFamily: 'Noto Sans ,sans-serif' }}>
                        <div className='d-flex'>
                            <div style={{ width: "180px" }} className='border p-3' >
                                <img src='cjc.png' width="100px" height="75px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                <p className="text-white mb-0" style={{ fontSize: "25px" }}><i className='bi bi-file-earmark-pdf-fill' style={{ fontSize: "30px", color: "red" }} />&nbsp; Core java </p>
                                <p className='btn text-primary ms-4 mt-0 mb-0' onClick={showdoc1}>See <i className='bi bi-eye-fill' /></p>
                            </div>
                            <div style={{ width: "180px", marginLeft: "20px" }} className='border p-3 ' >
                                <img src='hcjc.png' width="100px" height="75px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                <p className="text-white mb-0" style={{ fontSize: "25px" }}><i className='bi bi-file-earmark-pdf-fill' style={{ fontSize: "30px", color: "red" }} />&nbsp; HTML/CSS/JS</p>
                                <p className='btn text-primary ms-4 mt-0 mb-0' onClick={showdoc2}>See <i className='bi bi-eye-fill' /></p>
                            </div>
                            <div style={{ width: "180px", marginLeft: "20px" }} className='border p-3 ' >
                                <img src='oraclec.png' width="100px" height="75px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                <p className="text-white mb-0" style={{ fontSize: "25px" }}><i className='bi bi-file-earmark-pdf-fill' style={{ fontSize: "30px", color: "red" }} />&nbsp; Oracle</p>
                                <p className='btn text-primary ms-4 mt-0 mb-0' onClick={showdoc3}>See <i className='bi bi-eye-fill' /></p>
                            </div>
                            <div style={{ width: "180px", marginLeft: "20px" }} className='border p-3 ' >
                                <img src='reactc.png' width="100px" height="75px" style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
                                <p className="text-white mb-0" style={{ fontSize: "25px" }}><i className='bi bi-file-earmark-pdf-fill' style={{ fontSize: "30px", color: "red" }} />&nbsp; React JS</p>
                                <p className='btn text-primary ms-4 mt-0 mb-0' onClick={showdoc4}>See <i className='bi bi-eye-fill' /></p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>

                        {Visible && (
                            <div>
                                <button onClick={removedoc} style={{ marginLeft: "500px", marginTop: "50px" }} >
                                    close <i className='bi bi-x-square-fill' />
                                </button>
                                <Certificates2 />
                            </div>
                        )}
                    </div>
            </div>
            <div style={{ padding: "250px" }}></div>
        </div>

    );

}