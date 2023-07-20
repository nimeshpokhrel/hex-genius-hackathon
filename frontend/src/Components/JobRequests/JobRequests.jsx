import React, { useEffect, useState } from "react";
import "./JobRequests.scss";
import { useAuthContext } from "../../Hooks/useAuthContext";
import PersonIcon from "@mui/icons-material/Person";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import MessageIcon from "@mui/icons-material/Message";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const JobRequests = () => {
  const [error, setError] = useState("");
  const { token } = useAuthContext();
  const [requests, setRequests] = useState([]);
  // const [requestID, setRequestID] = useState("");

  const getWorkRequests = async () => {
    const response = await fetch("http://localhost:4000/getworkrequests", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json();
    setRequests(json);

    if (!response.ok) {
      setError(json.error);
    }
  };

  useEffect(() => {
    getWorkRequests();
  }, []);

  useEffect(() => {
    console.log(requests);
  }, [requests]);

  const handleAccept = async (requestID) => {
    const response = await fetch("http://localhost:4000/acceptrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ requestID }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
  };

  const handleReject = async (requestID) => {
    const response = await fetch("http://localhost:4000/rejectrequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ requestID }),
    });
  };

  const handleCompleted = async (requestID) => {
    const response = await fetch("http://localhost:4000/requestcompleted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ requestID }),
    });
  };

  return (
    <div className="container mt-5">
      {error && (
        <div className="d-flex justify-content-start">
          <div className="job-error mb-4 mt-2">{error}</div>
        </div>
      )}
      <h4 className="ms-2">
        Your Job <span className="secondary-color">Requests</span>
      </h4>
      {/* {error &} */}
      <div className="row">
        {requests.map((data, index) => {
          if (data.pending || (data.accepted == true && data.completed != true))
            return (
              <div key={index} className="col-12 col-lg-4 mt-4">
                <div className="request-wrapper">
                  <div className="d-flex flex-column">
                    <span className="primary-label">Client Details:</span>
                    <div className="client-details d-flex align-items-center mt-2">
                      <PersonIcon className="me-2" />
                      {data.clientID.firstName + " " + data.clientID.lastName}
                    </div>
                    <div className="client-details d-flex align-items-center mt-2">
                      <AlternateEmailIcon className="me-2" />
                      {data.clientID.email}
                    </div>
                    <div className="client-details d-flex align-items-center mt-2">
                      <MessageIcon className="me-2" />
                      {data.message}
                    </div>
                    <span className="primary-label mt-3">Work Details:</span>
                    <div className="client-details d-flex align-items-center mt-2">
                      <WorkOutlineIcon className="me-2" />
                      {data.workID.title}
                    </div>
                    <div className="client-details d-flex align-items-center mt-2">
                      <DescriptionIcon className="me-2" />
                      <div className="text-truncate">
                        {data.workID.description}
                      </div>
                    </div>
                    <div className="client-details d-flex align-items-center mt-2">
                      <AttachMoneyIcon className="me-2" />
                      <div className="text-truncate">
                        {"NPR. " + data.workID.rate}
                      </div>
                    </div>
                    {!data.accepted && !data.completed ? (
                      <div className="d-flex align-items-center mt-3">
                        <button
                          onClick={() => {
                            handleAccept(data._id);

                            setTimeout(() => {
                              getWorkRequests();
                            }, 1500);
                          }}
                          className="custom-button me-3 w-100"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => {
                            handleReject(data._id);

                            setTimeout(() => {
                              getWorkRequests();
                            }, 1500);
                          }}
                          className="custom-button-2 w-100"
                        >
                          REJECT
                        </button>
                      </div>
                    ) : (
                      data.accepted &&
                      !data.completed && (
                        <div className="d-flex align-items-center mt-3">
                          <button
                            onClick={() => {
                              handleCompleted(data._id);

                              setTimeout(() => {
                                getWorkRequests();
                              }, 1500);
                            }}
                            className="custom-button me-3 w-100"
                          >
                            Mark Completed
                          </button>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default JobRequests;
