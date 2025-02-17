"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import Button from "@components/Button";
import logo from "@assets/images/logo1.png";
import estimateImg from "@assets/images/hero18.jpg";
import "@styles/get-estimates.scss";
import "@styles/contact.scss";

const GetEstimatesForm = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const bhk = searchParams.get("bhk");
  const purpose = searchParams.get("purpose");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      const res = await fetch("/api/get-estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, bhk, purpose }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Estimate request sent successfully!");
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("An unexpected error occurred.");
    }
  };

  const statusClass = status?.includes("success") ? "text-success" : "text-danger";

  return (
    <div className="get-estimate-form d-flex justify-content-center align-items-center">
      <Image src={logo} alt="Logo" className="logo" onClick={() => router.push("/")} />

      <Container className="inner-get-estimates mx-3 mx-lg-0">
        <Row className="justify-content-between border">
          <Col lg={7} className="d-flex align-items-center px-lg-5 py-4 py-lg-0">
            <div className="content-box w-100 d-flex flex-column gap-3">
              <h2>Complete Your Request</h2>

              <form onSubmit={handleSubmit} className="estimateForm">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mb-md-3 mb-4"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone*"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mb-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mb-3"
                />

                <input
                  type="text"
                  name="pincode"
                  placeholder="Your Pincode*"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                  className="mb-3"
                />

                <div className="buttons d-flex gap-3 align-items-center justify-content-between">
                  <Button text="Submit" variant="primary" animate={true} />
                  {status && <span className={statusClass}>{status}</span>}
                </div>
              </form>
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

export default GetEstimatesForm;
