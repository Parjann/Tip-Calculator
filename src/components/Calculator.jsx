import React, { useState, useEffect } from "react";

const Calculator = () => {
  const [BillAmount, setBillAmount] = useState("");
  const [TipPercent, setTipPercent] = useState("");
  const [NumPeople, setNumPeople] = useState("");
  const [TotalTip, setTotalTip] = useState(0);
  const [TipPerPerson, setTipPerPerson] = useState(0);

  useEffect(() => {
    if (BillAmount && TipPercent && NumPeople > 0) {
      const totalTipAmount = (Number(BillAmount) * Number(TipPercent)) / 100;
      setTotalTip(totalTipAmount);

      const tipEachPerson = totalTipAmount / Number(NumPeople);
      setTipPerPerson(tipEachPerson);
    } else {
      setTotalTip(0);
      setTipPerPerson(0);
    }
  }, [BillAmount, TipPercent, NumPeople]);

  return (
    <div>
      <h2>Tip Calculator</h2>
      <label>Bill Amount :</label>
      <input
        type="text"
        value={BillAmount}
        onChange={(e) => setBillAmount(e.target.value)}
      />

      <div>
        <label>Tip Percent :</label>
        <input
          type="text"
          value={TipPercent}
          onChange={(e) => setTipPercent(e.target.value)}
        />
      </div>

      <div>
        <label>Number of People :</label>
        <input
          type="text"
          value={NumPeople}
          onChange={(e) => setNumPeople(e.target.value)}
        />
      </div>

      <div>
        <h2>Total Tip Amount: ${TotalTip.toFixed(2)}</h2>
        <h2>Tip Per Person: ${TipPerPerson.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default Calculator;
