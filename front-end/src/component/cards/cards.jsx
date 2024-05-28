import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Payment() {
    const espace = "      ";
    const [selectCarte, setSelectCarte] = useState(false);
    const [selectCarte2, setSelectCarte2] = useState(false);

    return (
        <div>
            <section className="p-1 p-md-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-5 col-lg-8 col-xl-5">
                        <div className="card rounded-5">
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h2>Payment</h2>
                                </div>
                                <br /><br />
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div>
                                                    <input type="radio" name="paie" value="paypal" onClick={() => { setSelectCarte2(true); setSelectCarte(false); }} />
                                                    {espace}{espace}
                                                    <img className="img-fluid" style={{ height: "30px" }} src="https://img.icons8.com/?size=100&id=GQp92C23u2N5&format=png&color=000000" alt="PayPal" />
                                                    {espace}PayPal
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                <div>
                                                    <input type="radio" name="paie" value="carte" onClick={() => { setSelectCarte(true); setSelectCarte2(false); }} />
                                                    {espace}
                                                    <img className="img-fluid" style={{ height: "30px" }} src="https://img.icons8.com/?size=100&id=MabKibi4OdYM&format=png&color=000000" alt="Carte" />
                                                    {espace}Carte
                                                    <p></p>
                                                </div>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                                <br />
                                {selectCarte && (
                                    <div className="carte">
                                        <div className="" style={{ display: "flex" }}>
                                            <img className="img-fluid" style={{ height: "20px", width: "20px" }} src="https://img.icons8.com/?size=100&id=9fp9k4lPT8us&format=png&color=000000" alt="Info" />
                                            {espace}
                                            <p>Nous ne facturons <b>jamais</b> de frais de carte</p>
                                        </div>
                                        <span style={{ color: "red" }}>*</span> champs obligatoire
                                        <br /><br />
                                        <div className="d-flex flex-row align-items-center mb-4 pb-1">
                                            <img className="rounded mx-auto d-block" src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                                            <div className="flex-fill mx-3">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="formControlLgXs">Numero de carte <span style={{ color: "red" }}>*</span></label>
                                                    <input type="text" id="formControlLgXs" className="form-control form-control-l" placeholder="**** **** **** 4296" required />
                                                </div>
                                            </div>
                                            <a href="#!">Remove card</a>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4 pb-1">
                                            <img className="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" alt="Mastercard" />
                                            <div className="flex-fill mx-3">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="formControlLgXc">Numero de carte <span style={{ color: "red" }}>*</span></label>
                                                    <input type="text" id="formControlLgXc" className="form-control form-control-l" placeholder="**** **** **** 3193" />
                                                </div>
                                            </div>
                                            <a href="#!">Remove card</a>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="formControlLgXsd">Nom Complet <span style={{ color: "red" }}>*</span></label>
                                            <input type="text" id="formControlLgXsd" className="form-control form-control-l" placeholder="Nom Complet" />
                                        </div>
                                        <div className="">
                                            <div className="col-7">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="formControlLgExpk">Date d'expiration <span style={{ color: "red" }}>*</span></label>
                                                    <input type="date" id="formControlLgExpk" className="form-control form-control-l" placeholder="MM/YYYY" />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="formControlLgcvv">Cryptogramme<span style={{ color: "red" }}>*</span></label>
                                                    <input type="password" id="formControlLgcvv" className="form-control form-control-l" placeholder="Cvv" />
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <Link to={'/'}><button className="btn btn-success btn-lg btn-block">Add card</button></Link>
                                    </div>
                                )}
                                <br /><br />
                                {selectCarte2 && (
                                    <div className="carte border" style={{ padding: "10px", display: "flex", justifyContent: "space-evenly" }}>
                                        <div className="carte border" style={{ padding: "10px" }}>
                                            <img className="img-fluid" style={{ height: "50px", width: "100px" }} src="https://img.icons8.com/?size=100&id=GQp92C23u2N5&format=png&color=000000" alt="PayPal" />
                                            {espace}
                                        </div>
                                        <div className="carte" style={{ padding: "10px" }}>
                                            <p>Vous serez redirigé vers le site sécurisé de PayPal pour finaliser votre paiement</p>
                                        </div>
                                    </div>
                                )}
                                </div>
                            </div>
                            <div className=" align-items-center mb-4 pb-1">
                                    <b> Nous acceptons les modes de paiement suivants</b><br /> <br />
                                    <div class="row mb-4">
                                    <img className="img-fluid" style={{ height: "40px", width: "90px" }} src="https://img.icons8.com/?size=100&id=ikzPviNiCGWG&format=png&color=000000" />
                                    <img className="img-fluid" style={{ height: "40px", width: "90px" }} src="https://img.icons8.com/color/48/000000/visa.png" />
                                    <img className="img-fluid" style={{ height: "40px", width: "90px" }} src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
                                    <img className="img-fluid" style={{ height: "40px", width: "90px" }} src="https://img.icons8.com/?size=100&id=GQp92C23u2N5&format=png&color=000000" />
                                    </div>
                                    <div className='border' style={{ padding:"15px" }}>
                                        <b>Compter sur nous</b><br />
                                        <img className="img-fluid" style={{ height: "15px", width: "15px" }} src="https://img.icons8.com/?size=100&id=ewktsfNlALF5&format=png&color=000000" /> Nous utilisons une transmission securisee <br />
                                        <img className="img-fluid" style={{ height: "15px", width: "15px" }} src="https://img.icons8.com/?size=100&id=ewktsfNlALF5&format=png&color=000000" /> Nous protecgeons vos informatios personnelles
                                    </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
