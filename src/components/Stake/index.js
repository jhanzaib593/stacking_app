import { Button, Form, Input, Table, Select } from "antd";
import React, { useState, useEffect } from "react";
import "./index.css";
import TonStak from "../../assets/TonStak.png";
import BEMO from "../../assets/BEMO.jpeg";
import Hipo from "../../assets/download.svg";
import Tonhub from "../../assets/logo_round_desktop.svg";

const { Option } = Select;

const Stake = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState("TON");
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

  useEffect(() => {
    const newData = data.map((item) => {
      if (item.key === "1") {
        return {
          ...item,
          age: `${selectedCurrency} `,
        };
      }
      if (item.key === "2") {
        return {
          ...item,
          age: `1 ${selectedCurrency} = ~ 1.0262 ${selectedCurrency}`,
        };
      }
      if (item.key === "3") {
        return {
          ...item,
          age: `0.015 ${selectedCurrency}`,
        };
      }
      return item;
    });
    setData(newData);
  }, [selectedCurrency]);

  const handleInputChange = (e) => {
    let value;
    if (selectedCurrency === "tonstakers") {
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
          ? { ...item, age: `${value} ${selectedCurrency}` }
          : item
      )
    );
  };

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
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
      style={{ display: "flex", justifyContent: "center", paddingTop: "2em" }}
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
              style={{ height: 50, fontSize: 20, marginTop: 10 }}
              addonBefore={
                <Select
                  defaultValue={selectedCurrency}
                  onChange={handleCurrencyChange}
                  style={{
                    width: 80,
                    backgroundColor: "#cae696",
                    paddingTop: 5,
                  }}
                >
                  <Option value="TonStak">
                    <img src={TonStak} alt="TonStak" height={20} width={20} />
                  </Option>
                  <Option value="HIPO">
                    <img src={Hipo} alt="Hipo" height={20} width={20} />
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
