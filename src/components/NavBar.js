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
          <svg width="150" height="50" viewBox="0 0 305 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.95 39V3H29.4C30.5 3 31.5 3.26666 32.4 3.8C33.3333 4.33333 34.0667 5.06667 34.6 6C35.1333 6.9 35.4 7.9 35.4 9V16.65C35.4 17.1167 35.3333 17.5833 35.2 18.05C35.1 18.4833 34.95 18.9 34.75 19.3C35.4833 20.4 36.0333 21.35 36.4 22.15C36.7667 22.95 36.95 23.7667 36.95 24.6V33C36.95 34.1 36.6833 35.1167 36.15 36.05C35.6167 36.95 34.8833 37.6667 33.95 38.2C33.05 38.7333 32.05 39 30.95 39H0.95ZM6.95 34.95H30.95C31.4833 34.95 31.9333 34.7667 32.3 34.4C32.7 34 32.9 33.5333 32.9 33V24.6C32.9 24.0667 32.7 23.6167 32.3 23.25C31.9333 22.85 31.4833 22.65 30.95 22.65H6.95C6.41667 22.65 5.95 22.85 5.55 23.25C5.18333 23.6167 5 24.0667 5 24.6V33C5 33.5333 5.18333 34 5.55 34.4C5.95 34.7667 6.41667 34.95 6.95 34.95ZM6.95 18.6H29.4C29.9333 18.6 30.3833 18.4167 30.75 18.05C31.1167 17.65 31.3 17.1833 31.3 16.65V9C31.3 8.46666 31.1167 8.01666 30.75 7.65C30.3833 7.25 29.9333 7.05 29.4 7.05H6.95C6.41667 7.05 5.95 7.25 5.55 7.65C5.18333 8.01666 5 8.46666 5 9V16.65C5 17.1833 5.18333 17.65 5.55 18.05C5.95 18.4167 6.41667 18.6 6.95 18.6ZM42.2016 39V16.05C42.2016 14.95 42.4682 13.95 43.0016 13.05C43.5682 12.1167 44.3016 11.3833 45.2016 10.85C46.1349 10.2833 47.1516 10 48.2516 10H64.5516V14.1H48.2516C47.7182 14.1 47.2516 14.3 46.8516 14.7C46.4849 15.0667 46.3016 15.5167 46.3016 16.05V39H42.2016ZM73.5434 39C72.4434 39 71.4267 38.7333 70.4934 38.2C69.5934 37.6333 68.86 36.9 68.2934 36C67.76 35.0667 67.4934 34.05 67.4934 32.95V16.05C67.4934 14.95 67.76 13.95 68.2934 13.05C68.86 12.1167 69.5934 11.3833 70.4934 10.85C71.4267 10.2833 72.4434 10 73.5434 10H90.9434C92.0767 10 93.0934 10.2833 93.9934 10.85C94.9267 11.3833 95.66 12.1167 96.1934 13.05C96.76 13.95 97.0434 14.95 97.0434 16.05V32.95C97.0434 34.05 96.76 35.0667 96.1934 36C95.66 36.9 94.9267 37.6333 93.9934 38.2C93.0934 38.7333 92.0767 39 90.9434 39H73.5434ZM73.5434 34.9H90.9434C91.4767 34.9 91.9267 34.7167 92.2934 34.35C92.6934 33.95 92.8934 33.4833 92.8934 32.95V16.05C92.8934 15.5167 92.6934 15.0667 92.2934 14.7C91.9267 14.3 91.4767 14.1 90.9434 14.1H73.5434C73.01 14.1 72.5434 14.3 72.1434 14.7C71.7767 15.0667 71.5934 15.5167 71.5934 16.05V32.95C71.5934 33.4833 71.7767 33.95 72.1434 34.35C72.5434 34.7167 73.01 34.9 73.5434 34.9ZM107.724 39C106.624 39 105.608 38.7333 104.674 38.2C103.774 37.6333 103.041 36.9 102.474 36C101.941 35.0667 101.674 34.05 101.674 32.95V22.45H127.074V16.05C127.074 15.5167 126.874 15.0667 126.474 14.7C126.108 14.3 125.658 14.1 125.124 14.1H101.674V10H125.124C126.258 10 127.274 10.2833 128.174 10.85C129.108 11.3833 129.841 12.1167 130.374 13.05C130.941 13.95 131.224 14.95 131.224 16.05V39H107.724ZM107.724 34.9H127.074V26.55H105.774V32.95C105.774 33.4833 105.958 33.95 106.324 34.35C106.724 34.7167 107.191 34.9 107.724 34.9ZM141.041 39C139.908 39 138.874 38.7333 137.941 38.2C137.041 37.6333 136.308 36.9 135.741 36C135.208 35.0667 134.941 34.05 134.941 32.95V16.05C134.941 14.95 135.208 13.95 135.741 13.05C136.308 12.1167 137.041 11.3833 137.941 10.85C138.874 10.2833 139.908 10 141.041 10H160.391V0.499998H164.491V39H141.041ZM141.041 34.9H158.441C158.974 34.9 159.424 34.7167 159.791 34.35C160.191 33.95 160.391 33.4833 160.391 32.95V16.05C160.391 15.5167 160.191 15.0667 159.791 14.7C159.424 14.3 158.974 14.1 158.441 14.1H141.041C140.508 14.1 140.041 14.3 139.641 14.7C139.274 15.0667 139.091 15.5167 139.091 16.05V32.95C139.091 33.4833 139.274 33.95 139.641 34.35C140.041 34.7167 140.508 34.9 141.041 34.9ZM184.141 39V7.05H168.141V3H204.141V7.05H188.191V39H184.141ZM213.68 39C212.58 39 211.563 38.7333 210.63 38.2C209.73 37.6333 208.997 36.9 208.43 36C207.897 35.0667 207.63 34.05 207.63 32.95V16.05C207.63 14.95 207.897 13.95 208.43 13.05C208.997 12.1167 209.73 11.3833 210.63 10.85C211.563 10.2833 212.58 10 213.68 10H231.08C232.213 10 233.23 10.2833 234.13 10.85C235.063 11.3833 235.797 12.1167 236.33 13.05C236.897 13.95 237.18 14.95 237.18 16.05V26.55H211.73V32.95C211.73 33.4833 211.913 33.95 212.28 34.35C212.68 34.7167 213.147 34.9 213.68 34.9H237.18V39H213.68ZM211.73 22.45H233.03V16.05C233.03 15.5167 232.83 15.0667 232.43 14.7C232.063 14.3 231.613 14.1 231.08 14.1H213.68C213.147 14.1 212.68 14.3 212.28 14.7C211.913 15.0667 211.73 15.5167 211.73 16.05V22.45ZM247.323 39C246.223 39 245.206 38.7333 244.273 38.2C243.373 37.6333 242.639 36.9 242.073 36C241.539 35.0667 241.273 34.05 241.273 32.95V16.05C241.273 14.95 241.539 13.95 242.073 13.05C242.639 12.1167 243.373 11.3833 244.273 10.85C245.206 10.2833 246.223 10 247.323 10H270.723V14.1H247.323C246.789 14.1 246.323 14.3 245.923 14.7C245.556 15.0667 245.373 15.5167 245.373 16.05V32.95C245.373 33.4833 245.556 33.95 245.923 34.35C246.323 34.7167 246.789 34.9 247.323 34.9H270.823V39H247.323ZM275.456 39V0.499998H279.556V10H298.956C300.056 10 301.056 10.2833 301.956 10.85C302.889 11.3833 303.623 12.1167 304.156 13.05C304.723 13.95 305.006 14.95 305.006 16.05V39H300.906V16.05C300.906 15.5167 300.706 15.0667 300.306 14.7C299.939 14.3 299.489 14.1 298.956 14.1H281.556C281.023 14.1 280.556 14.3 280.156 14.7C279.756 15.0667 279.556 15.5167 279.556 16.05V39H275.456Z" fill="black"/>
</svg>
{" "}
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
