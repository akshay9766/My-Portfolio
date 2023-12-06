import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap"
import { useState } from "react";


export function Contact() {
    const [formState, setFormState] = useState({});

    
    const changeHandler = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    };
    
    const submitHnadler=(event)=>{
        event.preventDefault();
        const config = {
            SecureToken: '5675a6c4-06a9-4427-a2e8-4f845946e53e',
            To: "akshay1999@yopmail.com",
            From: formState.email,
            Subject:"Mail from porfolio",
            Body:  `${formState.name} connected to you over email`
        };
        if(window.Email){
            window.Email.send(config).then(()=>alert("Email send successfully"));
        }
    }
    return (
        <div className="container-fluid" style={{ backgroundImage: "url(bg3.gif)" }}>
            <div style={{ backgroundImage: "url(contactme.png)", height: "200px" }}>
                <div style={{ marginLeft: "430px", paddingTop: "60px", opacity: "1" }}>
                    <h1 className="text-white" style={{ fontSize: "50px" }}>Get In Touch</h1>
                    <hr className="mt-1 " style={{ marginLeft: "60px", color: "green", width: "150px", background: "#095484", border: "5", height: "3px" }} />
                </div>
            </div>
            <div style={{ height: "500px", width: "1160px" }}>
                <div className=" d-flex text-white">
                    <div className="col-3 border border-white ms-4 rounded-5" style={{ height: "470px" }}>
                        <div className="ms-4">
                            <h2 className="mt-4 " style={{ fontFamily: 'Nanum Myeongjo, serif' }} ><b>ADDRESS</b></h2>
                            <br />
                            <h5>At. Post khadak Malegaon,<br /> Tal. Niphad, Dist. Nashik,<br /> Maharashtra -422304.</h5>
                            <br />
                            <br />
                            <br />
                            <h5><i className="bi bi-telephone-fill text-success" /> &nbsp;+91 9766387043</h5>
                            <h5><i className="bi bi-envelope-fill text-success" /> &nbsp;akshayrayate1999</h5>

                            <h2 style={{ fontFamily: 'Nanum Myeongjo, serif', marginTop: "70px" }} ><b>FOLLOW ME</b></h2>
                            <div className="d-flex " style={{ marginTop: "5px" }}>
                                <a href="https://www.facebook.com/akshay.rayate.37" ><i class="bi bi-facebook bi-fill text-primary me-3" style={{ fontSize: "25px" }} /></a>
                                <a href="https://instagram.com/akshay_rayate_?igshid=ZDdkNTZiNTM=" ><i class="bi bi-facebook bi-instagram text-danger me-3" style={{ fontSize: "25px" }} /></a>
                                <i class="bi bi-linkedin bi-fill text-primary me-3" style={{ fontSize: "25px" }} />
                                <a href="https://api.whatsapp.com/send?phone=9766387043" ><i class="bi bi-whatsapp bi-instagram text-success me-3" style={{ fontSize: "25px" }} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-9 border border-white rounded-5 ms-5 me-5" style={{ height: "470px" }}>
                        <div className="row ms-4 mt-4">
                            <h2 style={{ fontFamily: 'Nanum Myeongjo, serif' }}><b>SEND ME A NOTE</b></h2>
                        </div>
                        <form onSubmit={submitHnadler}>
                            <div className="row me-4 pe-3">
                                <div className="col-6">
                                    <input type="text" className="form-control p-3 ms-4 " name="name" value={formState.name || ''} placeholder="Name" onChange={changeHandler}/>
                                </div>
                                <div className="col-6">
                                    <input type="text" className="form-control p-3 ms-4" name="email" value={formState.email || ''} placeholder="Email" onChange={changeHandler} />
                                </div>
                            </div>
                            <div className="me-4 pe-3">
                                <textarea className="form-control p-3 ms-4 w-100" style={{ marginTop: "60px", height: "150px" }} name="body" value={formState.body || ''} onChange={changeHandler}></textarea>
                            </div>
                            <div className=" pe-3 " style={{ marginLeft: "380px", marginTop: "50px" }}>
                                <button className="btn btn-outline-success btn-lg">Send Message</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}