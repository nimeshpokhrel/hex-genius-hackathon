import React, { useEffect, useState } from "react";
import "./BrowseCategory.scss";
import { useSearchParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useAuthContext } from "../../Hooks/useAuthContext";
import AvailableCategories from "../AvailableCategories/AvailableCategories";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ConstructionIcon from "@mui/icons-material/Construction";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

function BrowseCategory() {
  const [categoryData, setCategoryData] = useState([]);
  const [searchParams] = useSearchParams();

  const [workID, setWorkID] = useState("");

  const { token } = useAuthContext();

  const category = searchParams.get("category");

  const getCategoryData = async () => {
    const response = await fetch("http://localhost:4000/getworkscategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ category }),
    });

    const json = await response.json();

    setCategoryData(json);
  };

  const HireWorker = async () => {
    const response = await fetch("http://localhost:4000/hireworker", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ workID, message: "test" }),
    });

    const json = await response.json();
  };

  useEffect(() => {
    getCategoryData();
  }, [categoryData]);

  useEffect(() => {
    console.log(categoryData);
  }, [categoryData]);

  useEffect(() => {
    if(workID !== "")
      HireWorker();
  }, [workID]);

  return (
    <div className="body-margin">
      <Navbar />
      <div className="container">
        <h4 className="ms-2 text-center mt-5">
          Our Availab<span className="secondary-color">le Categories</span>
        </h4>
        <AvailableCategories />
        <div className="mt-5">
          <div className="row">
            <h4 className="d-flex align-items-center justify-content-md-start justify-content-center ms-2 text-center mb-4 mt-2">
              Showing Results -
              <span className="secondary-color">
                {" "}
                <span
                  className="ms-2 text-uppercase"
                  style={{ fontSize: "1.25rem" }}
                >
                  {" "}
                  {category}
                </span>
              </span>
            </h4>
            {categoryData.map((data, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="worker-wrapper">
                  <div className="mb-3">
                    <span className="work-label">Service Details:</span>
                    <div className="pt-2">
                      <div className="work-details d-flex align-items-center">
                        <WorkOutlineIcon />
                        {data.title}
                      </div>
                      <div className="work-details d-flex align-items-center text-truncate">
                        <DescriptionIcon />
                        {data.description}
                      </div>
                      <div className="work-details d-flex align-items-center">
                        <AttachMoneyIcon />
                        {"NPR. " + data.rate}
                      </div>
                    </div>
                  </div>

                  <span className="work-label">Worker Details:</span>
                  <div className="pt-2">
                    <div className="worker-details d-flex align-items-center">
                      <PersonIcon />
                      {data.worker.firstName + " " + data.worker.lastName}
                    </div>
                    <div className="worker-details d-flex align-items-center">
                      <StarIcon />
                      {data.worker.rating}/5
                    </div>
                    <div className="worker-details d-flex align-items-center">
                      <MailOutlineIcon />
                      {data.worker.email}
                    </div>
                    <div className="worker-details d-flex align-items-center">
                      <ConstructionIcon />
                      {data.worker.service}
                    </div>
                  </div>
                  <div className="mt-3">
                    <button
                      className="custom-button"
                      onClick={() => {
                        setWorkID(data._id);
                      }}
                    >
                      HIRE NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <h4 className="ms-2">
              Your Acti<span className="secondary-color">ve Hires</span>
            </h4>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BrowseCategory;
