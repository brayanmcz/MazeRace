import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  @media only screen and (min-height: 569px) {
    padding-top: 25vh;
  }

  .title-container {
    color: white;
    font-size: 40px;
    font-weight: 600;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .btn-outline {
    background-color: black;
    color: white;
    height: 50px;
  }

  .heavy {
    font-weight: 800;
  }

  .pin-input {
    height: 50px;
  }

  hr {
    border-top: 2px solid white;
  }

  .text-center{
    padding-top: 5px;
    color:white;
    font-weight: 600;
  }

  .outline-black{
    border-color: black;
  }

  .divider{
    padding-top: 20px;
    padding-bottom: 10px;
  }

`;

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container-fluid">
          <div className="row justify-content-center title-container">
            <div className="col-6">
              <p className="text-center">MAZE RACE</p>
            </div>
          </div>
          <div className="row justify-content-center button-container">
            <div className="center col-6">
              <input
                className="pin-input btn-block text-center heavy outline-black"
                placeholder="GAME PIN"
              />
              <button type="button" className="btn-outline btn-block heavy">
                JOIN
              </button>
              <div className="row">
                <div className="col-sm-12">
                  <div className="row divider">
                    <div className="col-4">
                      <hr/>
                    </div>
                    <div className="col-4">
                      <p className="text-center">OR</p>
                    </div>
                    <div className="col-4">
                      <hr/>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn-outline btn-block heavy"
              >
                CREATE
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default HomePage;
