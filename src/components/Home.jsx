import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useMessages } from "../hooks/useMessages";
import { Loader } from "./Loader";
import { NewMessageForm } from "./NewMessageForm";

export const Home = (newMessage) => {

  const { user} = useContext(UserContext);
  const [message, setMessage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState({ message_title: "", message_description: ""});
  const [editingMessage, setEditingMessage] = useState(false);

  const { sections, loading, error, updateMessage, getAllMessages, deleteMessage } = useMessages();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const messagesData = await getAllMessages();
        setMessage(messagesData);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchData();

    return () => {
    };
  }, []);

  const handleNewMessageForm = () => {
    setShowModal(!showModal)
    console.log("llega el handle?")
  }

  const saveUpdatedMessage = (messageId) => {
    // updateMessage(
    //   messageId,
    //   updatedMessage, 
    //   user 

    // );
    console.log(
      messageId, "este es el mssage",
      updatedMessage, "este es el mensaje cambiado",
      user, "user" )
  
    // Luego, podrías resetear el estado relacionado con la edición del mensaje
    setEditingMessage(false);
    setUpdatedMessage({ message_title: "", message_description: ""})
  };


  

  if (!message || message.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className="bg-red-500">
        <button onClick={handleNewMessageForm}>Agregar mensaje</button>
        {showModal ? <NewMessageForm user={user} handleNewMessageForm={handleNewMessageForm}  /> : null }

    
        <h2>Bienvenido</h2>
        <h3>¡Novedades!</h3>
        {message.slice().reverse().map((a, index) => (
          <div key={index}>
            {editingMessage === a.id_message ? (
              <div>
                <input
                  type="text"
                  value={updatedMessage}
                  onChange={(e) => setUpdatedMessage(e.target.value)}
                />
                <button onClick={() => saveUpdatedMessage(a.id_message)}>Guardar</button>
              </div>
            ) : (
              <p>
                {a.message_description}{" "}
                <i>
                  escrito por <strong>{a.message_title}</strong>
                </i>{" "}
                <small>"(Publicado el {a.message_created})"</small>
                <button onClick={() => deleteMessage(a.id_message)}>X</button>
                <button onClick={() => setEditingMessage(a.id_message)}>
                  Editar mensaje
                </button>
              </p>
            )}
          </div>
        ))}
      </div>
    );
    }
  };
