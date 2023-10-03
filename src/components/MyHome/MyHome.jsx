import "./myHome.css";
import React from "react";
const text1 = "Ready to make your project stand out from the crowd? ";
const text2 = "Let's work together to bring your ideas to life.";
const letters1 = text1.split("");
const letters2 = text2.split("");
class MyHome extends React.Component {
  state = {
    currentText: "Hi, I'm Frank ",
    newText: "Full-stack Developer",
    displayText: "",
    isTyping: true,
    index: 0,
    toggle: false,
  };

  componentDidMount() {
    this.handleAnimation();
  }

  handleAnimation = () => {
    if (this.state.isTyping) {
      this.typeText();
    } else {
      this.deleteText();
    }
  };

  typeText = () => {
    const { currentText, newText, toggle, index } = this.state;
    const text = toggle ? newText : currentText;

    if (index < text.length) {
      this.setState(
        (prevState) => ({
          displayText: prevState.displayText + text[prevState.index],
          index: prevState.index + 1,
        }),
        () => {
          setTimeout(this.handleAnimation, 200);
        }
      );
    } else {
      this.setState(
        {
          isTyping: false,
          index: text.length - 1,
        },
        () => {
          setTimeout(this.handleAnimation, 2000);
        }
      );
    }
  };

  deleteText = () => {
    if (this.state.index >= 0) {
      this.setState(
        (prevState) => ({
          displayText: prevState.displayText.slice(0, -1),
          index: prevState.index - 1,
        }),
        () => {
          setTimeout(this.handleAnimation, 100);
        }
      );
    } else {
      this.setState(
        (prevState) => ({
          isTyping: true,
          toggle: !prevState.toggle,
          index: 0,
        }),
        this.handleAnimation
      );
    }
  };

  render() {
    return (
      <div className="home">
        <div className="welcome-home">
          <span>{this.state.displayText}</span>
          <span className="cursor">|</span>
        </div>
      </div>
    );
  }
}

export default MyHome;
