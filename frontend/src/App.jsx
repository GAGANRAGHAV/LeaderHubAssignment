import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatInterface from './Chat';
import Previous from './Previous';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation (Optional) */}
        <nav className="p-4 bg-gray-200">
          <a href="/" className="mr-4">Home</a>
          <a href="/previous">Saved Ideas</a>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<ChatInterface/>} />
          <Route path="/previous" element={<Previous/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
