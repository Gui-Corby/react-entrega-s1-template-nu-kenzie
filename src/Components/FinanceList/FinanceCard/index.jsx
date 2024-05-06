import styles from "./styles.module.scss";

export const FinanceCard = ({ entryList, setEntryList }) => {
  const removeEntry = (removingId) => {
    setEntryList((prevEntryList) =>
      prevEntryList.filter((entry) => entry.id !== removingId)
    );
  };
  return (
    <ul>
      {entryList.map((entry) => (
        <li
          className={
            entry.valueType === "Entrada" ? styles.credit : styles.debit
          }
          key={entry.id}
        >
          <div className={styles.gridContainer}>
            <div>
              <h3>
                {entry.description.charAt(0).toUpperCase() +
                  entry.description.slice(1)}
              </h3>
              <h4>{entry.valueType}</h4>
            </div>
            <div>
              <span>
                {entry.value.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
              <button onClick={() => removeEntry(entry.id)}>Excluir</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
