import React from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';
class Forks extends React.Component {
  constructor(props) {
    super(props);
    subscribeToTimer((err, forks) => this.setState({
      forks
    }));
  }
  state = {
    forks: []
  };
  render() {
    if (this.state.forks.length === 0) {
      return <div>
        <h1>Идет прогрев при первом запуске сервера, либо вилок нет</h1>
      </div>
    } else {
      return React.createElement('ul', null,
          this.state.forks.map((item, i) =>
              React.createElement('li', {key: i},
                  React.createElement('table', null,
                      React.createElement('tr', null,
                          React.createElement('td', null,
                              React.createElement('tr', null, item.discipline)
                          ),
                          React.createElement('td', null,
                              React.createElement('tr', null, `${item.profit}%`),
                              React.createElement('tr', null, ((new Date().getTime() - item.date) / 1000).toFixed(0) + ' sec')
                          ),
                          React.createElement('td', null,
                              React.createElement('tr', null, item.initiator1.platform + `     [${item.initiator1.triggered}]`),
                              React.createElement('tr', null, item.initiator2.platform + `     [${item.initiator2.triggered}]`)
                          ),
                          React.createElement('td', null,
                              React.createElement('tr', null, item.initiator1.koef_value),
                              React.createElement('tr', null, item.initiator2.koef_value)
                          ),
                          React.createElement('td', null,
                              React.createElement('tr', null, `${item.initiator1.koef}(${item.initiator1.target})`),
                              React.createElement('tr', null, `${item.initiator2.koef}(${item.initiator2.target})`)
                          ),
                          React.createElement('td', null,
                              React.createElement('tr', null, `${item.initiator1.team_1} vs ${item.initiator1.team_2}`),
                              React.createElement('tr', null, `${item.initiator2.team_1} vs ${item.initiator2.team_2}`)
                          ),
                          React.createElement('td', null,
                              React.createElement('tr', null, React.createElement('a', {'href': item.initiator1.href, 'target':'_blank'}, 'link')),
                              React.createElement('tr', null, React.createElement('a', {'href': item.initiator2.href, 'target':'_blank'}, 'link'))
                          )
                      )
                  )
              )
          )
      )
    }
  }
}

export default Forks;
