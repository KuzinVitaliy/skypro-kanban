import styled from "styled-components";

export const STaskCard = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 10px;
  width: 194px;
  height: 98px;
  padding: 13px 13px 19px 13px;
  margin-bottom: 10px;
`;

export const backgroundColors = {
  design: "rgb(255, 228, 194)",
  research: "rgb(180, 253, 209)",
  copywriting: "rgb(233, 212, 255)",
};

export const textColors = {
  design: "rgb(255, 109, 0)",
  research: "rgb(6, 177, 110)",
  copywriting: "rgb(154, 72, 241)",
};

export const STaskCard_header = styled.div`
  display: flex;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const STaskCard_type = styled.div`
  height: 10px;
  border-radius: 18px;
  color: rgb(6, 177, 110);
  font-family: Roboto;
  font-size: 10px;
  font-weight: 700;
  line-height: 10px;
  letter-spacing: 0%;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 14px 4px 14px;
  background: rgb(255, 228, 194);
  background: ${({$type}) => backgroundColors[$type]};
  color: ${({$type}) => textColors[$type]};
`;

export const STaskCard_title = styled.div`
  color: rgb(0, 0, 0);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  min-height: 53px;
`;

export const STaskCard_date = styled.div`
  background-image: url("./calendar.svg");
  background-repeat: no-repeat;
  background-size: 10px, 10px;
  padding-left: 12px;
  color: rgb(148, 166, 190);
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  padding-left: 19px;
`;

export const STaskCard_action = styled.div`
  font-size: 16px;
  padding: 0px;
  background-image: url(./ellipsis-horizontal-sharp.svg);
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
`;
