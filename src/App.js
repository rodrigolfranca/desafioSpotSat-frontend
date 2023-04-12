import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import MapPage from './pages/MapPage.jsx';
import { GlobalStyle } from './style/style.js';
import { PointsProvider } from './contexts/PointsContext.jsx';
import { PolygonsProvider } from './contexts/PolygonsContext.jsx';

function App() {
  return (
    <>
      <PointsProvider><PolygonsProvider>
        <GlobalStyle />
          <Router>
                <Routes>
                       <Route path ='/'
                              element={<LoginPage />}
                       />
                       <Route path ='/map'
                              element={<MapPage />}
                      />                     
                </Routes>
        </Router>
      </PolygonsProvider></PointsProvider>
    </>
  );
}

export default App;
