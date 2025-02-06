import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Clock, ExternalLink, AlertCircle, Link } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  url: string;
  time: number;
  score: number;
  by: string;
}

function News() {
  const [news, setNews] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch top stories IDs
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
        const storyIds = response.data.slice(0, 20); // Get top 20 stories

        // Fetch details for each story
        const storyPromises = storyIds.map((id: number) =>
          axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        );
        
        const stories = await Promise.all(storyPromises);
        const storyData = stories
          .map(story => story.data)
          .filter(story => story.type === 'story' && story.url); // Only stories with URLs

        setNews(storyData);
        setLoading(false);
      } catch (err) {
        setError('Unable to fetch news at the moment');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      const minutes = Math.floor(diff / (1000 * 60));
      return minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''} ago` : 'Just now';
    }
  };

  const getDomain = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      return domain;
    } catch {
      return '';
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Oops!</h3>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Tech News</h2>
        <p className="mt-2 text-gray-600">Top stories from the tech community</p>
      </div>

      <div className="space-y-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2 flex-1 mr-4">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded">
                    {getDomain(item.url)}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.score} points
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  <a 
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 transition-colors"
                  >
                    {item.title}
                  </a>
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>by {item.by}</span>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatTime(item.time)}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <a
                  href={item.url}
                  className="text-indigo-600 hover:text-indigo-700 p-2 hover:bg-indigo-50 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit website"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href={`https://news.ycombinator.com/item?id=${item.id}`}
                  className="text-indigo-600 hover:text-indigo-700 p-2 hover:bg-indigo-50 rounded-full transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View discussion"
                >
                  <Link className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;