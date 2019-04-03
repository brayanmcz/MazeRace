import React, { Component } from "react";
import styled from "styled-components";
import logo from './maze.png';

const Wrapper = styled.div`
  @media only screen and (min-height: 569px) {
    padding-top: 15vh;
  }

  .title-container {
    font-weight: 600;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .btn-outline {
    background-color: black;
    height: 50px;
  }

  .text-black{
    color: black;
  }

  .text-white{
    color: white;
  }

  .heavy {
    font-weight: 800;
  }

  .pin-input {
    height: 50px;
    font-weight: 600;
  }

  hr {
    border-top: 2px solid white;
  }

  .text-center{
    padding-top: 5px;
    font-weight: 600;
  }

  .outline-black{
    border-color: black;
  }

  .divider{
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .title {
    font-size: 50px;
  }

  .center {
    width: 100%;
  }

  .logo{
    height: 200px;
    width: 200px;
    margin-left: 35%;
  }

`;

class HomePage extends Component {
  render() {
    return (
      <Wrapper>
        <div className="container-fluid">
          <div className="row justify-content-center title-container">
            <div className="col-12">
              <img className="logo" src={logo} />
            </div>
          </div>
          <div className="row justify-content-center title-container">
            <div className="col-12">
              <p className="text-center title text-white">LABYRINTH</p>
            </div>
          </div>
          <div className="row justify-content-center button-container">
            <div className="center col-sm-6 col-md-5 col-lg-4 col-xl-2" >
              <input
                className="pin-input btn-block text-center heavy outline-black"
                placeholder="GAME PIN"
              />
              <button type="button" className="btn-outline btn-block heavy text-white">
                JOIN
              </button>
              <div className="row">
                <div className="col-sm-12">
                  <div className="row divider">
                    <div className="col-4">
                      <hr/>
                    </div>
                    <div className="col-4">
                      <p className="text-center text-white">OR</p>
                    </div>
                    <div className="col-4">
                      <hr/>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn-outline btn-block heavy text-white"
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
