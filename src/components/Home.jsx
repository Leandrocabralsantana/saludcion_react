import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useMessages } from "../hooks/useMessages";
import { Loader } from "./Loader";
import { NewMessageForm } from "./NewMessageForm";
import "../styles/Home.css";

export const Home = (newMessage) => {
  const { user } = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState({
    message_title: "",
    message_description: "",
  });
  const [editingMessage, setEditingMessage] = useState(false);

  const {
    formatISODate,
    sections,
    loading,
    error,
    updateMessage,
    getAllMessages,
    deleteMessage,
  } = useMessages();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messagesData = await getAllMessages();
        setMessage(messagesData);
        console.log(messagesData);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchData();

    return () => {};
  }, []);

  const handleNewMessageForm = () => {
    setShowModal(!showModal);
  };

  const saveUpdatedMessage = (messageId) => {
    // updateMessage(
    //   messageId,
    //   updatedMessage,
    //   user

    // );
    console.log(
      messageId,
      "este es el mssage",
      updatedMessage,
      "este es el mensaje cambiado",
      user,
      "user"
    );

    // Luego, podrías resetear el estado relacionado con la edición del mensaje
    setEditingMessage(false);
    setUpdatedMessage({ message_title: "", message_description: "" });
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!message || message.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="container">
       
        {showModal ? (
          <NewMessageForm
            user={user}
            handleNewMessageForm={handleNewMessageForm}
          />
        ) : null}

        <div className="firstBox">
        <h2>Novedades</h2>
        <button className="add-button" onClick={handleNewMessageForm}>
          Agregar mensaje
        </button>

        </div>

        {message
          .slice()
          .reverse()
          .map((a, index) => (
            <div key={index} className="message-card">
              {editingMessage === a.id_message ? (
                <div className="edit-message">
                  <input
                    type="text"
                    value={updatedMessage.message_title}
                    onChange={(e) =>
                      setUpdatedMessage({
                        ...updatedMessage,
                        message_title: e.target.value,
                      })
                    }
                  />
                  <textarea
                    value={updatedMessage.message_description}
                    onChange={(e) =>
                      setUpdatedMessage({
                        ...updatedMessage,
                        message_description: e.target.value,
                      })
                    }
                  ></textarea>
                  <button onClick={() => saveUpdatedMessage(a.id_message)}>
                    Guardar
                  </button>
                </div>
              ) : (
                <div>
                  <div className="titleAndButtons">
                    <h4>{a.message_title}</h4>
                      <button
                        className="delete-button"
                        onClick={() => deleteMessage(a.id_message)}
                      >
                        X
                      </button>
                      <button
                        className="edit-button"
                        onClick={() => setEditingMessage(a.id_message)}
                      >
                        Editar mensaje
                      </button>
                    </div>

                  <p>
                    {a.message_description} publicado por{" "}
                    <strong>
                      {a.createdBy.firstName} {a.createdBy.surname}
                    </strong> {""}
                     el {formatISODate(a.message_created)}
                  </p>
                </div>
              )}
            </div>
          ))}
      </div>
    );
  }
};
