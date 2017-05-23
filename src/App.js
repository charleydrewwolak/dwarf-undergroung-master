import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import Article from './Article'
import Add from './Add'
import Footer from './Footer'
import OtherArticles from './OtherArticles'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <main className="expanded row">
          <Article />
          <aside className="large-4 medium-12 columns">
            <Add />
          </aside>
          <OtherArticles />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
