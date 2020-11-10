import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";

const BulletListItem = styled.li`
  margin-bottom: 10px;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col>
        <h1 className={["text-center", "mt-5"].join(" ")}>
          Find Out What Kyle Biddle Can Do For Collectors Universe
        </h1>
      </Col>
    </Row>
    <Row className={["py-5"].join(" ")}>
      <Col>
        <div className={["border-bottom", "mb-3"].join(" ")}>
          <img
            className={["d-block", "mx-auto"].join(" ")}
            src="https://www.collectorsuniverse.com/Content/img/sm_logo_pcgs.png"
            alt="PSA logo 2"
          />
        </div>
        <h4 className={["text-center", "mb-3"].join(" ")}>
          Professional Card identifier for Grading Services{" "}
        </h4>
        <ul>
          <BulletListItem>
            Identify sports cards from various brands and leagues like the NBA,
            NHL, NFL and MLB, utilizing my always expanding knowledge of sports
            collectibles gained over my lifetime.{" "}
          </BulletListItem>
          <BulletListItem>
            Identify Pokemon, Yu-Gi-Oh, MTG and other non- sports cards in
            addition to vintage cards and entertainment memorabilia using proven
            research sources for collectibles.{" "}
          </BulletListItem>
          <BulletListItem>
            {" "}
            Be it cards, memorabilia or other collectibles like event tickets I
            will use all means of research at my disposal. Such as trade
            magazines, books from various time periods or the internet.
          </BulletListItem>
          <BulletListItem>
            Use a vast first hand knowledge of sports and non sports
            collectibles. My personal collections include bought
            authentic/bought than authentiucated hollywood mem. sport cards,
            TCGs, signed photos, vintage posters, events tickets, signed albums,
            records and more.
          </BulletListItem>
        </ul>
      </Col>
      <Col>
        <div className={["border-bottom", "mb-3"].join(" ")}>
          <img
            className={["d-block", "mx-auto"].join(" ")}
            src="https://www.collectorsuniverse.com/Content/img/sm_logo_psa.png"
            alt="PSA logo"
          />
        </div>
        <h3 className={["text-center", "mb-3"].join(" ")}>
          Professional Sports Articulator
        </h3>
        <ul>
          <BulletListItem>
            Use 8 years experience working in a team to effectively communicate
            with supervisors, fellow staff and customers using strong written
            and verbal skills.{" "}
          </BulletListItem>
          <BulletListItem>
            Communicate with manufacturers such as Topps, Upper Deck, and Panini
            usi ng communications skills gained from 3 years of working with
            vendors and suppliers in the restaurant industry to guarantee the
            best working relationship with manufacturers.
          </BulletListItem>
          <BulletListItem>
            Work effectively within the team structure of PSA to quickly and
            efficently research items to grow PSA as the leading authernticator
            in the industry. I hope to help grow the collecting community I love
            being part of as a research specialist at PSA.
          </BulletListItem>
          <BulletListItem>
            Maintain and update appropriate databases similar to various client
            and company databases which I managed over 3 years while working as
            a digital media specialist.{" "}
          </BulletListItem>
        </ul>
      </Col>
    </Row>
  </Layout>
);

export default IndexPage;
