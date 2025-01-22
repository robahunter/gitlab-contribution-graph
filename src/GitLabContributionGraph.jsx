import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Calendar from 'react-calendar';
import axios from 'axios';
import './GitLabContributionGraph.css';

const GitLabContributionGraph = ({ username, token, highlightColor = '#00aaff', onError }) => {
  const [markedDates, setMarkedDates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch contributions from GitLab API using paginated data
  useEffect(() => {
    const fetchContributions = async () => {
      const url = `https://gitlab.com/api/v4/users/${username}/events`;
      let allEvents = [];
      let page = 1;
      const pageSize = 100;
      const maxPages = 5; // Limit the number of pages to reduce large data fetching
      const fetchPromises = [];

      try {
        setLoading(true); // Start loading state
        setError(null); // Reset error

        // Fetch data concurrently for multiple pages (up to maxPages)
        for (let p = 1; p <= maxPages; p++) {
          fetchPromises.push(
            axios.get(url, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              params: {
                page: p,  // Page number
                per_page: pageSize,  // Number of results per page
              },
            })
          );
        }

        const responses = await Promise.all(fetchPromises); // Fetch all pages concurrently

        // Combine all fetched events
        responses.forEach((response) => {
          if (response.data.length > 0) {
            allEvents = [...allEvents, ...response.data];
          }
        });

        // Extract dates and count contributions for each day
        const dateCounts = allEvents.reduce((acc, event) => {
          const date = new Date(event.created_at).toLocaleDateString('en-CA');
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        setMarkedDates(dateCounts); // Set the state with the processed dates
      } catch (error) {
        console.error('Error fetching GitLab data:', error);
        setError('Error fetching contributions.');
      } finally {
        setLoading(false); // End loading state
      }
    };

    if (username) {
      fetchContributions();
    }
  }, [username, token]);

  // Custom tile class to apply styles based on contribution count
  const tileClassName = ({ date }) => {
    const dateString = date.toLocaleDateString('en-CA');
    const contributionCount = markedDates[dateString] || 0;

    if (contributionCount > 0) {
      return `highlight ${contributionCount > 5 ? 'high-contribution' : contributionCount > 2 ? 'medium-contribution' : 'low-contribution'}`;
    }
    return '';
  };

  // Display error message if any
  if (error) {
    return <div>{error}</div>;
  }

  // Loading state
  if (loading) return <div className="loading">Loading contributions...</div>;

  return (
    <div className="contribution-container">
      <header className="contribution-header">
        <h1>{username}'s GitLab Contributions</h1>
        <p>Visualize your GitLab activity in a calendar!</p>
      </header>

      <div className="calendar-wrapper">
        <Calendar
          tileClassName={tileClassName}
          tileContent={({ date }) => {
            const dateString = date.toLocaleDateString('en-CA');
            const contributionCount = markedDates[dateString] || 0;
            return contributionCount > 0 ? (
              <div className="tooltip">
                {contributionCount} contributions
              </div>
            ) : null;
          }}
          prev2Label={null} // Disable double arrows for the previous month
          next2Label={null} // Disable double arrows for the next month
        />
      </div>

      <style>{`
        .contribution-container {
          padding: 40px 20px;
          max-width: 800px;
          margin: 40px auto;
          background: white;
          border-radius: 15px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          font-family: 'Roboto', sans-serif;
          text-align: center;
        }

        .contribution-header {
          background: grey;
          padding: 25px;
          border-radius: 15px;
          color: #fff;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          font-family: 'Poppins', sans-serif;
        }

        .contribution-header h1 {
          font-size: 2.5rem;
          margin: 0;
        }

        .contribution-header p {
          font-size: 1.1rem;
          margin: 10px 0 0;
          font-weight: 400;
        }

        .calendar-wrapper {
          margin-top: 30px;
          position: relative;
        }

        .react-calendar {
          width: 100%;
          max-width: 100%;
          border: none;
          border-radius: 15px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .react-calendar__tile {
          border-radius: 12px;
          transition: transform 0.3s ease, background-color 0.3s ease;
          height: 50px;
          font-size: 14px;
          color: #333;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .react-calendar__tile:hover {
          transform: scale(1.1);
          background-color: rgba(0, 123, 255, 0.1);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .highlight {
          background-color: ${highlightColor};
          color: white;
          border-radius: 50%;
          box-shadow: 0px 4px 10px ${highlightColor};
          transform: scale(1.2);
        }

        .high-contribution {
          background-color: #ff9800; /* High contribution: orange */
        }

        .medium-contribution {
          background-color: #4caf50; /* Medium contribution: green */
        }

        .low-contribution {
          background-color: #cce5ff; /* Low contribution: light blue */
        }

        .tooltip {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 8px 12px;
          font-size: 12px;
          border-radius: 5px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        }

        .loading {
          font-size: 18px;
          color: #333;
          padding: 20px;
        }

        /* Style the calendar navigation buttons */
        .react-calendar__navigation button {
          background-color: transparent;
          border: none;
          color: #444;
          font-size: 1.2rem;
          font-weight: bold;
          transition: color 0.3s ease;
        }

        .react-calendar__navigation button:hover {
          color: ${highlightColor};
        }
      `}</style>
    </div>
  );
};

GitLabContributionGraph.propTypes = {
  username: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  highlightColor: PropTypes.string,
  onError: PropTypes.func,
};

export default GitLabContributionGraph;
