import React, { useState } from 'react';
import "./App.css"





function DateDesign() {
    
    const [currentDate, setCurrentDate] = useState(new Date());

    
    const addDay = () => {
      //N.B if day after adding is greater than number of days for that month, date returned should be a new month date
      const newDate = new Date(currentDate)
      newDate.setDate(newDate.getDate() + 1)
      
      if (newDate.getMonth() !== currentDate.getMonth()) {
          newDate.setDate(1);
      }
      
      setCurrentDate(newDate);
    };
    
    const addMonth = () => {
      //N.B if month after adding is greater than 11, date returned should be a new year\
      const newDate = new Date(currentDate)
      newDate.setMonth(newDate.getMonth() + 1)
      
      if (newDate.getMonth() !== currentDate.getMonth()) {
          newDate.setDate(1);
      }
      
      setCurrentDate(newDate);
    };

    return (
        <div>
            <div 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px', border: '1px dashed', marginBottom: '5px' }}
            >

                Date: {currentDate.toString()}
            </div>
            <div 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px', border: '1px dashed', marginBottom: '5px' }}
            >
                <span
                    style={{ width: '100%' }}
                >
                    Month: {currentDate.getUTCMonth()}
                </span>
                <button
                    style={{ width: '100%' }}
                    onClick={addMonth}
                >
                    Increase Months
                </button>
               
            </div>
            <div 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px', border: '1px dashed', marginBottom: '5px' }}
            >
                <span
                    style={{ width: '100%' }}
                >
                    Day: {currentDate.getDate()}
                </span>
                <button
                    style={{ width: '100%' }}
                    onClick={addDay}
                >
                    Increase Day
                </button>
            </div>
        </div>
    )
}

export default DateDesign