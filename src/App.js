import React, { useState } from 'react';
import './App.css';
import IconCard from './components/IconCard';
import UnderConstruction from './components/UnderConstruction';
import { WeightIcon, BlogIcon, ReviewIcon, InstagramIcon, LinkedInIcon } from './components/Icons';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleIconClick = (type) => {
    if (type === 'weight') {
      window.location.href = 'https://weight.varundhiman.com';
    } else {
      setCurrentPage(type);
    }
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  const iconData = [
    {
      type: 'weight',
      icon: <WeightIcon />,
      title: 'Weight',
      description: 'Track your fitness journey',
      ariaLabel: 'Weight Tracker'
    },
    {
      type: 'blog',
      icon: <BlogIcon />,
      title: 'Blog',
      description: 'Read my thoughts and insights',
      ariaLabel: 'Blog'
    },
    {
      type: 'review',
      icon: <ReviewIcon />,
      title: 'Reviews',
      description: 'Discover my recommendations',
      ariaLabel: 'Recommendations'
    }
  ];

  if (currentPage === 'blog') {
    return <UnderConstruction title="Blog" onBack={handleBackToHome} />;
  }

  if (currentPage === 'review') {
    return <UnderConstruction title="Reviews" onBack={handleBackToHome} />;
  }

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
              onClick={() => handleIconClick(item.type)}
              icon={item.icon}
              title={item.title}
              description={item.description}
              ariaLabel={item.ariaLabel}
            />
          ))}
        </main>
        
        <footer className="social-media">
          <div className="social-links">
            <a 
              href="https://www.instagram.com/varundhiman_insta/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram"
              aria-label="Follow me on Instagram"
            >
              <InstagramIcon />
            </a>
            <a 
              href="https://www.linkedin.com/in/varun-dhiman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
              aria-label="Connect with me on LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;