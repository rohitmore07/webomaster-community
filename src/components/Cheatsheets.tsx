import React from 'react';
import { Book } from 'lucide-react';

const cheatsheets = [
  {
    category: 'Programming Languages',
    sheets: [
      { title: 'JavaScript ES6+', url: 'https://quickref.me/es6.html' },
      { title: 'Python 3', url: 'https://www.geeksforgeeks.org/python-cheat-sheet/' },
      { title: 'Java Fundamentals', url: 'https://quickref.me/java.html' },
      { title: 'TypeScript', url: 'https://www.typescriptlang.org/cheatsheets/' },
    ],
  },
  {
    category: 'Web Development',
    sheets: [
      { title: 'React Hooks', url: 'https://assets-global.website-files.com/60798d9b0b61160814b3d8c3/62adc137946db2dbb8e23d30_React%20hooks.pdf' },
      { title: 'CSS Flexbox & Grid', url: 'https://www.codecademy.com/learn/learn-css-flexbox-and-grid/modules/css-grid/cheatsheet' },
      { title: 'HTML5 Elements', url: 'https://html.com/blog/html-5-cheat-sheets/' },
      { title: 'Git Commands', url: 'https://education.github.com/git-cheat-sheet-education.pdf' },
    ],
  },
  {
    category: 'Database',
    sheets: [
      { title: 'SQL Commands', url: '#' },
      { title: 'MongoDB Operations', url: '#' },
      { title: 'Redis Commands', url: '#' },
      { title: 'PostgreSQL', url: '#' },
    ],
  },
];

function Cheatsheets() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white">Quick Reference Cheatsheets</h2>
        <p className="mt-2 text-white">Essential commands and syntax at your fingertips</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cheatsheets.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
            <div className="space-y-3">
              {category.sheets.map((sheet, sheetIndex) => (
                <a
                  key={sheetIndex}
                  href={sheet.url}
                  className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  <Book className="w-5 h-5 text-indigo-600" />
                  <span className="ml-3 text-gray-700">{sheet.title}</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cheatsheets;