import React from 'react';
import './pageAssets/css/style.css';

export default function Blog() {
  React.useEffect(() => {
    document
    .querySelector('.box1')
    .addEventListener('click',()=>{window.location.href = "https://github.com/mcall0147/fit-commit";})

    document
    .querySelector('.box2')
    .addEventListener('click',()=>{window.location.href = "https://github.com/davidludwik2370/project-1_RDB";})

    document
    .querySelector('.box3')
    .addEventListener('click',()=>{window.location.href = "https://glacial-lake-27691.herokuapp.com/";})

    document
    .querySelector('.box4')
    .addEventListener('click',()=>{window.location.href = "https://davidludwik2370.github.io/hw-5/";})

    document
    .querySelector('.box5')
    .addEventListener('click',()=>{window.location.href = "https://github.com/davidludwik2370/hw-10";})
  });
  return (
    <div className="main">
      <section>
      <div class="pics">
        <div class="box1">
          <div class="box-label">
            <div class="head-label">
              Fit Commit
            </div>
            <div class="sub-label">
              Full Stack
            </div>
          </div>
        </div>
        <div class="box2">
          <div class="box-label">
            <div class="head-label">
              Coin Based
            </div>
            <div class="sub-label">
              HTML/CSS/Javascript
            </div>
          </div>
        </div>
        <div class="box3">
          <div class="box-label">
            <div class="head-label">
              Note Taker
            </div>
            <div class="sub-label">
              HTML/JavaScript/CSS
            </div>
          </div>
        </div>
        <div class="box4">
          <div class="box-label">
            <div class="head-label">
              Day Planner
            </div>
            <div class="sub-label">
              HTML/CSS/JavaScript
            </div>
          </div>
        </div>
        <div class="box5">
          <div class="box-label">
            <div class="head-label">
              Team Profile Generator
            </div>
            <div class="sub-label">
              HTML/CSS/JavaScript
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
