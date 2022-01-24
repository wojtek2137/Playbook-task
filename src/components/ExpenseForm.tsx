import styled from "@emotion/styled";
import { css } from "@emotion/css";
import React from "react";

///styling
interface inputProps {
  isInvalid: boolean;
}
const Label = styled.label`
  display: inline-block;
  width: 200px;
  font-weight: 600;
  font-size: 1.2rem;
  @media (max-width: 992px) {
    width: 150px;
    font-size: 1rem;
  }
`;
const Input = styled.input<inputProps>`
  font: inherit;
  padding: 0.3rem;
  border: ${(props) =>
    props.isInvalid ? "1px solid #b40e0e" : "1px solid #000"};
  width: 16rem;
  max-width: 100%;
  background-color: ${(props) => (props.isInvalid ? " #fddddd" : "#ffffff")};
  &:focus {
    outline: none;
  }
  @media (max-width: 992px) {
    width: 12rem;
    padding: 0.2rem;
  }
`;
const Button = styled.button`
  font: inherit;
  background-color: #dbdbdbfd;
  color: black;
  font-size: large;
  font-weight: 600;
  border: 1px solid black;
  padding: 0.3rem 4rem;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 60px;
  &:hover,
  &:active {
    background-color: #3c3b3d15;
    border-color: #3c3b3d15;
  }
  @media (max-width: 992px) {
    font-size: medium;
    padding: 0.1rem 1rem;
    margin-left: 10px;
  }
`;

///component
const ExpenseForm: React.FC<{
  title: string;
  amount: string;
  inputsInvalid: boolean;
  submitForm: (event: React.FormEvent) => void;
  titleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  amountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  titleBlur: () => void;
  amountBlur: () => void;
}> = (props) => {
  return (
    <form onSubmit={props.submitForm}>
      <div>
        <div>
          <Label htmlFor="title">Title of transaction</Label>
          <Input
            isInvalid={props.inputsInvalid}
            type="text"
            id="title"
            minLength={5}
            value={props.title}
            onChange={props.titleChange}
            onBlur={props.titleBlur}
          />
        </div>
        <div
          className={css({
            marginTop: "20px",
          })}
        >
          <Label htmlFor="amount">Amount (in PLN)</Label>
          <Input
            isInvalid={props.inputsInvalid}
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={props.amount}
            onChange={props.amountChange}
            onBlur={props.amountBlur}
          />

          <Button type="submit">Add</Button>
          {props.inputsInvalid && (
            <p
              className={css({
                display: "block",
                width: "360px",
                margin: 0,
                color: "#b40e0e",
                textAlign: "right",
              })}
            >
              all inputs are required.
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
