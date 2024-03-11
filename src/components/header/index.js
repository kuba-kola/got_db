import React from 'react';
import './styles.css';
import { Link, withRouter } from 'react-router-dom';
import cx from "classnames";

const Header = ({ location }) => (
    <div className="header">
        <h3 className="header-title">
            <Link to='/'>
                Game of Thrones DB
            </Link>
        </h3>
        <ul className="header-list">
            <li
                className={cx("", {
                    linkSelected: location.pathname === '/characters/',
                })}
            >
                <Link
                    to='/characters/'
                >
                    Characters
                </Link>
            </li>
            <li
                className={cx("", {
                    linkSelected: location.pathname === '/houses/',
                })}
            >
                <Link
                    to='/houses/'
                >
                    Houses
                </Link>
            </li>
            <li
                className={cx("", {
                    linkSelected: location.pathname === '/books/',
                })}
            >
                <Link
                    to='/books/'
                >
                    Books
                </Link>   
            </li>
        </ul>
    </div>
);

export default withRouter(Header);