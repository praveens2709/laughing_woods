import { useState, useEffect } from "react";
import Button from './Button';
import "@styles/contact.scss";

const ModalForm = () => {
  const [name, setName] = useState("");
  const [pincode, setPincode] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false); // Start with false, show after delay
  const [isHeroAnimationComplete, setIsHeroAnimationComplete] = useState(false);

  useEffect(() => {
    // Simulating hero animation complete with setTimeout
    const timer = setTimeout(() => {
      setIsHeroAnimationComplete(true);
      setShowModal(true);
    }, 5000); // Delay for 5 seconds after hero animation (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    const formData = {
      name,
      pincode,
      whatsapp,
    };

    try {
      const res = await fetch("/api/modalForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setName("");
        setPincode("");
        setWhatsapp(false);
        setShowModal(false);
      } else {
        setStatus(data.error || "Something went wrong");
      }
    } catch (error) {
      setStatus("An unexpected error occurred.");
    }
  };

  if (!showModal || !isHeroAnimationComplete) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-0">
          <button
            type="button"
            className="close"
            onClick={() => setShowModal(false)}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h2 className="mb-3">Get in touch with us!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Your Pincode*"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              required
            />
            <div className="whatsapp-checkbox">
              <label className="d-flex align-items-center">
                <input
                  type="checkbox"
                  checked={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.checked)}
                />
                Contact via WhatsApp
              </label>
            </div>
            <div className="buttons">
              <Button text="Send Message" variant="primary" animate={true} />
              {status && <span>{status}</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
