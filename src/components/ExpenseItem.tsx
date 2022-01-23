import styled from "@emotion/styled";

///stylling
const TDhover = styled.td`
  &:hover {
    outline: none;
    border-color: #ccc;
    background-color: #ccc;
  }
`;

///component
const ExpenseItem: React.FC<{
  title: string;
  amountPLN: string;
  amountEUR: string;
  onRemoveExpense: () => void;
}> = (props) => {
  return (
    <tr>
      <td>{props.title} </td>
      <td>{props.amountPLN}</td>
      <td>{props.amountEUR}</td>
      <TDhover onClick={props.onRemoveExpense}>Delete</TDhover>
    </tr>
  );
};

export default ExpenseItem;
