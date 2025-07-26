import React from 'react';
import './App.css';
import IconCard from './components/IconCard';
import { WeightIcon, BlogIcon, ReviewIcon } from './components/Icons';

function App() {
  const iconData = [
    {
      href: 'https://weight.varundhiman.com',
      icon: <WeightIcon />,
      title: 'Weight',
      description: 'Track your fitness journey',
      ariaLabel: 'Weight Tracker'
    },
    {
      href: 'https://blog.varundhiman.com',
      icon: <BlogIcon />,
      title: 'Blog',
      description: 'Read my thoughts and insights',
      ariaLabel: 'Blog'
    },
    {
      href: 'https://review.varundhiman.com',
      icon: <ReviewIcon />,
      title: 'Reviews',
      description: 'Discover my recommendations',
      ariaLabel: 'Recommendations'
    }
  ];

  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Varun Dhiman</h1>
        </header>
        
        <main className="icons-grid">
          {iconData.map((item, index) => (
            <IconCard
              key={index}
              href={item.href}
              icon={item.icon}
              title={item.title}
              description={item.description}
              ariaLabel={item.ariaLabel}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;