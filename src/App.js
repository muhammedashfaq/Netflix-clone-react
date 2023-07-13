import { Row } from './Row';
import './App.css';
import requests from './requests';
import Banner from './Banner'
import Nav from './nav'
import {rowsData} from './data'

function App() {
  return (
    <div className="App">

      <Nav />
      <Banner />

      {rowsData.map(({ title, fetchUrl, isLargeRow }) => (
        <Row key={title} title={title} fetchUrls={fetchUrl} isLargeRow={isLargeRow} />
      ))}
    </div>
  );
}

export default App;
