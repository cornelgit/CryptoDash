import React, { useState } from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from "./Loader";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImage =
    "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
    const { data: cryptoNews } = useGetCryptoNewsQuery();
    const newsCount = simplified ? 6 : 30;

    if (!cryptoNews) {
        return <Loader />;
    }

    return (
        <Row gutter={[24, 24]}>
            {cryptoNews.data.map(
                (news, index) =>
                    index < newsCount && (
                        <Col xs={24} sm={12} lg={8} key={index}>
                            <Card hoverable className="news-card">
                                <a
                                    href={news.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="news-image-container">
                                        <Title className="news-title" level={4}>
                                            {news.title}
                                        </Title>
                                        <img
                                            src={news?.thumbnail || demoImage}
                                            alt="news"
                                            style={{
                                                maxWidth: "200px",
                                                maxHeight: "100px",
                                            }}
                                        />
                                    </div>
                                    <p>
                                        {news.description.length > 100
                                            ? `${news.description.substring(
                                                  0,
                                                  100
                                              )}...`
                                            : news.description}
                                    </p>
                                    <div className="provider-container">
                                        <div>
                                            <Text>
                                                {moment(news.createdAt)
                                                    .startOf("ss")
                                                    .fromNow()}
                                            </Text>
                                        </div>
                                    </div>
                                </a>
                            </Card>
                        </Col>
                    )
            )}
        </Row>
    );
};

export default News;
