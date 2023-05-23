import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from './Contact.css';
import { useMutation } from "@apollo/client";
import { CREATE_DOCUMENT } from './graphql/SaveData.gql';
import Recaptcha from 'react-recaptcha';

interface FormData {
  name: string;
  email: string;
  subject: string;
  attachments: File | null;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    attachments: null,
    message: "",
  });

  const [createDocument] = useMutation(CREATE_DOCUMENT);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevData) => ({ ...prevData, attachments: file || null }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submittedData = formData;
    console.log(submittedData);
    try {
      const token = await new Promise<string>((resolve) => {
        const onLoadCallback = (recaptchaToken: string) => {
          resolve(recaptchaToken);
        };
        (window as any).grecaptcha.ready(() => {
          (window as any).grecaptcha.execute('YOUR_SITE_KEY', { action: 'submit' }).then(onLoadCallback);
        });
      });

      await createDocument({
        variables: {
          acronym: "TS",
          document: {
            ...formData,
            recaptchaToken: token,
          },
          schema: "your_schema", // Replace "your_schema" with your actual schema name
        },
      });

      console.log("Data submitted successfully");
    } catch (error) {
      console.error("An error occurred while submitting the data", error);
      // Handle the error case
    }
  };



  return (
    <div className={`${styles.contactcontainer}`}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
          className={`${styles.inputfield}`}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="attachments">
            Upload Attachments (.jpg, .png, .pdf):
          </label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            accept=".jpg,.png,.pdf"
            onChange={handleFileChange}
          />
        </div>

        <div>
          <label htmlFor="message">Message/Comments:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div>
          <Recaptcha sitekey="YOUR_SITE_KEY" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
