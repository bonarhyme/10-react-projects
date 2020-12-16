import React, { useState } from "react";
import Data from "./data";
import Question from "./Question";
import "./Accordion.css";

const Accordion = () => {
  const [accordion, setAccordion] = useState(Data);

  return (
    <main>
      <section>
        <h1>Select A Question</h1>
        <div className="underline" />
        {accordion.map(question => {
          const { id } = question;
          return <Question key={id} {...question} class="question" />;
        })}
      </section>
    </main>
  );
};

export default Accordion;
