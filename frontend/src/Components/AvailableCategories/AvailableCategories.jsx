import React from "react";
import "./AvailableCategories.scss";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import { Link } from "react-router-dom";

const AvailableCategories = () => {
  return (
    <div className="available-category-wrapper mt-4">
      <div className="container">
        <div className="row">
          <div className="col-1 d-flex flex-column align-items-center justify-content-center">
            <Link to="/find-worker-category">
              <div className="category">
                <PlumbingIcon />
              </div>
              <span className="category-title">Plumber</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCategories;
