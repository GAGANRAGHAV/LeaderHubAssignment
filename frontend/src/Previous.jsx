import  { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';  // Import react-markdown


const PromptList = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await axios.get('https://leaderhubassignment.onrender.com/api/prompts'); // Use Axios for the request
        setPrompts(response.data); // Axios automatically parses JSON
      } catch (err) {
        setError(err.response?.data?.error || 'Error fetching prompts');
      } finally {
        setLoading(false);
      }
    };

    fetchPrompts();
  }, []);

  if (loading) {
    return <div>Loading prompts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">AI Prompts and Responses</h1>
      {prompts.length > 0 ? (
        prompts.map((prompt) => (
          <div
            key={prompt._id}
            className="p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <p className="font-semibold text-gray-800">Prompt:</p>
            <p className="text-gray-700">{prompt.prompt}</p>
            <hr className="my-2" />
            <p className="font-semibold text-gray-800">Response:</p>
             <div className="text-gray-800">
                        {/* Render Markdown as React components */}
                        <ReactMarkdown>{prompt.response}</ReactMarkdown>
                      </div>
          </div>
        ))
      ) : (
        <div>No prompts found.</div>
      )}
    </div>
  );
};

export default PromptList;
