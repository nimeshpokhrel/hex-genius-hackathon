import "./PostJob.scss";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../Hooks/useAuthContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-modal";
import JobRequests from "../JobRequests/JobRequests";
import Footer from "../Footer/Footer";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "1.5rem",
    width: 500,
  },
};

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [workID, setWorkID] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const { token, user } = useAuthContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenSecond, setModalOpenSecond] = useState(false);
  const [error, setError] = useState("");

  const GetPosts = async () => {
    try {
      const response = await fetch("http://localhost:4000/getuserworks", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setUserPosts(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetPosts();
  }, []);

  useEffect(() => {
    console.log(userPosts);
  }, [userPosts]);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:4000/deletework/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
  };

  const handleEdit = async (id, title, description, rate) => {
    const response = await fetch(`http://localhost:4000/editwork/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, rate }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
  };

  const handleAdd = async (title, description, rate) => {
    const response = await fetch(`http://localhost:4000/addwork`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, rate, user }),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
  };

  return (
    <div className="post-job-wrapper">
      <Navbar />
      <div className="body-margin mt-4">
        <div className="container">
          {error && (
            <div className="d-flex justify-content-center">
              <div className="post-error mb-4 mt-2">{error}</div>
            </div>
          )}
          <div className="d-flex justify-content-between align-items-center w-100">
            <h4 className="ms-2">
              Your Job <span className="secondary-color">Listings</span>
            </h4>
            <button
              onClick={() => {
                setTitle("");
                setDescription("");
                setRate(0);
                setModalOpenSecond(true);
              }}
              className="custom-button-2 d-flex align-items-center"
            >
              <AddIcon className="me-2" />
              Add Job Listing
            </button>
            <Modal
              isOpen={modalOpenSecond}
              onRequestClose={() => setModalOpenSecond(false)}
              style={customStyles}
            >
              <h4 className="mb-2 text-center">
                Add Jo
                <span style={{ color: "var(--secondary-orange)" }}>b Listing</span>
              </h4>
              <div className="modal-input mt-3">
                <div className="d-flex flex-column">
                  <span className="input-label">Job Title:</span>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="input-label">Job Description:</span>
                  <textarea
                    type="text"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="input-label">Job Rate: (NPR)</span>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="input-label">Service:</span>
                  <input type="text" value={user.service} disabled />
                </div>
              </div>
              <div className="d-flex mt-4">
                <button
                  className="custom-button-2 me-3"
                  onClick={() => setModalOpenSecond(false)}
                >
                  Cancel
                </button>
                <button
                  className="custom-button"
                  onClick={() => {
                    setModalOpenSecond(false);
                    handleAdd(title, description, rate);
                    setTimeout(() => {
                      GetPosts();
                    }, 1000);
                  }}
                >
                  Add Listing
                </button>
              </div>
            </Modal>
          </div>
          <div className="row">
            <Modal
              isOpen={modalOpen}
              onRequestClose={() => setModalOpen(false)}
              style={customStyles}
            >
              <div className="modal-input">
                <div className="d-flex flex-column">
                  <span className="input-label">Job Title:</span>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="input-label">Job Description:</span>
                  <textarea
                    type="text"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="input-label">Job Rate: (NPR)</span>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <span className="input-label">Service:</span>
                  <input type="text" value={user.service} disabled />
                </div>
              </div>
              <div className="d-flex mt-4">
                <button
                  className="custom-button-2 me-3"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="custom-button"
                  onClick={() => {
                    setModalOpen(false);
                    handleEdit(workID, title, description, rate);
                    setTimeout(() => {
                      GetPosts();
                    }, 1000);
                  }}
                >
                  Update
                </button>
              </div>
            </Modal>
            {userPosts.map((data, index) => (
              <div key={index} className="col-md-4 col-12 mt-4">
                <div className="work-cards">
                  <div className="work-title">{data.title}</div>
                  <div className="work-description mt-2">
                    {data.description}
                  </div>
                  <div className="d-flex flex-column mt-3">
                    <div className="work-rate me-3">
                      <span className="work-label">Rate: </span>NPR. {data.rate}
                    </div>
                    <div className="work-service">
                      <span className="work-label">Service: </span>
                      {data.service}
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <button
                      onClick={() => {
                        handleDelete(data._id);

                        setTimeout(() => {
                          GetPosts();
                        }, 1000);
                      }}
                      className="del-work me-3"
                    >
                      <DeleteForeverIcon />
                    </button>
                    <button
                      onClick={() => {
                        setTitle(data.title);
                        setDescription(data.description);
                        setRate(data.rate);
                        setWorkID(data._id);
                        setModalOpen(true);
                      }}
                      className="edit-work"
                    >
                      <EditIcon />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <JobRequests />
      <Footer />
    </div>
  );
};

export default PostJob;
