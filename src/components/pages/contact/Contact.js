import { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";
import Card from "../../card/Card";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      // .sendForm(
      //   process.env.REACT_APP_EMAILJS_SERVICE_ID,
      //   "template_77b7pm9",
      //   form.current,
      //   "2MVxhu0_rq9Sa5uN_"
      // )
      .sendForm(
        'service_mskm58k',
        "template_77b7pm9",
        form.current,
        "2MVxhu0_rq9Sa5uN_"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`container ${styles.contact}`}>
        <h2>Contact Us</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your active email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>

          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Information</h3>
              <p>Fill the form or contact us via other channels listed below</p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>0744 925 306</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>Support@prvShop.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Timisoara, Romania</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@PRVshop</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
