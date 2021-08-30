import React, { Fragment, useState, useEffect } from "react";
import Formular from "./Formular";
import Appointments from "./Appointments";

function App() {
    let initialAppointments = JSON.parse(
        localStorage.getItem("localStorageAppointments")
    );

    if (!initialAppointments) {
        initialAppointments = [];
    }

    const [appointments, addAppointments] = useState(initialAppointments);

    useEffect(() => {
        if (initialAppointments) {
            localStorage.setItem(
                "localStorageAppointments",
                JSON.stringify(appointments)
            );
        } else {
            localStorage.setItem(
                "localStorageAppointments",
                JSON.stringify([])
            );
        }
    }, [appointments, initialAppointments]);

    const updateAppointments = (appointment) => {
        addAppointments([...appointments, appointment]);
    };

    const deleteAppointment = (id) => {
        const newAppointments = appointments.filter(
            (appointment) => appointment.id !== id
        );
        addAppointments(newAppointments);
    };

    const appointmentsMessage =
        appointments.length === 0
            ? "No appointments yet"
            : "Manage your appointments";

    return (
        <Fragment>
            <h1>Pets Appointments</h1>

            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Formular updateAppointments={updateAppointments} />
                    </div>
                    <div className="one-half column">
                        <h2>{appointmentsMessage}</h2>
                        {appointments.map((appointment) => (
                            <Appointments
                                appointment={appointment}
                                key={appointment.id}
                                deleteAppointment={deleteAppointment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
