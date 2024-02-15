import { createContext,useState } from "react";

export const Globalcontext = createContext(null);

export default function GlobalState({ children }) {
    const [formData, setFormData] = useState({
      title: "",
      description: "",
    });
  
    const [blogList, setBlogList] = useState([]);
    const [pending, setPending] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
  
    return (
      <Globalcontext.Provider
        value={{
          blogList,
          setBlogList,
          pending,
          setPending,
          formData,
          setFormData,
          isEdit,
          setIsEdit,
        }}
      >
        {children}
      </Globalcontext.Provider>
    );
  }