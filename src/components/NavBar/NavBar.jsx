import React from 'react'
import {NavLink} from 'react-router-dom';
import { useUserState } from '../../components/UserContext';

const NavBar = () => {
    const { isAuthenticated } = useUserState();
    return (
        <nav className="site-main-menu">
            <ul>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Homepage</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">About Us</span></NavLink>
                </li>
                { isAuthenticated && (
                    <>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/daytrade"}><span className="menu-text">Day Trade</span></NavLink>
                        </li>
                        <li>
                            <NavLink to={process.env.PUBLIC_URL + "/topnews"}><span className="menu-text">Top News</span></NavLink>
                        </li>
                        <li className="has-children">
                            <NavLink to={process.env.PUBLIC_URL + "/settings"}><span className="menu-text">Account</span></NavLink>
                            <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                            <ul className="sub-menu">
                                <li><NavLink to={process.env.PUBLIC_URL + "/settings"}><span className="menu-text">Settings</span></NavLink></li>
                                <li><NavLink to={process.env.PUBLIC_URL + `/schedule`}><span className="menu-text">Schdule</span></NavLink></li>
                                <li><NavLink to={process.env.PUBLIC_URL + "/billings"}><span className="menu-text">Billings</span></NavLink></li>
                                <li> <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Contact Us</span></NavLink></li>
                                <hr />
                                <li><NavLink to={process.env.PUBLIC_URL + `/logout`}><span className="menu-text">Log Out</span></NavLink></li>
                            </ul>
                        </li>
                    </>
                )}
                {/* <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">Services</span></NavLink>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Work</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Work</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Work Details</span></NavLink></li>
                    </ul>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog Grid</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-classic"}><span className="menu-text">Blog classic</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/blog-details/1`}><span className="menu-text">Blog Details</span></NavLink></li>
                    </ul>
                </li> */}
                { !isAuthenticated && (
                    <li>
                        <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Contact Us</span></NavLink>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default NavBar
