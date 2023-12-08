import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Document, Page } from 'react-pdf';
import { useParams } from 'react-router';
import "./certificates2.css"

export function Certificates2() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [cookie, setCookie, removeCookie] = useCookies();


    useEffect(() => {
        if (cookie.CertificateName == "cj") {
            setCookie("filenamec", "core java.pdf")
        } else if (cookie.CertificateName == "hcj") {
            setCookie("filenamec", "HTML_CSS_JS.pdf")
        } else if (cookie.CertificateName == "oracle") {
            setCookie("filenamec", "Oracle.pdf")
        } else if (cookie.CertificateName == "react") {
            setCookie("filenamec", "ReactJS.pdf")
        } else {
            setCookie("filenamec", "react1.png")
        }
    })

    

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    return (
        <div className='container-fluid border ms-2 mt-4' style={{ padding: "30px", width: "1000px", backgroundColor: 'grey', marginTop: "50px" }}>
                    <Document file={cookie.filenamec} onLoadSuccess={onDocumentLoadSuccess} >
                        {Array.apply(null, Array(numPages)).map((x, i) => i + 1).map((page) => {
                            return (

                                <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false} />
                            );
                        })}
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    </Document>
        </div>

    );

}