
import './App.css';

//Import components
import {Sidebar}  from './Sidebar';
import Feed from './Feed';
import  Widgets from './Widgets';


function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />
      {/* Widgets */}
      <Widgets/>
    </div>
  );
}

export default App;
