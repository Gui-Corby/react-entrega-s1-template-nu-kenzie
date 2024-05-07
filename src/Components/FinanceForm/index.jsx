import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.scss";

export const FinanceForm = ({ setEntryList }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [valueType, setValueType] = useState("Entrada");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !value || !valueType) {
      setError("Por favor, preencha todos os campos");
      return;
    }

    const newEntry = {
      id: uuidv4(),
      description: description,
      value: value,
      valueType: valueType,
    };

    setEntryList((prevEntryList) => [...prevEntryList, newEntry]);

    setDescription("");
    setValue(0);
    setValueType("Entrada");
    setError("");
  };

  return (
    <section>
      <div className="container">
        <form onSubmit={handleSubmit} className={styles.financeForm}>
          <label htmlFor="description"> Descrição </label>
          <input
            id="description"
            value={description}
            name="description"
            type="text"
            placeholder="Digite aqui sua descrição"
            onChange={(e) => setDescription(e.target.value)}
          />
          <span>Ex: Compra de roupas</span>

          <label htmlFor="value"> Valor (R$) </label>
          <input
            id="value"
            value={value}
            name="value"
            type="number"
            placeholder="1"
            onChange={(e) => setValue(Number(e.target.value))}
          />

          <label htmlFor="valueType" id={styles.valueType}>
            {" "}
            Tipo de valor{" "}
          </label>

          <select
            id="valueType"
            name="valueType"
            value={valueType}
            onChange={(e) => setValueType(e.target.value)}
            className={styles.customSelect}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>

          {error && <p className={styles.errorMessage}>{error}</p>}

          <button type="submit">Inserir Valor</button>
        </form>
      </div>
    </section>
  );
};
