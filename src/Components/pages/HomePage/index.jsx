import { useState } from "react";
import { DefaultTemplate } from "../../DefaultTemplate";
import { FinanceForm } from "../../FinanceForm";
import { Total } from "../../Total";
import { FinanceList } from "../../FinanceList";


export const HomePage = () => {

    const [entryList, setEntryList] = useState([])
    return (
        <DefaultTemplate>
            <FinanceForm setEntryList={setEntryList} />
            <FinanceList entryList={entryList} setEntryList={setEntryList} />
            <Total entryList={entryList} />
        </DefaultTemplate>
    )
}