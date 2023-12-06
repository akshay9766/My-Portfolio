import { useState } from "react"
import "./skills.css"
export function Skills() {
    const [data1, setData1] = useState({ course1: "Core Java", data11: "", data14: "" });
    const [style1, setStyle] = useState({ opacity: "" });
    const [data2, setData2] = useState({ course2: "Adv. Java", data21: "", data22: ""});
    const [data3, setData3] = useState({ course3: "HTML/CSS/JS", data31: "", data32: "", data33: ""});
    const [data4, setData4] = useState({ course4: "ReactJS", data41: "", data42: "", data43: ""});
    const [data5, setData5] = useState({ course5: "Oracle", data51: ""});




    function changeContent1() {
        setData1({
            data11: "Good understanding of object-oriented concepts like Encapsulation, Abstraction, Polymorphism, and Inheritance",
            data14: "Good practical knowledge of Arrays and Collections like List, Set Map"
        });
        setStyle({ opacity: "1" })
    }
    function changeContent21() {
        setData1({ course1: "Core Java" })
        setStyle({ opacity: "0" })
    }




    function changeContent2() {
        setData2({
            data21: "Servlet ,Ssp ,JDBC",
            data22: "Hands on experience on connection servlet ,jsp to DataBase connection",
        });
        setStyle({ opacity: "1" })
    }
    function changeContent22() {
        setData2({ course2: "Adv. Java" })
        setStyle({ opacity: "0" })
    }





    function changeContent3() {
        setData3({
            data31: "Different types of tags ,attributes,properties,css styles,selectors,fucntions etc.",
            data32: "css animation ,dynamic style binding ",
            data33: "Hands on experience on all tags and attributes",
        });
        setStyle({ opacity: "1" })
    }
    function changeContent23() {
        setData3({ course3: "HTML/CSS/JS" })
        setStyle({ opacity: "0" })
    }



    function changeContent4() {
        setData4({
            data41: "Good understanding of Data binding dynamically.",
            data42: "Interaction between react and bootstrap classes.",
            data43: "Hands on experience on Third party libraries like Formik,yup,Jquery etc.",
        });
        setStyle({ opacity: "1" })
    }
    function changeContent42() {
        setData4({ course4: "ReactJS" })
        setStyle({ opacity: "0" })
    }

    function changeContent5() {
        setData5({
            data51: "knowledge of SQL/PLSQL like writing queries, Nested queries, views, Tables, materialized views, locks, sequences, indexes, functions, packages, Triggers et",
        });
        setStyle({ opacity: "1" })
    }
    function changeContent52() {
        setData5({ course5: "Oracle" })
        setStyle({ opacity: "0" })
    }
    return (
        <div className="container-fluid" style={{ backgroundImage: "url(bg3.gif)", height: "750px" }}>
            <div className="d-flex flex-wrap" style={{ marginLeft: "70px" }}>

                
                <div id="card" className="border border-dark rounded-4 " onMouseOver={changeContent1} onMouseOut={changeContent21}>
                    <div class="imgbox" className="d-flex border border-dark rounded-4 bg-white" style={{ transform: "translateY(-100px)", boxShadow: "0px 5px 20px rgba(0,0,0,0.5)", height: "150px" }}>
                        <div >
                            <h6 style={{ position: "absolute", top: "34px", left: "31px" }}><b>95%</b></h6>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="ps-3 pt-3">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="30" cy="30" r="22" stroke-linecap="round" id="circle" />
                            </svg>
                        </div>
                        <img src="cj.png" width="100px" height="100px" class="img1" />
                    </div>
                    <div style={{ marginTop: "-80px" }} >
                        <h2 style={{marginLeft:"30px",marginTop:"20px"}}>{data1.course1}</h2>
                        <div style={{ marginLeft: "-40px", marginRight: "-40px", ...style1, fontWeight: "700" }}>
                            <p><i className="bi bi-chevron-right" />{data1.data11}</p>
                            <p><i className="bi bi-chevron-right" />{data1.data14}</p>
                        </div>
                    </div>
                </div>
                <div id="card" className="border border-dark rounded-4 " onMouseOver={changeContent2} onMouseOut={changeContent22}>
                    <div class="imgbox" className="d-flex border border-dark rounded-4 bg-white" style={{ transform: "translateY(-100px)", boxShadow: "0px 5px 20px rgba(0,0,0,0.5)", height: "150px" }}>
                        <div >
                            <h6 style={{ position: "absolute", top: "34px", left: "31px" }}><b>90%</b></h6>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="ps-3 pt-3">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="30" cy="30" r="22" stroke-linecap="round" id="circle1" />
                            </svg>
                        </div>
                        <img src="aj.png" width="100px" height="80px" class="img1" />
                    </div>
                    <div style={{ marginTop: "-80px" }} >
                        <h2 style={{marginLeft:"30px",marginTop:"20px"}}>{data2.course2}</h2>
                        <div style={{ marginLeft: "-40px", marginRight: "-40px", ...style1, fontWeight: "700" }}>
                            <p><i className="bi bi-chevron-right" />{data2.data21}</p>
                            <p><i className="bi bi-chevron-right" />{data2.data22}</p>
                        </div>
                    </div>
                </div>
                <div id="card" className="border border-dark rounded-4 " onMouseOver={changeContent3} onMouseOut={changeContent23}>
                    <div class="imgbox" className="d-flex border border-dark rounded-4 bg-white" style={{ transform: "translateY(-100px)", boxShadow: "0px 5px 20px rgba(0,0,0,0.5)", height: "150px" }}>
                        <div >
                            <h6 style={{ position: "absolute", top: "34px", left: "31px" }}><b>97%</b></h6>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="ps-3 pt-3">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="30" cy="30" r="22" stroke-linecap="round" id="circle2" />
                            </svg>
                        </div>
                        <img src="hcj.png" width="100px" height="100px" class="img1" />
                    </div>
                    <div style={{ marginTop: "-80px" }} >
                        <h2 style={{marginLeft:"10px",marginTop:"10px"}} >{data3.course3}</h2>
                        <div style={{ marginLeft: "-40px", marginRight: "-40px", ...style1, fontWeight: "700" }}>
                            <p><i className="bi bi-chevron-right" />{data3.data31}</p>
                            <p><i className="bi bi-chevron-right" />{data3.data32}</p>
                            <p><i className="bi bi-chevron-right" />{data3.data32}</p>
                        </div>
                    </div>
                </div>
                <div id="card" className="border border-dark rounded-4 " onMouseOver={changeContent4} onMouseOut={changeContent42}>
                    <div class="imgbox" className="d-flex border border-dark rounded-4 bg-white" style={{ transform: "translateY(-100px)", boxShadow: "0px 5px 20px rgba(0,0,0,0.5)", height: "150px" }}>
                        <div >
                            <h6 style={{ position: "absolute", top: "34px", left: "31px" }}><b>95%</b></h6>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="ps-3 pt-3">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="30" cy="30" r="22" stroke-linecap="round" id="circle4" />
                            </svg>
                        </div>
                        <img src="react1.png" width="80px" height="80px" class="img1" />
                    </div>
                    <div style={{ marginTop: "-80px" }} >
                        <h2 style={{marginLeft:"30px",marginTop:"20px"}}>{data4.course4}</h2>
                        <div style={{ marginLeft: "-40px", marginRight: "-40px", ...style1, fontWeight: "700" }}>
                            <p><i className="bi bi-chevron-right" />{data4.data41}</p>
                            <p><i className="bi bi-chevron-right" />{data4.data42}</p>
                            <p><i className="bi bi-chevron-right" />{data4.data42}</p>
                        </div>
                    </div>
                </div>
                <div id="card" className="border border-dark rounded-4 " onMouseOver={changeContent5} onMouseOut={changeContent52}>
                    <div class="imgbox" className="d-flex border border-dark rounded-4 bg-white" style={{ transform: "translateY(-100px)", boxShadow: "0px 5px 20px rgba(0,0,0,0.5)", height: "150px" }}>
                        <div >
                            <h6 style={{ position: "absolute", top: "34px", left: "31px" }}><b>97%</b></h6>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="ps-3 pt-3">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="#e91e63" />
                                        <stop offset="100%" stop-color="#673ab7" />
                                    </linearGradient>
                                </defs>
                                <circle cx="30" cy="30" r="22" stroke-linecap="round" id="circle5" />
                            </svg>
                        </div>
                        <img src="oracle.png" width="140px" height="90px" style={{marginLeft:"-250px"}} />
                    </div>
                    <div style={{ marginTop: "-80px" }} >
                        <h2 style={{marginLeft:"30px",marginTop:"20px"}}>{data5.course5}</h2>
                        <div style={{ marginLeft: "-40px", marginRight: "-40px", ...style1, fontWeight: "700" }}>
                            <p><i className="bi bi-chevron-right" />{data5.data51}</p>
                        </div>
                    </div>
                </div>
                
                
                


            </div>
        </div>
    )
}