import React, { Component } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';

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
    const { title, content} = this.props;
    const { isOpen } = this.state;

    return (
      <div className="accordion-item">
        <div className="accordion-header" onClick={this.toggleAccordion}>
          <h3 style={{margin: '5px 0', cursor: 'pointer'}}>
            {title}
            <RiArrowDownSFill style={{ marginLeft: 'auto', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </h3>
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