import { useRef, useEffect, useState } from "react";

export const useReference = () => {
  const contactRef = useRef(null);
  const [contactReference, setContactReference] = useState("");

  useEffect(() => {
    if (contactRef.current) {
      console.log("Inside useEfect:", contactRef.current);
      setContactReference(contactRef?.current);
    }

    return () => {console.log("Cleared")};
  }, []);

  const scrollToContact = () => {
    console.log("In Clikc:", contactRef?.current);
    contactReference.scrollIntoView({ behavior: "smooth" });
  };

  return [contactRef, scrollToContact];
};
