import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
} from "@ant-design/icons";
import icon from "../images/cryptocurrency.png";

const Navbar = () => {
    // Define the menu items
    const menuItems = [
        {
            key: "home",
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>,
        },
        {
            key: "cryptocurrencies",
            icon: <FundOutlined />,
            label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
        },
        {
            key: "exchanges",
            icon: <MoneyCollectOutlined />,
            label: <Link to="/exchanges">Exchanges</Link>,
        },
        {
            key: "news",
            icon: <BulbOutlined />,
            label: <Link to="/news">News</Link>,
        },
    ];

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crypto Dash</Link>
                </Typography.Title>
            </div>
            <Menu theme="dark" items={menuItems} />
        </div>
    );
};

export default Navbar;
