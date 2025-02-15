import React, { useState } from 'react';
import './StressBox.css';

const StressBox = () => {
  const [checked, setChecked] = useState(
    localStorage.getItem('checkedBoxes') ? JSON.parse(localStorage.getItem('checkedBoxes')) : [false, false, false],
  );

  const checkBox = (event) => {
    const boxNumber = event.target.innerText;
    const updatedChecked = [...checked];
    if (checked[boxNumber - 1]) {
      updatedChecked[boxNumber - 1] = false;
      localStorage.setItem('checkedBoxes', JSON.stringify(updatedChecked));
      setChecked(updatedChecked);
    } else {
      updatedChecked[boxNumber - 1] = true;
      localStorage.setItem('checkedBoxes', JSON.stringify(updatedChecked));
      setChecked(updatedChecked);
    }
  };

  return (
    <table>
      <caption>Stress</caption>
      <tbody>
        <tr>
          <td>
            <button onClick={checkBox} type="button" className={`stress-box ${checked[0] ? 'checked-box' : ''}`}>1</button>
          </td>
          <td>
            <button onClick={checkBox} type="button" className={`stress-box ${checked[1] ? 'checked-box' : ''}`}>2</button>
          </td>
          <td>
            <button onClick={checkBox} type="button" className={`stress-box ${checked[2] ? 'checked-box' : ''}`}>3</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default StressBox;
