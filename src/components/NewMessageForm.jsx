import { useState, useEffect } from "react";
import { useMessages } from "../hooks/useMessages";
import "../styles/Modal.css";

export const NewMessageForm = ({ user, handleNewMessageForm }) => {
  const { createMessage } = useMessages();
  const [message, setMessage] = useState({
    message_description: "",
    message_title: "",
    message_author: user.id_User,
  });
  const [messageStatus, setMessageStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessage((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(message);
    console.log(user);
  }, [message]);


  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewMessageForm();
    createMessage(message);
  };
  return (
    <>
      <form className="modal" onSubmit={handleSubmit}>
        <div className="modalContent">
          <div className="inputGroup">
            <label htmlFor="message_title">Titulo</label>
            <input
              type="text"
              id="message_title"
              name="message_title"
              value={message.message_title}
              onChange={handleInputChange}
              style={{ width: "80%" }}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="message_description">Mensaje</label>
            <input
              type="text"
              id="message_description"
              name="message_description"
              value={message.message_description}
              onChange={handleInputChange}
              style={{ width: "80%" }}
            />
          </div>

          <button type="submit" className="submitButton">
            Crear nuevo mensaje
          </button>
        </div>
      </form>
    </>
  );
};
