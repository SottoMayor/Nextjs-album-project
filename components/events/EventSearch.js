import React, { useRef } from 'react';
import classes from '../../styles/components/events/EventSearch.module.css'
import Button from '../UI/Button';

const EventSearch = (props) => {

    const yearInputRef = useRef();
    const monthInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const yearValue = yearInputRef.current.value;
        const monthValue = monthInputRef.current.value;
        const dateData = { year: yearValue, month: monthValue}

        props.onCaptureYearMonth(dateData);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor="year">Year</label>
                    <select ref={yearInputRef} id="year">
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select ref={monthInputRef} id="month">
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">Setember</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>

            <Button>Search!</Button>
        </form>
    )
}

export default EventSearch
