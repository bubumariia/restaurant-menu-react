import React, { Component } from "react";
import { data } from "./data";
import "./style.css";

export default class Menu extends Component {
  constructor() {
    super();
    this.state = {
      meals: data,
    };
  }
  handleClick = (event) => {
    let categoryBtn = event.target.name;
    let mealArray = [];
    data.map((meal) => {
      if (categoryBtn === "allData") {
        mealArray.push(meal);
        return meal;
      }
      if (meal.category === categoryBtn) {
        mealArray.push(meal);
        return meal;
      }
    });
    this.setState({ meals: mealArray });
  };
  render() {
    console.log(this.state.meals);
    const { meals } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <header>
            <h1>Our Menu</h1>
            <hr />
          </header>
          <nav>
            <button
              className="btn-all"
              name="allData"
              onClick={this.handleClick}
            >
              All
            </button>
            <button
              className="btn-breakfast"
              name="breakfast"
              onClick={this.handleClick}
            >
              Breakfast
            </button>
            <button
              className="btn-lunch"
              name="lunch"
              onClick={this.handleClick}
            >
              Lunch
            </button>
            <button
              className="btn-shakes"
              name="shakes"
              onClick={this.handleClick}
            >
              Shakes
            </button>
          </nav>
          <main>
            {meals.map((el) => {
              return (
                <>
                  <div className="card" key={el.id}>
                    <img src={el.img} alt="food-image" className="image" />
                    <div className="description">
                      <div className="title">
                        <h3>{el.title}</h3>
                        <h3>{el.price}</h3>
                      </div>
                      <p className="dots"></p>
                      <p>{el.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </main>
        </div>
      </React.Fragment>
    );
  }
}
