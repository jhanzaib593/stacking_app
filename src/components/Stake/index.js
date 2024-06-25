import { Button, Form, Input, Table } from "antd";
import React, { useState } from "react";
import { RadarChartOutlined } from "@ant-design/icons";
import "./index.css";

const Stake = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([
    {
      key: "1",
      name: "You will receive",
      age: "hTON",
    },
    {
      key: "2",
      name: "Exchange rate",
      age: "1 hTON = ~ 1.0262 TON",
    },
    {
      key: "3",
      name: "Transaction cost",
      age: "0.015 TON",
    },
  ]);

  const handleInputChange = (e) => {
    const value = e.target.value * 1.0262;
    setInputValue(value);

    // Update the table data
    setData((prevData) =>
      prevData.map((item) =>
        item.key === "1" ? { ...item, age: `~ ${value} hTON` } : item
      )
    );
  };

  const columns = [
    {
      dataIndex: "name",
    },
    {
      dataIndex: "age",
    },
  ];

  return (
    <div
      className="container"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="st_ma">
        <Form>
          <Form.Item
            name="amount"
            rules={[
              {
                message: "Amount",
              },
            ]}
            layout="vertical"
            label="Amount"
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
              style={{ height: 50, fontSize: 20 }}
              prefix={<RadarChartOutlined />}
              value={inputValue}
              onChange={handleInputChange}
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
