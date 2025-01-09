import { useState } from 'react';
import { Send } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';  // Import react-markdown

const ChatInterface = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse(''); // Clear the previous response

    try {
      // Initialize Google Generative AI
      const genAI = new GoogleGenerativeAI('AIzaSyCOSX_kqyRGqdjaCzA4gc_2LzxIigPAkC0'); // Replace with your valid API key
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

      // Make the API call with the prompt
      const result = await model.generateContent(prompt);
      const aiResponse = await result.response.text(); // Extract the AI-generated response

      setResponse(aiResponse);

      // Send the prompt and AI response to your server (optional)
      await axios.post('http://localhost:5000/api/prompts', { prompt, response: aiResponse });

    } catch (error) {
      console.error('Error generating content:', error);
      setResponse('An error occurred while generating the response. Please try again.');
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">AI Idea Generator</h1>
        <p className="text-gray-600">Enter your prompt below to get a response</p>
      </div>

      {/* Response Display */}
      <div className="min-h-32 p-4 bg-gray-50 rounded-lg border">
        {response ? (
          <div className="text-gray-800">
            {/* Render Markdown as React components */}
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        ) : (
          <p className="text-gray-400 italic">AI response will appear here...</p>
        )}
        {isLoading && (
          <div className="flex items-center justify-center mt-4">
            <div className="animate-spin h-5 w-5 border-2 border-blue-500 rounded-full border-t-transparent"></div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading || !prompt.trim()}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
        >
          <Send size={16} />
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInterface;
