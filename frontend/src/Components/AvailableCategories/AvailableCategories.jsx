import React from "react";
import "./AvailableCategories.scss";
import PlumbingIcon from "@mui/icons-material/Plumbing";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import BrushIcon from "@mui/icons-material/Brush";
import CarRentalIcon from "@mui/icons-material/CarRental";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import SchoolIcon from "@mui/icons-material/School";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import { Link } from "react-router-dom";

const AvailableCategories = () => {
  return (
    <div className="available-category-wrapper mt-4">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-evenly">
          <div className="category-item col-3 col-md-1 d-flex flex-column align-items-center justify-content-center">
            <Link
              to="/find-worker-category"
              className="d-flex flex-column align-items-center"
            >
              <div className="category">
                <PlumbingIcon />
              </div>
              <span className="category-title">Plumber</span>
            </Link>
          </div>
          <div className="category-item col-3 col-md-1 d-flex flex-column align-items-center justify-content-center">
            <Link
              to="/find-worker-category"
              className="d-flex flex-column align-items-center"
            >
              <div className="category">
                <ElectricBoltIcon />
              </div>
              <span className="category-title">Electrician</span>
            </Link>
          </div>
          <div className="category-item col-3 col-md-1 d-flex flex-column align-items-center justify-content-center">
            <Link
              to="/find-worker-category"
              className="d-flex flex-column align-items-center"
            >
              <div className="category">
                <CarpenterIcon />
              </div>
              <span className="category-title">Carpenter</span>
            </Link>
          </div>
          <div className="category-item col-3 col-md-1 d-flex flex-column align-items-center justify-content-center">
            <Link
              to="/find-worker-category"
              className="d-flex flex-column align-items-center"
            >
              <div className="category">
                <BrushIcon />
              </div>
              <span className="category-title">Beautician</span>
            </Link>
          </div>
          <div className="category-item col-3 col-md-1 d-flex flex-column align-items-center justify-content-center mt-4 mt-md-0">
            <Link
              to="/find-worker-category"
              className="d-flex flex-column align-items-center"
            >
              <div className="category">
                <CarRentalIcon />
              </div>
              <span className="category-title">Driver</span>
            </Link>
          </div>
          <div className="category-item col-3 col-md-1 d-flex flex-column align-items-center justify-content-center mt-4 mt-md-0">
            <Link
              to="/find-worker-category"
              className="d-flex flex-column align-items-center"
            >
              <div className="category">
                <CleaningServicesIcon />
              </div>
              <span className="category-title">Maid</span>
            </Link>
          </div>
          <div className="category-item col-3 col-md-1 d-flex flex-column align-items-center justify-content-center mt-4 mt-md-0">
            <Link
              to="/find-worker-category"
              className="d-flex flex-column align-items-center"
            >
              <div className="category">
                <SchoolIcon />
              </div>
              <span className="category-title">Tutor</span>
            </Link>
          </div>
          <div className="category-item col-3 col-md-1 d-flex flex-column align-items-center justify-content-center mt-4 mt-md-0">
            <Link
              to="/find-worker-category"
              className="d-flex flex-column align-items-center"
            >
              <div className="category">
                <OutdoorGrillIcon />
              </div>
              <span className="category-title">Homecook</span>
            </Link>
          </div>
          <div className="category-item col-3 col-md-1 d-flex flex-column align-items-center justify-content-center mt-4 mt-md-0">
            <Link
              to="/find-worker-category"
              className="d-flex flex-column align-items-center"
            >
              <div className="category">
                <TempleHinduIcon />
              </div>
              <span className="category-title">Priest</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableCategories;
