import React from "react";
import PropTypes from "prop-types";

const Appointments = ({ appointment, deleteAppointment }) => {
    return (
        <div className="cita">
            <p>
                Pet Name: <span>{appointment.pet}</span>{" "}
            </p>
            <p>
                Owner Name: <span>{appointment.owner}</span>{" "}
            </p>
            <p>
                Date: <span>{appointment.date}</span>{" "}
            </p>
            <p>
                Time: <span>{appointment.time}</span>{" "}
            </p>
            <p>
                Symptom: <span>{appointment.symptom}</span>{" "}
            </p>
            <button
                className="button eliminar u-full-width"
                onClick={() => deleteAppointment(appointment.id)}
            >
                Remove Appointment
            </button>
        </div>
    );
};

Appointments.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired,
};

export default Appointments;
