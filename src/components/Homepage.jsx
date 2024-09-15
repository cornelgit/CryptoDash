import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic, Divider } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Cryptocurrencies, News } from "../components";
import Loader from "./Loader";

const { Title } = Typography;

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(12);
    const globalStats = data?.data?.stats;

    if (isFetching) {
        return <Loader />;
    }

    return (
        <>
            <Title level={2} className="heading">
                Global Crypto Stats
            </Title>
            <Row gutter={[32, 32]}>
                <Col>
                    <Statistic
                        title="Total Cryptocurrencies"
                        value={globalStats.total}
                    />
                </Col>
                <Col>
                    <Statistic
                        title="Total Exchanges"
                        value={millify(globalStats.totalExchanges)}
                    />
                </Col>
                <Col>
                    <Statistic
                        title="Total Market Cap"
                        value={millify(globalStats.totalMarketCap)}
                    />
                </Col>
                <Col>
                    <Statistic
                        title="Total 24h Volume"
                        value={millify(globalStats.total24hVolume)}
                    />
                </Col>
                <Col>
                    <Statistic
                        title="Total Markets"
                        value={millify(globalStats.totalMarkets)}
                    />
                </Col>
            </Row>
            <Divider />
            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Top Cryptocurrencies
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Title>
            </div>
            <Cryptocurrencies simplified />
            <Divider />
            <div className="home-heading-container">
                <Title level={2} className="home-title">
                    Latest Crypto News
                </Title>
                <Title level={3} className="show-more">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Title>
            </div>
            <News simplified />
        </>
    );
};

export default Homepage;
