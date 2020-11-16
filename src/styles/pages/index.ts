import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    background: #333337;
    padding: 20px;
    width: 501px;
    height: auto;
    box-shadow: 30px 30px 30px rgba(0, 0, 0, 0.25);
    border-radius: 15px;

    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;

    label {
      font-weight: bold;
      font-size: 35px;
      line-height: 61px;
      margin-left: 10px;

      color: #f4f4f6;
      text-shadow: 3px 4px 1.5px rgba(0, 0, 0, 0.25);
    }

    input {
      background: #4d4d53;
      border-radius: 10px;
      width: 100%;
      height: 57px;
      border: 0;
      padding: 28px;

      font-weight: bold;
      font-size: 30px;
      line-height: 61px;
      color: #fff;
      text-shadow: 3px 4px 1.5px rgba(0, 0, 0, 0.1);
    }

    button {
      width: 257px;
      height: 58px;

      margin-top: 20px;

      background: #66666e;
      border-radius: 15px;
      border: 0;

      font-weight: bold;
      font-size: 30px;
      line-height: 61px;

      color: #ffffff;

      text-shadow: 3px 4px 1.5px rgba(0, 0, 0, 0.25);
    }

    button:active {
      background-color: #55555e;
    }
  }
`
