import Article from '../article/Article';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Nav from '../nav/Nav';

import './App.css';

function App(props) {
  let {title, slogan, navigation, db, txt} = props;
  return (
    <div className="App">
      <Header title={title} slogan={slogan}  />
      <Nav navigation={navigation} />
      <Article db={db} />
      <Footer copyright={txt} />
    </div>
  );
}

export default App;
