import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Document, Page } from 'react-pdf';
import { useParams } from 'react-router';
import "./document2.css"

export function Document2() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [cookie, setCookie, removeCookie] = useCookies();
    const [Visible, setVisible] = useState(false);


    useEffect(() => {
        if (cookie.docname == "resume") {
            setCookie("filename", "Akshay_Rayate_Resume.pdf")
            setVisible(true);
        } else if (cookie.docname == "BEcertificate") {
            setCookie("filename", "BE_Certificate.pdf")
            setVisible(false)
        } else if (cookie.docname == "BEmarksheet") {
            setCookie("filename", "Gopal_Patil_Resume.pdf")
            setVisible(false)
        } else if (cookie.docname == "12thMarksheet") {
            setCookie("filename", "12 TH MARKSHEET.pdf")
            setVisible(false)
        } else if (cookie.docname == "10thMarksheet") {
            setCookie("filename", "10TH MARKSHEET.pdf")
            setVisible(false)
        } else {
            setCookie("filename", "react1.png")
            setVisible(false)
        }
    })

    

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }


    return (
        <div className='container-fluid border ms-2 mt-4' style={{ padding: "30px", width: "700px", backgroundColor: 'grey', marginTop: "50px" }}>
            {Visible && (
                <div>
                    <a href='Akshay_Rayate_Resume.pdf' download class="download-button">Download</a>
                </div>
            )}
                    <Document file={cookie.filename} onLoadSuccess={onDocumentLoadSuccess} >
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