import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

const Formular = ({ updateAppointments }) => {
    const [appointment, updateAppointment] = useState({
        pet: "",
        owner: "",
        date: "",
        time: "",
        symptom: "",
    });

    const [error, updateError] = useState(false);

    const handleChange = (evt) => {
        updateAppointment({
            ...appointment,
            [evt.target.name]: evt.target.value,
        });
    };

    const { pet, owner, date, time, symptom } = appointment;

    const handleSubmit = (evt) => {
        evt.preventDefault();

        //validate
        if (
            pet.trim() === "" ||
            owner.trim() === "" ||
            date.trim() === "" ||
            time.trim() === "" ||
            symptom.trim() === ""
        ) {
            updateError(true);
            return;
        }

        //delete error message
        updateError(false);

        //asign ID
        appointment.id = uuid();

        //create appointment
        updateAppointments(appointment);

        //reset form
        updateAppointment({
            pet: "",
            owner: "",
            date: "",
            time: "",
            symptom: "",
        });
    };

    return (
        <Fragment>
            <h2>Create an appointment</h2>

            {error ? (
                <p className="alerta-error">All fields are required</p>
            ) : null}

            <form onSubmit={handleSubmit}>
                <label>Pet Name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="pet's name"
                    value={pet}
                    onChange={handleChange}
                />
                <label>Owner's Name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="owner's name"
                    value={owner}
                    onChange={handleChange}
                />
                <label>Date</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    value={date}
                    onChange={handleChange}
                />
                <label>Time</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    value={time}
                    onChange={handleChange}
                />
                <label>Symptom</label>
                <textarea
                    name="symptom"
                    className="u-full-width"
                    value={symptom}
                    onChange={handleChange}
                ></textarea>
                <button type="submit" className="u-full-width button-primary">
                    Add Appointment
                </button>
            </form>
        </Fragment>
    );
};

Formular.propTypes = {
    updateAppointments: PropTypes.func.isRequired,
};

export default Formular;
