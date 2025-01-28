import React from 'react';
import { useState, useEffect } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import axios, { AxiosError } from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import './GitLabContributionGraph.css';

interface ContributionData {
  [date: string]: number;
}

interface HeatmapValue {
  date: string;
  count: number;
}

interface GitLabContributionGraphProps {
  username: string;
  token: string;
  highlightColor?: string;
  onError?: (error: Error) => void;
}

const GitLabContributionGraph: React.FC<GitLabContributionGraphProps> = ({
  username,
  token,
  highlightColor = '#00aaff',
  onError
}) => {
  const [markedDates, setMarkedDates] = useState<ContributionData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Calculate dates inside the component
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setFullYear(endDate.getFullYear() - 1);

  // Generate heatmap data
  const heatmapData: HeatmapValue[] = Object.entries(markedDates).map(([date, count]) => ({
    date,
    count: count as number
  }));

  // Add missing classForValue function
  const getClassForValue = (value: HeatmapValue | null): string => {
    if (!value || !value.count) return 'low-contribution';
    if (value.count > 5) return 'high-contribution';
    if (value.count > 2) return 'medium-contribution';
    return 'low-contribution';
  };

  useEffect(() => {
    let isMounted = true;
    const fetchContributions = async () => {
      const url = `https://gitlab.com/api/v4/users/${username}/events`;
      let allEvents: any[] = [];
      const maxPages = 5;
      const pageSize = 100;

      try {
        setLoading(true);
        setError(null);

        const fetchPromises = Array.from({ length: maxPages }, (_, i) => 
          axios.get(url, {
            headers: { Authorization: `Bearer ${token}` },
            params: { page: i + 1, per_page: pageSize }
          })
        );

        const responses = await Promise.all(fetchPromises);
        responses.forEach(response => {
          if (response.data.length > 0) {
            allEvents = [...allEvents, ...response.data];
          }
        });

        const dateCounts = allEvents.reduce((acc: ContributionData, event) => {
          const date = new Date(event.created_at).toISOString().split('T')[0];
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        if (isMounted) setMarkedDates(dateCounts);
      } catch (err) {
        const error = err as AxiosError;
        console.error('Error fetching GitLab data:', error);
        if (isMounted) {
          setError('Error fetching contributions.');
          onError?.(error);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (username) fetchContributions();

    return () => { isMounted = false; };
  }, [username, token, onError]);

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div className="loading">Loading contributions...</div>;
  }

  return (
    <div className="contribution-container">
      <header className="contribution-header">
        <div>
          <FontAwesomeIcon icon={faGitlab} size="2x" color="#fc6d26" />
        </div>
        <h1>{username}'s GitLab Contributions</h1>
      </header>

      <div className="calendar-wrapper">
        <CalendarHeatmap
          startDate={startDate}
          endDate={endDate}
          values={heatmapData}
          classForValue={getClassForValue}
          showWeekdayLabels
          tooltipDataAttrs={(value: HeatmapValue) => {
            if (!value?.date) {
              return { 'data-tooltip-id': 'heatmap-tooltip', 'data-tooltip-content': 'No contributions' };
            }
            return {
              'data-tooltip-id': 'heatmap-tooltip',
              'data-tooltip-content': `${value.date}: ${value.count} contribution(s)`
            };
          }}
        />
        <ReactTooltip id="heatmap-tooltip" place="top" />
      </div>
    </div>
  );
};

export default GitLabContributionGraph;