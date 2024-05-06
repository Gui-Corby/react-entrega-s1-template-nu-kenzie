import styles from "./styles.module.scss";

export const Total = ({ entryList }) => {
  return entryList.length > 0 ? (
    <section>
      <div className="container">
        <div className={styles.totalBox}>
          <h3>Valor total: </h3>
          <h4>O valor se refere ao saldo</h4>
          <span>
            {entryList
              .reduce((acc, entry) => {
                if (entry.valueType === "Entrada") {
                  return acc + entry.value;
                } else {
                  return acc - entry.value;
                }
              }, 0)
              .toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </div>
      </div>
    </section>
  ) : null;
};