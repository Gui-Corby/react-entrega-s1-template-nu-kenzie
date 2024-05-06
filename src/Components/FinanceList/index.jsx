import styles from "./styles.module.scss";

import { FinanceCard } from "./FinanceCard";

export const FinanceList = ({ entryList, setEntryList }) => {
  return (
    <section>
      <div className="container">
        <h3 className={styles.titleSmall}>Resumo Financeiro</h3>
        {entryList.length === 0 ? (
          <h2 className={styles.titleBig}>Você ainda não possui nenhum lançamento</h2>
        ) : (
          <FinanceCard entryList={entryList} setEntryList={setEntryList} />
        )}
      </div>
    </section>
    );
};
