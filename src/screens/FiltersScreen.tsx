import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Chip } from '../components/Chip';
import { Checkbox } from '../components/Checkbox';
import { SearchInput } from '../components/SearchInput';
import '../styles/FiltersScreen.css';

type TabType = 'place-hour' | 'basics' | 'preferences' | 'requirements';

interface FiltersState {
  date: string;
  nearMe: boolean;
  now: boolean;
  location: string;
  transportation: string[];
  timeOfDay: string[];
  duration: string[];
  activity: string[];
  typeOfPlace: string[];
  cuisine: string[];
  drinkType: string[];
  crowd: number;
  style: string[];
  mood: string[];
  space: string;
  music: string;
  decoration: string;
  dressCode: string[];
  specialNeeds: string[];
}

export const FiltersScreen: React.FC<{
  onGeneratePlan: () => void;
  onShowMap: () => void;
}> = ({ onGeneratePlan, onShowMap }) => {
  const [activeTab, setActiveTab] = useState<TabType>('place-hour');
  const [filters, setFilters] = useState<FiltersState>({
    date: '12/06/2026',
    nearMe: false,
    now: false,
    location: '',
    transportation: [],
    timeOfDay: [],
    duration: [],
    activity: [],
    typeOfPlace: [],
    cuisine: [],
    drinkType: [],
    crowd: 50,
    style: [],
    mood: [],
    space: 'indoor',
    music: 'Jazz',
    decoration: 'Modern',
    dressCode: [],
    specialNeeds: [],
  });

  const toggleArray = (key: keyof FiltersState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: (prev[key] as string[]).includes(value)
        ? (prev[key] as string[]).filter((item) => item !== value)
        : [...(prev[key] as string[]), value],
    }));
  };

  return (
    <div className="filters-screen">
      <div className="filters-header">
        <button className="back-btn">←</button>
        <h1>Filters</h1>
      </div>

      <div className="filters-container">
        {/* Sidebar Navigation */}
        <aside className="filters-sidebar">
          <button
            className={`tab-btn ${activeTab === 'place-hour' ? 'active' : ''}`}
            onClick={() => setActiveTab('place-hour')}
          >
            PLACE/HOUR
          </button>
          <button
            className={`tab-btn ${activeTab === 'basics' ? 'active' : ''}`}
            onClick={() => setActiveTab('basics')}
          >
            BASICS
          </button>
          <button
            className={`tab-btn ${activeTab === 'preferences' ? 'active' : ''}`}
            onClick={() => setActiveTab('preferences')}
          >
            PREFERENCES
          </button>
          <button
            className={`tab-btn ${activeTab === 'requirements' ? 'active' : ''}`}
            onClick={() => setActiveTab('requirements')}
          >
            REQUIREMENTS
          </button>
        </aside>

        {/* Tab Content */}
        <main className="filters-content">
          {activeTab === 'place-hour' && (
            <div className="tab-content">
              {/* Date Selection */}
              <div className="filter-section">
                <div className="date-card">
                  <span className="date-label">DATE SELECTION</span>
                  <div className="date-info">
                    <span className="calendar-icon">📅</span>
                    <div>
                      <p className="date-title">Selected Date:</p>
                      <p className="date-value">{filters.date}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Near Me / Now */}
              <div className="filter-section">
                <div className="quick-access">
                  <Chip
                    label="📍 Near Me"
                    selected={filters.nearMe}
                    onClick={() => setFilters((prev) => ({ ...prev, nearMe: !prev.nearMe }))}
                    variant="gradient"
                  />
                  <Chip
                    label="⏱ Now"
                    selected={filters.now}
                    onClick={() => setFilters((prev) => ({ ...prev, now: !prev.now }))}
                    variant="gradient"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="filter-section">
                <h3 className="section-title">LOCATION</h3>
                <SearchInput
                  placeholder="Search city or area..."
                  value={filters.location}
                  onChange={(value) => setFilters((prev) => ({ ...prev, location: value }))}
                />
              </div>

              {/* Transportation */}
              <div className="filter-section">
                <h3 className="section-title">TRANSPORTATION</h3>
                <Checkbox
                  label="Walking distance"
                  checked={filters.transportation.includes('walking')}
                  onChange={() => toggleArray('transportation', 'walking')}
                />
                <Checkbox
                  label="Car"
                  checked={filters.transportation.includes('car')}
                  onChange={() => toggleArray('transportation', 'car')}
                />
                <Checkbox
                  label="Metro"
                  checked={filters.transportation.includes('metro')}
                  onChange={() => toggleArray('transportation', 'metro')}
                />
              </div>

              {/* Time of Day */}
              <div className="filter-section">
                <h3 className="section-title">TIME OF DAY</h3>
                <Checkbox
                  label="Morning"
                  checked={filters.timeOfDay.includes('morning')}
                  onChange={() => toggleArray('timeOfDay', 'morning')}
                />
                <Checkbox
                  label="Afternoon"
                  checked={filters.timeOfDay.includes('afternoon')}
                  onChange={() => toggleArray('timeOfDay', 'afternoon')}
                />
                <Checkbox
                  label="Early night"
                  checked={filters.timeOfDay.includes('early-night')}
                  onChange={() => toggleArray('timeOfDay', 'early-night')}
                />
                <Checkbox
                  label="Late night"
                  checked={filters.timeOfDay.includes('late-night')}
                  onChange={() => toggleArray('timeOfDay', 'late-night')}
                />
              </div>

              {/* Duration */}
              <div className="filter-section">
                <h3 className="section-title">DURATION</h3>
                <Checkbox
                  label="1–2h"
                  checked={filters.duration.includes('1-2h')}
                  onChange={() => toggleArray('duration', '1-2h')}
                />
                <Checkbox
                  label="3–5h"
                  checked={filters.duration.includes('3-5h')}
                  onChange={() => toggleArray('duration', '3-5h')}
                />
              </div>
            </div>
          )}

          {activeTab === 'basics' && (
            <div className="tab-content">
              {/* Activity */}
              <div className="filter-section">
                <h3 className="section-title">ACTIVITY</h3>
                <div className="checkbox-group">
                  <Checkbox
                    label="Food"
                    checked={filters.activity.includes('food')}
                    onChange={() => toggleArray('activity', 'food')}
                  />
                  <Checkbox
                    label="Drink"
                    checked={filters.activity.includes('drink')}
                    onChange={() => toggleArray('activity', 'drink')}
                  />
                  <Checkbox
                    label="Dance"
                    checked={filters.activity.includes('dance')}
                    onChange={() => toggleArray('activity', 'dance')}
                  />
                </div>
              </div>

              {/* Type of Place */}
              <div className="filter-section">
                <h3 className="section-title">TYPE OF PLACE</h3>
                <div className="chip-group">
                  {['Wine Bar', 'Restaurant', 'Taverna', 'Bar', 'Club', 'Brewery'].map((place) => (
                    <Chip
                      key={place}
                      label={place}
                      selected={filters.typeOfPlace.includes(place)}
                      onClick={() => toggleArray('typeOfPlace', place)}
                    />
                  ))}
                </div>
              </div>

              {/* Cuisine */}
              <div className="filter-section">
                <h3 className="section-title">CUISINE</h3>
                <div className="chip-group">
                  {['Italian', 'Pizza', 'Burger', 'Greek', 'Sushi'].map((cuisine) => (
                    <Chip
                      key={cuisine}
                      label={cuisine}
                      selected={filters.cuisine.includes(cuisine)}
                      onClick={() => toggleArray('cuisine', cuisine)}
                    />
                  ))}
                </div>
              </div>

              {/* Drink Type */}
              <div className="filter-section">
                <h3 className="section-title">DRINK TYPE</h3>
                <div className="chip-group">
                  {['Wine', 'Coffee', 'Cocktail', 'Beer', 'Spirits'].map((drink) => (
                    <Chip
                      key={drink}
                      label={drink}
                      selected={filters.drinkType.includes(drink)}
                      onClick={() => toggleArray('drinkType', drink)}
                    />
                  ))}
                </div>
              </div>

              {/* Crowd */}
              <div className="filter-section">
                <h3 className="section-title">CROWD</h3>
                <div className="slider-wrapper">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.crowd}
                    onChange={(e) => setFilters((prev) => ({ ...prev, crowd: parseInt(e.target.value) }))}
                    className="crowd-slider"
                  />
                  <div className="slider-labels">
                    <span>QUIET</span>
                    <span>PACKED</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="tab-content">
              {/* Style */}
              <div className="filter-section">
                <h3 className="section-title">STYLE</h3>
                <div className="chip-group">
                  {['Casual', 'Glam', 'Youthful', 'Island Vibes', 'Cozy'].map((style) => (
                    <Chip
                      key={style}
                      label={style}
                      selected={filters.style.includes(style)}
                      onClick={() => toggleArray('style', style)}
                    />
                  ))}
                </div>
              </div>

              {/* My Mood */}
              <div className="filter-section">
                <h3 className="section-title">MY MOOD</h3>
                <div className="chip-group">
                  {['Energetic', 'Social', 'Introvert', 'Party', 'Very Hungry'].map((mood) => (
                    <Chip
                      key={mood}
                      label={mood}
                      selected={filters.mood.includes(mood)}
                      onClick={() => toggleArray('mood', mood)}
                    />
                  ))}
                </div>
              </div>

              {/* Space */}
              <div className="filter-section">
                <h3 className="section-title">SPACE</h3>
                <div className="segmented-control">
                  {['Indoor', 'Outdoor', 'Rooftop'].map((space) => (
                    <button
                      key={space}
                      className={`segment-btn ${filters.space === space.toLowerCase() ? 'active' : ''}`}
                      onClick={() => setFilters((prev) => ({ ...prev, space: space.toLowerCase() }))}
                    >
                      {space}
                    </button>
                  ))}
                </div>
              </div>

              {/* Music */}
              <div className="filter-section">
                <h3 className="section-title">MUSIC</h3>
                <select value={filters.music} className="dropdown">
                  <option>Jazz</option>
                  <option>Classical</option>
                  <option>Electronic</option>
                  <option>Hip-Hop</option>
                </select>
              </div>

              {/* Decoration */}
              <div className="filter-section">
                <h3 className="section-title">DECORATION</h3>
                <select value={filters.decoration} className="dropdown">
                  <option>Modern</option>
                  <option>Vintage</option>
                  <option>Minimalist</option>
                  <option>Bohemian</option>
                </select>
              </div>

              {/* Dress Code */}
              <div className="filter-section">
                <h3 className="section-title">DRESS CODE</h3>
                <Checkbox
                  label="Casual"
                  checked={filters.dressCode.includes('casual')}
                  onChange={() => toggleArray('dressCode', 'casual')}
                />
                <Checkbox
                  label="Smart Casual"
                  checked={filters.dressCode.includes('smart-casual')}
                  onChange={() => toggleArray('dressCode', 'smart-casual')}
                />
                <Checkbox
                  label="Formal"
                  checked={filters.dressCode.includes('formal')}
                  onChange={() => toggleArray('dressCode', 'formal')}
                />
              </div>
            </div>
          )}

          {activeTab === 'requirements' && (
            <div className="tab-content">
              <div className="filter-section">
                <h3 className="section-title">SPECIAL NEEDS</h3>
                <Checkbox
                  label="Pet-friendly"
                  checked={filters.specialNeeds.includes('pet-friendly')}
                  onChange={() => toggleArray('specialNeeds', 'pet-friendly')}
                />
                <Checkbox
                  label="Parking"
                  checked={filters.specialNeeds.includes('parking')}
                  onChange={() => toggleArray('specialNeeds', 'parking')}
                />
                <Checkbox
                  label="High-speed Wi-Fi"
                  checked={filters.specialNeeds.includes('wifi')}
                  onChange={() => toggleArray('specialNeeds', 'wifi')}
                />
                <Checkbox
                  label="Vegan Options"
                  checked={filters.specialNeeds.includes('vegan')}
                  onChange={() => toggleArray('specialNeeds', 'vegan')}
                />
                <Checkbox
                  label="Smoking Area"
                  checked={filters.specialNeeds.includes('smoking')}
                  onChange={() => toggleArray('specialNeeds', 'smoking')}
                />
                <Checkbox
                  label="Accessibility (Wheelchair)"
                  checked={filters.specialNeeds.includes('wheelchair')}
                  onChange={() => toggleArray('specialNeeds', 'wheelchair')}
                />
                <Checkbox
                  label="Child friendly"
                  checked={filters.specialNeeds.includes('child-friendly')}
                  onChange={() => toggleArray('specialNeeds', 'child-friendly')}
                />
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer Actions */}
      <div className="filters-footer">
        <Button variant="outline" size="lg" onClick={onShowMap}>
          Show in a Map
        </Button>
        <Button variant="primary" size="lg" onClick={onGeneratePlan}>
          Generate a Plan
        </Button>
      </div>
    </div>
  );
};
