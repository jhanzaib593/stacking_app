import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Phase from "./Phase";
import "./index.css";

function DeFi() {
  return (
    <div>
      <Header />
      <div className="roadmap-main">
        <p className="roadmap-title">
          <span>yeild</span>Ton
        </p>
        <div className="roadmap-content">
          <div className="roadmap-detail">
            <h1
              className="detail-title text-primary"
              style={{ margin: "2px 0px 10px 0px" }}
            >
              Enhancing Your Staking Rewards
            </h1>
            <p
              className="detail-description"
              style={{ fontSize: 16, lineHeight: 1.5 }}
            >
              YieldTON is a decentralized application (DApp) operating on the
              TON blockchain, designed to amplify staking rewards for users
              holding TON tokens. By leveraging YieldTON, users can restake
              their Liquid Staking Tokens (LST), boosting their annual
              percentage yield (APY) significantly. Users can claim yTON tokens,
              offering an additional 5-10% yield on top of the existing 3% APY
              from traditional TON staking. The platform provides flexibility,
              allowing users to stake, claim, exchange, and un-stake their
              tokens at any time. Explore YieldTON today to maximize your
              staking rewards and enjoy the benefits of decentralized finance!
            </p>
          </div>
          <div className="roadmap-overflow">
            <div className="roadmap">
              <div className="vertical-line bg-primary"></div>
              <Phase
                title="Staking Platform and yTON Token Development (Month 1-2)"
                description={`
              <ul>
                <li>Launch Staking Platform</li>
                <li>Develop yTON Token</li>
                <li>Initial Marketing</li>
                <li>User Education</li>
              </ul>
            `}
                phase="Phase 1"
              />
              <Phase
                title="Planning and Initial Development for Airdrop dApp (Month 3)"
                description={`
              <ul>
                <li>Define Project Scope</li>
                <li>Assemble Team</li>
                <li>Design Architecture</li>
                <li>Prepare Documentation</li>
              </ul>
            `}
                phase="Phase 2"
              />
              <Phase
                title="Core Development and Testing for Airdrop dApp (Month 4-5)"
                description={`
              <ul>
                <li>Develop Smart Contracts</li>
                <li>Backend and Frontend Development</li>
                <li>Testing</li>
                <li>Feedback Loop</li>
              </ul>`}
                phase="Phase 3"
              />
              <Phase
                title="Beta Launch and User Onboarding (Month 6)"
                description={`<ul>
                <li>Beta Launch</li>
                <li>Onboard Users</li>
                <li>Marketing Campaigns</li>
                <li>Iterative Improvements</li>
              </ul>
              `}
                phase="Phase 4"
              />
              <Phase
                title="Full Launch and Marketing Expansion (Month 7)"
                description={`<ul>
                <li>Official Launch</li>
                <li>Expand Marketing</li>
                <li>Form Partnerships</li>
                <li>Introduce Paid Features</li>
              </ul>
              `}
                phase="Phase 5"
              />
              <Phase
                title="Growth and Optimization (Month 8)"
                description={`<ul>
                    <li>Optimize Performance</li>
                    <li>Enhance Features</li>
                    <li>Continuous Monitoring</li>
                    <li>Community Engagement</li>
                  </ul>

                  `}
                phase="Phase 6"
              />
              {/* <Phase
                title="Summary Timeline"
                description={`<ul>
              <li>Months 1-2: Staking Platform and yTON Token Development</li>
              <li>Month 3: Planning and Initial Development for Airdrop dApp</li>
              <li>Months 4-5: Core Development and Testing for Airdrop dApp</li>
              <li>Month 6: Beta Launch and User Onboarding</li>
              <li>Month 7: Full Launch and Marketing Expansion</li>
              <li>Month 8: Growth and Optimization</li>
            </ul>
            `}
                phase="Summary"
              /> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DeFi;
