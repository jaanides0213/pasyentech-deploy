import React, { Component } from 'react';

class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleAccordion = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { title, content } = this.props;
    const { isOpen } = this.state;

    return (
      <div className="accordion-item">
        <div className="accordion-header" onClick={this.toggleAccordion}>
          {title}
        </div>
        {isOpen && (
          <div className="accordion-content">
            <div>{content}</div>
          </div>
        )}
      </div>
    );
  }
}
export default Accordion;