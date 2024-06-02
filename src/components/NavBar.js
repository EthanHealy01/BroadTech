import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  const GetInTouch = styled.button`
    padding: 10px 15px;
    fontsize: 1rem;
    color: "black";
    background: transparent;
    border: 2px solid black;
    borderradius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
  `;

  const Button = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #4caf50;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #45a049;
    }
  `;
  const NavLink = styled(Link)`
    color: black;
    margin: 0 1rem;
    text-decoration: none;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: black;
      transform: scaleX(${(props) => (props.active ? 1 : 0)});
      transform-origin: bottom right;
      transition: transform 0.3s ease-out;
    }
    &:hover::after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/products", label: "Products" },
  ];

  const getNavLinkOffset = () => {
    const activeItemIndex = navItems.findIndex(
      (item) => item.path === activeLink
    );
    return (100 / navItems.length) * activeItemIndex;
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <svg
              width="150"
              height="50"
              viewBox="0 0 267 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.95 39V3H29.4C30.5 3 31.5 3.26666 32.4 3.8C33.3333 4.33333 34.0667 5.06667 34.6 6C35.1333 6.9 35.4 7.9 35.4 9V16.65C35.4 17.1167 35.3333 17.5833 35.2 18.05C35.1 18.4833 34.95 18.9 34.75 19.3C35.4833 20.4 36.0333 21.35 36.4 22.15C36.7667 22.95 36.95 23.7667 36.95 24.6V33C36.95 34.1 36.6833 35.1167 36.15 36.05C35.6167 36.95 34.8833 37.6667 33.95 38.2C33.05 38.7333 32.05 39 30.95 39H0.95ZM6.95 34.95H30.95C31.4833 34.95 31.9333 34.7667 32.3 34.4C32.7 34 32.9 33.5333 32.9 33V24.6C32.9 24.0667 32.7 23.6167 32.3 23.25C31.9333 22.85 31.4833 22.65 30.95 22.65H6.95C6.41667 22.65 5.95 22.85 5.55 23.25C5.18333 23.6167 5 24.0667 5 24.6V33C5 33.5333 5.18333 34 5.55 34.4C5.95 34.7667 6.41667 34.95 6.95 34.95ZM6.95 18.6H29.4C29.9333 18.6 30.3833 18.4167 30.75 18.05C31.1167 17.65 31.3 17.1833 31.3 16.65V9C31.3 8.46666 31.1167 8.01666 30.75 7.65C30.3833 7.25 29.9333 7.05 29.4 7.05H6.95C6.41667 7.05 5.95 7.25 5.55 7.65C5.18333 8.01666 5 8.46666 5 9V16.65C5 17.1833 5.18333 17.65 5.55 18.05C5.95 18.4167 6.41667 18.6 6.95 18.6ZM42.2016 39V16.05C42.2016 14.95 42.4682 13.95 43.0016 13.05C43.5682 12.1167 44.3016 11.3833 45.2016 10.85C46.1349 10.2833 47.1516 10 48.2516 10H64.5516V14.1H48.2516C47.7182 14.1 47.2516 14.3 46.8516 14.7C46.4849 15.0667 46.3016 15.5167 46.3016 16.05V39H42.2016ZM73.5434 39C72.4434 39 71.4267 38.7333 70.4934 38.2C69.5934 37.6333 68.86 36.9 68.2934 36C67.76 35.0667 67.4934 34.05 67.4934 32.95V16.05C67.4934 14.95 67.76 13.95 68.2934 13.05C68.86 12.1167 69.5934 11.3833 70.4934 10.85C71.4267 10.2833 72.4434 10 73.5434 10H90.9434C92.0767 10 93.0934 10.2833 93.9934 10.85C94.9267 11.3833 95.66 12.1167 96.1934 13.05C96.76 13.95 97.0434 14.95 97.0434 16.05V32.95C97.0434 34.05 96.76 35.0667 96.1934 36C95.66 36.9 94.9267 37.6333 93.9934 38.2C93.0934 38.7333 92.0767 39 90.9434 39H73.5434ZM73.5434 34.9H90.9434C91.4767 34.9 91.9267 34.7167 92.2934 34.35C92.6934 33.95 92.8934 33.4833 92.8934 32.95V16.05C92.8934 15.5167 92.6934 15.0667 92.2934 14.7C91.9267 14.3 91.4767 14.1 90.9434 14.1H73.5434C73.01 14.1 72.5434 14.3 72.1434 14.7C71.7767 15.0667 71.5934 15.5167 71.5934 16.05V32.95C71.5934 33.4833 71.7767 33.95 72.1434 34.35C72.5434 34.7167 73.01 34.9 73.5434 34.9ZM107.724 39C106.624 39 105.608 38.7333 104.674 38.2C103.774 37.6333 103.041 36.9 102.474 36C101.941 35.0667 101.674 34.05 101.674 32.95V22.45H127.074V16.05C127.074 15.5167 126.874 15.0667 126.474 14.7C126.108 14.3 125.658 14.1 125.124 14.1H101.674V10H125.124C126.258 10 127.274 10.2833 128.174 10.85C129.108 11.3833 129.841 12.1167 130.374 13.05C130.941 13.95 131.224 14.95 131.224 16.05V39H107.724ZM107.724 34.9H127.074V26.55H105.774V32.95C105.774 33.4833 105.958 33.95 106.324 34.35C106.724 34.7167 107.191 34.9 107.724 34.9ZM141.041 39C139.908 39 138.874 38.7333 137.941 38.2C137.041 37.6333 136.308 36.9 135.741 36C135.208 35.0667 134.941 34.05 134.941 32.95V16.05C134.941 14.95 135.208 13.95 135.741 13.05C136.308 12.1167 137.041 11.3833 137.941 10.85C138.874 10.2833 139.908 10 141.041 10H160.391V0.499998H164.491V39H141.041ZM141.041 34.9H158.441C158.974 34.9 159.424 34.7167 159.791 34.35C160.191 33.95 160.391 33.4833 160.391 32.95V16.05C160.391 15.5167 160.191 15.0667 159.791 14.7C159.424 14.3 158.974 14.1 158.441 14.1H141.041C140.508 14.1 140.041 14.3 139.641 14.7C139.274 15.0667 139.091 15.5167 139.091 16.05V32.95C139.091 33.4833 139.274 33.95 139.641 34.35C140.041 34.7167 140.508 34.9 141.041 34.9ZM174.764 39C173.664 39 172.647 38.7333 171.714 38.2C170.814 37.6333 170.081 36.9 169.514 36C168.981 35.0667 168.714 34.05 168.714 32.95V16.05C168.714 14.95 168.981 13.95 169.514 13.05C170.081 12.1167 170.814 11.3833 171.714 10.85C172.647 10.2833 173.664 10 174.764 10H192.164C193.297 10 194.314 10.2833 195.214 10.85C196.147 11.3833 196.881 12.1167 197.414 13.05C197.981 13.95 198.264 14.95 198.264 16.05V26.55H172.814V32.95C172.814 33.4833 172.997 33.95 173.364 34.35C173.764 34.7167 174.231 34.9 174.764 34.9H198.264V39H174.764ZM172.814 22.45H194.114V16.05C194.114 15.5167 193.914 15.0667 193.514 14.7C193.147 14.3 192.697 14.1 192.164 14.1H174.764C174.231 14.1 173.764 14.3 173.364 14.7C172.997 15.0667 172.814 15.5167 172.814 16.05V22.45ZM208.407 39C207.307 39 206.29 38.7333 205.357 38.2C204.457 37.6333 203.723 36.9 203.157 36C202.623 35.0667 202.357 34.05 202.357 32.95V16.05C202.357 14.95 202.623 13.95 203.157 13.05C203.723 12.1167 204.457 11.3833 205.357 10.85C206.29 10.2833 207.307 10 208.407 10H231.807V14.1H208.407C207.873 14.1 207.407 14.3 207.007 14.7C206.64 15.0667 206.457 15.5167 206.457 16.05V32.95C206.457 33.4833 206.64 33.95 207.007 34.35C207.407 34.7167 207.873 34.9 208.407 34.9H231.907V39H208.407ZM236.54 39V0.499998H240.64V10H260.04C261.14 10 262.14 10.2833 263.04 10.85C263.973 11.3833 264.707 12.1167 265.24 13.05C265.807 13.95 266.09 14.95 266.09 16.05V39H261.99V16.05C261.99 15.5167 261.79 15.0667 261.39 14.7C261.023 14.3 260.573 14.1 260.04 14.1H242.64C242.107 14.1 241.64 14.3 241.24 14.7C240.84 15.0667 240.64 15.5167 240.64 16.05V39H236.54Z"
                fill="black"
              />
            </svg>{" "}
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "center", flex: 1, position: "relative" }}>
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              active={activeLink === item.path}
              onClick={() => setActiveLink(item.path)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <GetInTouch style={{ borderRadius: 100 }} onClick={openModal}>
          GET IN TOUCH
        </GetInTouch>
      </nav>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.3)",
              borderRadius: "15px",
              padding: "2rem",
              maxWidth: "400px",
              width: "100%",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <h2>Contact Us</h2>
            <form>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="contactName"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contactName"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label
                  htmlFor="contactEmail"
                  style={{ display: "block", marginBottom: "0.5rem" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <input type="checkbox" id="subscribe" />
                <label
                  htmlFor="subscribe"
                  style={{ fontSize: 12, marginLeft: "0.5rem" }}
                >
                  By ticking this box I accept to receive email communications
                  from Broadhaven Technologies Limited.
                </label>
              </div>
              <Button
                type="button"
                onClick={closeModal}
                style={{ marginRight: "1rem" }}
              >
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
