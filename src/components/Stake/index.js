import { Button, Form, Input, Table, Select, Row, Col } from "antd";
import React, { useState, useEffect } from "react";
import "./index.css";
import Hipo from "../../assets/download (1) 1.png";
import BEMO from "../../assets/logo-mobile 1.png";
import TonStak from "../../assets/61089682-30e7-4f9f-a007-974081fa2913-removebg-preview 1.png";
import Tonhub from "../../assets/diamond.png";
import logo from "../../assets/LOGOsad 1.png";

const { Option } = Select;

const Stake = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("HIPO");
  const [data, setData] = useState([
    {
      key: "1",
      name: "You will receive",
      text: "TonStak",
    },
    {
      key: "2",
      name: "Exchange rate",
      text: "1 TonStak = ~ 1.0262 TON",
    },
    {
      key: "3",
      name: "Transaction cost",
      text: "0.015 TON",
    },
  ]);

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
  };

  useEffect(() => {
    const newData = data.map((item) => {
      if (item.key === "1") {
        return {
          ...item,
          text: `${selectedCurrency} `,
        };
      }
      if (item.key === "2") {
        return {
          ...item,
          text: `1 ${selectedCurrency} = ~ 1.0262 ${selectedCurrency}`,
        };
      }
      if (item.key === "3") {
        return {
          ...item,
          text: `0.015 ${selectedCurrency}`,
        };
      }
      return item;
    });
    setData(newData);
  }, [selectedCurrency]);

  const handleInputChange = (e) => {
    let value;
    if (selectedCurrency === "TonStak") {
      value = e.target.value * 5.0262;
    } else if (selectedCurrency === "BEMO") {
      value = e.target.value * 6.0262;
    } else if (selectedCurrency === "HIPO") {
      value = e.target.value * 3.0262;
    } else {
      value = e.target.value * 1.0262;
    }
    setInputValue(e.target.value);

    // Update the table data
    setData((prevData) =>
      prevData.map((item) =>
        item.key === "1"
          ? { ...item, text: `${value} ${selectedCurrency}` }
          : item
      )
    );
  };

  const columns = [
    {
      dataIndex: "name",
    },
    {
      dataIndex: "text",
    },
  ];

  return (
    <div className="container" style={{ padding: "2em 0" }}>
      <Row style={{ paddingBottom: 20 }}>
        <Col xs={12} md={12} sm={12} lg={12} style={{ paddingRight: 5 }}>
          <div className="pertage">
            <p>APY</p>
            <p>7.5%</p>
          </div>
        </Col>
        <Col xs={12} md={12} sm={12} lg={12} style={{ paddingLeft: 5 }}>
          <div className="pertage">
            <p>Project Annual Reward</p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <img src={logo} alt="" width={28} height={28} />
              &nbsp; 7.5%
            </p>
          </div>
        </Col>
      </Row>
      <div className="st_ma">
        <Form>
          <Form.Item
            name="stake"
            rules={[
              {
                message: "Amount",
              },
            ]}
            layout="vertical"
            label="Stake"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              paddingBottom: "2em",
            }}
          >
            <Input
              style={{ height: 50, fontSize: 20, marginTop: 10 }}
              addonBefore={
                <Select
                  defaultValue={selectedCurrency}
                  onChange={handleCurrencyChange}
                  className="selected"
                >
                  <Option value="HIPO">
                    <img src={Hipo} alt="Hipo" height={20} width={20} />
                  </Option>
                  <Option value="TonStak">
                    <img src={TonStak} alt="TonStak" height={20} width={20} />
                  </Option>

                  <Option value="BEMO">
                    <img src={BEMO} alt="BEMO" height={20} width={20} />
                  </Option>
                  <Option value="Tonwhales">
                    <img src={Tonhub} alt="Tonhub" height={20} width={20} />
                  </Option>
                </Select>
              }
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Amount"
            />
          </Form.Item>

          <Button className="st_btn">Connect Wallet</Button>
        </Form>
        <Table columns={columns} dataSource={data} pagination={false} />
      </div>
    </div>
  );
};

export default Stake;
