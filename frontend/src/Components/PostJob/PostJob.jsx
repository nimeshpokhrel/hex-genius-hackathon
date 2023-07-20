import "./PostJob.scss";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../Hooks/useAuthContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-modal";
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
    maxWidth: 500,
    width: "auto",
  },
};

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState(0);
  const [workID, setWorkID] = useState("");
  const [userPosts, setUserPosts] = useState([]);
  const { token } = useAuthContext();
  const [modalOpen, setModalOpen] = useState(false);

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
    await fetch(`http://localhost:4000/deletework/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const handleEdit = async (id, title, description, rate) => {
    await fetch(`http://localhost:4000/editwork/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description, rate }),
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mt-4">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <h4 className="ms-2">
              Your Active <span className="secondary-color">Works</span>
            </h4>
            <button className="custom-button-2 d-flex align-items-center">
              <AddIcon className="me-2" />
              Add Job Listing
            </button>
          </div>
          <div className="row">
            <Modal
              isOpen={modalOpen}
              onRequestClose={() => setModalOpen(false)}
              style={customStyles}
            >
              <div className="d-flex flex-column">
                <span>Job Title:</span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              {description}
              {rate}
              <div className="d-flex mt-3">
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
    </div>
  );
};

export default PostJob;
