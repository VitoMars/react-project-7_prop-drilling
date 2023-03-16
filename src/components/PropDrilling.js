import React, { useState } from "react";
import { data } from "../data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));
  return (
    <div className="text-center mt-3">
      <h3>Passaggio di Proprietà a cascata </h3>
      <Elenco people={people} removePeople={removePeople} />
    </div>
  );
};

const Elenco = ({ people, removePeople }) => {
  return (
    <div>
      {people.map((el, index) => {
        return <Persona key={index} {...el} removePeople={removePeople} />;
      })}
    </div>
  );
};

const Persona = ({ id, name, removePeople }) => {
  return (
    <div className="item shadow">
      <h5>{name}</h5>
      <button className="btn btn-danger" onClick={() => removePeople(id)}>
        Elimina
      </button>
    </div>
  );
};

export default PropDrilling;
