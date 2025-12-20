import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
    HomeOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/crypto.jpg";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const menuItems = [
        {
            key: "home",
            icon: <HomeOutlined />,
            label: <Link to="/">Home</Link>,
        },
        {
            key: "cryptocurrencies",
            icon: <FundOutlined />,
            label: <Link to="/cryptocurrencies">Crypto</Link>,
        },
        {
            key: "news",
            icon: <BulbOutlined />,
            label: <Link to="/news">News</Link>,
        },
    ];

    const selectedKey = menuItems.find(
        (item) => item.label.props.to === location.pathname
    )?.key;

    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" alt="btc logo" />
                <Typography.Title level={2} className="logo">
                    <Link to="/">Crypto Dash</Link>
                </Typography.Title>
                <Button
                    className="menu-control-container"
                    onClick={() => setActiveMenu(!activeMenu)}
                >
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <Menu
                    theme="dark"
                    items={menuItems}
                    selectedKeys={[selectedKey]}
                />
            )}
        </div>
    );
};

export default Navbar;
