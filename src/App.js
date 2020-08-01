import React from 'react';
import logo from './logo.svg';
import './App.css';

class Tabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    }
  }
  
  select = (i) => {
    let _this = this;
    return function() {
      _this.setState({
        active: i
      });
    }
  }
  
  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i%2 === 0) {
        let active = this.state.active === i ? 'active' : '';
        return <a onClick={this.select(i)} className={`${active} tab`}>{item}</a>;
      }
    });
  }
  
  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i-1 === this.state.active) {
        return <div className='content'>{item}</div>;
      } else {
        return;
      }
    });
  }
  
  render() {
    return (
      <div className="tabs">
        {this.renderTabs()}
        {this.renderContent()}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <main>
        <div id = "header"  >
          <h1>
            <img src = 'https://www.queen.co.kr/news/photo/201904/310834_49716_1349.jpg' 
            alt = 'logo'/>
          </h1>
        </div>
        <Tabs>
          One
          <span>
            Well here's a nested Tabs element.
            <Tabs>
              One
              <span>One</span>
              Two
              <span>Two</span>
            </Tabs>
          </span>
          Two
          <span>Two thing</span>
          Three
          <span>Three thing</span>
        </Tabs>
      </main>
    );
  }
}

//React.render(<App/>, document.getElementById('app'));

export default App;
