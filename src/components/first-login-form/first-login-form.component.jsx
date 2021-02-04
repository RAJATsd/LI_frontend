import "date-fns";
import React, { useState } from "react";

import FormTwoComponent from "./form-two/form-two.component";
import FormOneComponent from "./form-one/form-one.component";
import "./first-login-form.styles.css";

const FirstLoginForm = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const handleNextClick = () => {
    if (pageNumber === 1) {
      setPageNumber(2);
    }
  };
  return (
    <div className="first-login-forms">
      {pageNumber === 1 ? (
        <FormOneComponent handleNextClick={handleNextClick} />
      ) : (
        <FormTwoComponent />
      )}
    </div>
  );
};

export default FirstLoginForm;
