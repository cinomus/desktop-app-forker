import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Forks from "./App";

// const url = 'ws://172.31.38.5:80/'
// const connection = new WebSocket(url)
// connection.onerror = error => {
//     console.log(`WebSocket error: ${error}`)
// }
// connection.onopen = () => {
//     connection.send('hey')
// }
// connection.onmessage = e => {
//     console.log(e.data)
// }

// setInterval(() => {
//     class Forks2 extends React.Component {
//         render() {
//             console.log(forks2)
//             if (forks2.length === 0) {
//                 return <div>
//                     <h1>Идет прогрев при первом запуске сервера, либо вилок нет</h1>
//                 </div>
//             } else {
//                 return React.createElement('ul', null,
//                     forks2.map((item, i) =>
//                         React.createElement('li', {key: i},
//                             React.createElement('table', null,
//                                 React.createElement('tr', null,
//                                     React.createElement('td', null,
//                                         React.createElement('tr', null, item.discipline)
//                                     ),
//                                     React.createElement('td', null,
//                                         React.createElement('tr', null, `${item.profit}%`),
//                                         React.createElement('tr', null, ((new Date().getTime() - item.date) / 1000).toFixed(0) + ' sec')
//                                     ),
//                                     React.createElement('td', null,
//                                         React.createElement('tr', null, item.initiator1.platform + `     [${item.initiator1.triggered}]`),
//                                         React.createElement('tr', null, item.initiator2.platform + `     [${item.initiator2.triggered}]`)
//                                     ),
//                                     React.createElement('td', null,
//                                         React.createElement('tr', null, item.initiator1.koef_value),
//                                         React.createElement('tr', null, item.initiator2.koef_value)
//                                     ),
//                                     React.createElement('td', null,
//                                         React.createElement('tr', null, `${item.initiator1.koef}(${item.initiator1.target})`),
//                                         React.createElement('tr', null, `${item.initiator2.koef}(${item.initiator2.target})`)
//                                     ),
//                                     React.createElement('td', null,
//                                         React.createElement('tr', null, `${item.initiator1.team_1} vs ${item.initiator1.team_2}`),
//                                         React.createElement('tr', null, `${item.initiator2.team_1} vs ${item.initiator2.team_2}`)
//                                     ),
//                                     React.createElement('td', null,
//                                         React.createElement('tr', null, React.createElement('a', {'href': item.initiator1.href, 'target':'_blank'}, 'link')),
//                                         React.createElement('tr', null, React.createElement('a', {'href': item.initiator2.href, 'target':'_blank'}, 'link'))
//                                     )
//                                 )
//                             )
//                         )
//                     )
//                 )
//             }
//         }
//     }
//
//     ReactDOM.render(
//         <Forks2 />,
//         document.getElementById('root2')
//     );
// }, 1000)
ReactDOM.render(
  <React.StrictMode>
    <Forks />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
