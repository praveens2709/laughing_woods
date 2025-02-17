"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@components/Button";
import logo from "@assets/images/logo1.png";
import estimateImg from "@assets/images/hero18.jpg";
import "@styles/get-estimates.scss";

const GetEstimates = () => {
    const [bhk, setBhk] = useState("");
    const [purpose, setPurpose] = useState("");
    const [error, setError] = useState({ bhk: "", purpose: "" });
    const router = useRouter();

    const handleNext = () => {
        let newError = { bhk: "", purpose: "" };

        if (!bhk) newError.bhk = "Please select a BHK type.";
        if (!purpose) newError.purpose = "Please select a purpose.";

        setError(newError);
        if (newError.bhk || newError.purpose) return;

        router.push(`/get-estimates-form?bhk=${bhk}&purpose=${purpose}`);
    };

    return (
        <div className="get-estimates d-flex justify-content-center align-items-center">
            <Image src={logo} alt="Logo" className="logo" onClick={() => router.push("/")} />

            <Container className="inner-get-estimates">
                <Row>
                    <Col lg={7} className="d-flex align-items-center px-lg-5 py-4 py-lg-0">
                        <div className="content-box w-100 d-flex flex-column gap-4">
                            <h2>Get an Estimate</h2>
                            <div className="options-section">
                                <h5>Select BHK Type:</h5>
                                <div className="options d-flex gap-2">
                                    {["1BHK", "2BHK", "3BHK", "3BHK+"].map((option) => (
                                        <button
                                            key={option}
                                            className={`option-btn ${bhk === option ? "selected" : ""}`}
                                            onClick={() => setBhk(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                {error.bhk && <p className="error text-danger mt-1 text-left">{error.bhk}</p>}
                            </div>

                            <div className="options-section">
                                <h5>Select Purpose:</h5>
                                <div className="options d-flex gap-2">
                                    {["Move In", "Rent Out", "Renovate"].map((option) => (
                                        <button
                                            key={option}
                                            className={`option-btn ${purpose === option ? "selected" : ""}`}
                                            onClick={() => setPurpose(option)}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                                {error.purpose && <p className="error">{error.purpose}</p>}
                            </div>

                            <div className="next-btn d-flex justify-content-center mt-3">
                                <Button text="Next" variant="primary" animate={true} onClick={handleNext} />
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} className="p-0 d-none d-lg-block">
                        <Image src={estimateImg} alt="Estimate" width={500} height={500} className="w-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GetEstimates;
