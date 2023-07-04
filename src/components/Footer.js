import React from "react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            ></Link>
            <span className="text-muted">
              <b>Made by Soumyajeet Muni</b>
              <div><b>Berhampur,Odisha</b></div>
              <div><b>soumyajeetmuni@gmail.com</b></div>
              <div><b>9998887770</b></div>
              <div><span className="text-muted">© 2023 <b>Food Vault</b>, Inc</span></div>

            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <Link className="text-muted" href="/">
                <svg className="bi" width="24" height="24">
                  <use></use>
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" href="/">
                <svg className="bi" width="24" height="24">
                  <use></use>
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="text-muted" href="/">
                <svg className="bi" width="24" height="24">
                  <use></use>
                </svg>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
