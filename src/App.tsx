import "./App.css";
import Row from "./components/Row";
import { requests } from "./api/request";
import Banner from "./components/Banner ";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGUNALS"
        fetchUrl={requests.feachNetflixOriginals}
        isLargeRow
      />
      <Row title="今人気の作品" fetchUrl={requests.feactPopularMovies} />
      <Row title="今のトレンド" fetchUrl={requests.feachTrending} />
      <Row title="公開中の映画" fetchUrl={requests.feactNowPlayMovies} />
      <Row title="近日公開予定の映画" fetchUrl={requests.feactUpComingMovies} />
      <Row title="コメディ映画" fetchUrl={requests.feactComedyMovies} />
      <Row title="恋愛映画" fetchUrl={requests.feactRomanceMovies} />
      <Row title="ドキュメンタリー" fetchUrl={requests.feactDocumentMovies} />
    </div>
  );
}

export default App;
