import React, { useState } from 'react';
import { Send } from 'lucide-react';

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hi! I\'m Webomate, your coding assistant. How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { type: 'user', content: input }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: 'I\'m here to help! While I\'m still learning, I can assist you with finding resources, explaining concepts, or directing you to the right documentation.',
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t p-4">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-800"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-black text-white rounded-lg hover:bg-blue-900 transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;