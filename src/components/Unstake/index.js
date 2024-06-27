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

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
    setInputValue(""); // Reset input value when the currency changes
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
      <div className="st_ma">
        <div style={{ paddingBottom: "2em" }}>
          <Form.Item
            label="Unstake"
            layout="vertical"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
          >
            <Input
              prefix={<img src={logo} alt="" width={28} height={28} />}
              style={{ padding: 10 }}
              placeholder="Amount"
            />
          </Form.Item>
        </div>
        <Button className="st_btn">Connect Wallet</Button>

        <Table columns={columns} dataSource={data} pagination={false} />
        <Form>
          <Form.Item
            name="unstake"
            rules={[
              {
                message: "Select Token",
              },
            ]}
            layout="vertical"
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
                  value={selectedCurrency}
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
              // value={selectedCurrency}
              placeholder={selectedCurrency}
              // defaultValue={selectedCurrency}
              onChange={handleInputChange}
              readOnly
              className="text_input"
            />
          </Form.Item>
        </Form>
      </div>
      <Row style={{ paddingTop: 20 }}>
        <Col xs={12} md={12} sm={12} lg={12} style={{ paddingRight: 5 }}>
          <Button className="btn_unstake">Unstake in 24H</Button>
        </Col>
        <Col xs={12} md={12} sm={12} lg={12} style={{ paddingLeft: 5 }}>
          <Button className="btn_unstake">Swap Now</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Stake;
