// State Management
const appState = {
  currentScreen: 'home',
  currentStep: 1,
  filters: {
    reason: null,
    area: null,
    distance: null,
    startTime: null,
    duration: null,
    vibe: null,
    clothes: null,
    age: null,
    food: null,
    budget: null,
    locationType: null,
    music: null,
    special: [],
    crowd: null
  },
  screenHistory: ['home']
};

const totalSteps = 13;
const infoContent = {
  reason: {
    title: 'Why are you going out?',
    content: `
      <p>Select the primary reason for your outing:</p>
      <ul>
        <li><strong>Study:</strong> Find quiet venues with good ambiance</li>
        <li><strong>Date:</strong> Romantic spots with intimate settings</li>
        <li><strong>Friends:</strong> Energetic venues for group fun</li>
      </ul>
    `
  },
  area: {
    title: 'Where to go?',
    content: `
      <p>Choose the area that interests you:</p>
      <ul>
        <li><strong>Downtown:</strong> High-energy, busy areas</li>
        <li><strong>Uptown:</strong> Upscale and sophisticated venues</li>
        <li><strong>Beach:</strong> Casual, relaxed atmosphere</li>
        <li><strong>Suburbs:</strong> Laid-back neighborhoods</li>
      </ul>
    `
  },
  distance: {
    title: 'Walking Distance',
    content: `
      <p>How far are you willing to walk or travel?</p>
      <ul>
        <li><strong>15 min:</strong> Very close by</li>
        <li><strong>30 min:</strong> Short walk or drive</li>
        <li><strong>60 min:</strong> Medium distance</li>
        <li><strong>Any:</strong> No distance limit</li>
      </ul>
    `
  },
  time: {
    title: 'When & How Long',
    content: `
      <p>Plan your outing timeline:</p>
      <ul>
        <li>Select your preferred start time</li>
        <li>Choose how many hours you want to spend</li>
        <li>We'll create a full itinerary for you</li>
      </ul>
    `
  },
  vibe: {
    title: 'Vibe & Mood',
    content: `
      <p>What atmosphere are you looking for?</p>
      <ul>
        <li><strong>Chill:</strong> Relaxed and comfortable</li>
        <li><strong>Energetic:</strong> Active and lively</li>
        <li><strong>Romantic:</strong> Intimate and special</li>
        <li><strong>Wild:</strong> Party and celebration</li>
      </ul>
    `
  },
  clothes: {
    title: 'Dress Code',
    content: `
      <p>What will you be wearing?</p>
      <ul>
        <li><strong>Casual:</strong> Jeans and t-shirt</li>
        <li><strong>Smart Casual:</strong> Dress pants and nice top</li>
        <li><strong>Formal:</strong> Suit or elegant dress</li>
        <li><strong>Beach:</strong> Swimwear and light clothing</li>
      </ul>
    `
  },
  age: {
    title: 'Age Group',
    content: `
      <p>Select the age demographic:</p>
      <ul>
        <li><strong>18-25:</strong> Young and vibrant</li>
        <li><strong>25-35:</strong> Young professionals</li>
        <li><strong>35-50:</strong> Established adults</li>
        <li><strong>50+:</strong> Mature and experienced</li>
      </ul>
    `
  },
  food: {
    title: 'Food & Drink Preferences',
    content: `
      <p>What are your dietary preferences?</p>
      <ul>
        <li><strong>Vegetarian:</strong> No meat options</li>
        <li><strong>Seafood:</strong> Fresh fish and sea food</li>
        <li><strong>Meat:</strong> Beef, chicken, pork</li>
        <li><strong>Any:</strong> Open to all options</li>
      </ul>
    `
  },
  budget: {
    title: 'Budget',
    content: `
      <p>What's your spending comfort level?</p>
      <ul>
        <li><strong>$:</strong> Budget-friendly options</li>
        <li><strong>$$:</strong> Moderate pricing</li>
        <li><strong>$$$:</strong> Premium venues</li>
        <li><strong>$$$$:</strong> Luxury experiences</li>
      </ul>
    `
  },
  'location-type': {
    title: 'Indoor or Outdoor',
    content: `
      <p>Do you prefer indoor or outdoor settings?</p>
      <ul>
        <li><strong>Outdoor:</strong> Open air venues</li>
        <li><strong>Indoor:</strong> Enclosed spaces</li>
        <li><strong>Mixed:</strong> Combination of both</li>
      </ul>
    `
  },
  music: {
    title: 'Music Style',
    content: `
      <p>What music do you enjoy?</p>
      <ul>
        <li><strong>Pop:</strong> Popular hits</li>
        <li><strong>Jazz:</strong> Smooth jazz vibes</li>
        <li><strong>Electronic:</strong> EDM and electronic</li>
        <li><strong>Acoustic:</strong> Live acoustic performances</li>
      </ul>
    `
  },
  special: {
    title: 'Special Requirements',
    content: `
      <p>Any special needs? Select all that apply:</p>
      <ul>
        <li><strong>Pet Friendly:</strong> Bring your furry friends</li>
        <li><strong>Parking:</strong> Easy parking available</li>
        <li><strong>Wheelchair:</strong> Accessible facilities</li>
        <li><strong>Quiet:</strong> Peaceful environment</li>
      </ul>
    `
  },
  crowd: {
    title: 'Crowd Level',
    content: `
      <p>How crowded do you want it to be?</p>
      <ul>
        <li><strong>Empty:</strong> Intimate settings</li>
        <li><strong>Moderate:</strong> Some people around</li>
        <li><strong>Busy:</strong> Good energy and people</li>
        <li><strong>Packed:</strong> Full house atmosphere</li>
      </ul>
    `
  }
};

// Screen Navigation
function showScreen(screenName) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenName).classList.add('active');
  appState.currentScreen = screenName;
  appState.screenHistory.push(screenName);
}

function goBack() {
  if (appState.screenHistory.length > 1) {
    appState.screenHistory.pop();
    const previousScreen = appState.screenHistory[appState.screenHistory.length - 1];
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(previousScreen).classList.add('active');
    appState.currentScreen = previousScreen;
  }
}

// Navigation Bar
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    const screenName = item.dataset.screen + '-screen';
    
    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');
    
    // Reset filter flow if going to home
    if (item.dataset.screen === 'home') {
      appState.currentStep = 1;
      appState.screenHistory = ['home'];
    }
    
    showScreen(screenName);
  });
});

// Filter Flow
function startFilterFlow() {
  appState.currentStep = 1;
  showFilterStep(1);
  showScreen('plan-screen');
}

function showFilterStep(step) {
  // Hide all steps
  document.querySelectorAll('.filter-step').forEach(el => el.classList.remove('active'));
  // Show current step
  document.querySelector(`[data-step="${step}"]`).classList.add('active');
  
  // Update progress bar
  const progress = (step / totalSteps) * 100;
  document.getElementById('progress').style.width = progress + '%';
  
  // Update button text
  const nextBtn = document.getElementById('next-btn');
  if (step === totalSteps) {
    nextBtn.textContent = 'See Results';
  } else {
    nextBtn.textContent = 'Next';
  }
  
  appState.currentStep = step;
}

function nextStep() {
  // Get selected option from current step
  const currentStep = document.querySelector(`[data-step="${appState.currentStep}"]`);
  const selectedOption = currentStep.querySelector('.filter-option.selected');
  
  // For multi-select step, just proceed
  const isMultiSelect = currentStep.querySelector('.filter-options.multi-select');
  if (!isMultiSelect && !selectedOption && appState.currentStep !== 4) {
    alert('Please select an option');
    return;
  }
  
  // Save filter values
  if (appState.currentStep === 1 && selectedOption) {
    appState.filters.reason = selectedOption.dataset.value;
  } else if (appState.currentStep === 2 && selectedOption) {
    appState.filters.area = selectedOption.dataset.value;
  } else if (appState.currentStep === 3 && selectedOption) {
    appState.filters.distance = selectedOption.dataset.value;
  } else if (appState.currentStep === 4) {
    const time = document.getElementById('start-time').value;
    const duration = document.getElementById('duration').value;
    if (!time || !duration) {
      alert('Please fill in time and duration');
      return;
    }
    appState.filters.startTime = time;
    appState.filters.duration = duration;
  } else if (appState.currentStep === 5 && selectedOption) {
    appState.filters.vibe = selectedOption.dataset.value;
  } else if (appState.currentStep === 6 && selectedOption) {
    appState.filters.clothes = selectedOption.dataset.value;
  } else if (appState.currentStep === 7 && selectedOption) {
    appState.filters.age = selectedOption.dataset.value;
  } else if (appState.currentStep === 8 && selectedOption) {
    appState.filters.food = selectedOption.dataset.value;
  } else if (appState.currentStep === 9 && selectedOption) {
    appState.filters.budget = selectedOption.dataset.value;
  } else if (appState.currentStep === 10 && selectedOption) {
    appState.filters.locationType = selectedOption.dataset.value;
  } else if (appState.currentStep === 11 && selectedOption) {
    appState.filters.music = selectedOption.dataset.value;
  } else if (appState.currentStep === 13 && selectedOption) {
    appState.filters.crowd = selectedOption.dataset.value;
  }
  
  if (appState.currentStep === totalSteps) {
    // Show results
    appState.screenHistory = [appState.currentScreen];
    showScreen('program-screen');
    // Update nav to plan
    document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
    document.querySelector('[data-screen="plan"]').classList.add('active');
  } else {
    showFilterStep(appState.currentStep + 1);
  }
}

function previousStep() {
  if (appState.currentStep > 1) {
    showFilterStep(appState.currentStep - 1);
  }
}

// Filter Option Selection
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('filter-option')) {
    const container = e.target.parentElement;
    
    // Check if it's multi-select
    if (container.classList.contains('multi-select')) {
      e.target.classList.toggle('selected');
    } else {
      // Single select
      container.querySelectorAll('.filter-option').forEach(opt => opt.classList.remove('selected'));
      e.target.classList.add('selected');
    }
  }
});

// Info Modal
function showInfo(topic) {
  const modal = document.getElementById('info-modal');
  const modalBody = document.getElementById('modal-body');
  const info = infoContent[topic];
  
  if (info) {
    modalBody.innerHTML = `<h3>${info.title}</h3>${info.content}`;
    modal.classList.remove('hidden');
  }
}

function closeModal() {
  document.getElementById('info-modal').classList.add('hidden');
}

document.addEventListener('click', (e) => {
  const modal = document.getElementById('info-modal');
  if (e.target === modal) {
    closeModal();
  }
});

// Toggle Alternatives
function toggleAlternatives(button) {
  const alternatives = button.parentElement.querySelector('.alternatives');
  alternatives.classList.toggle('hidden');
  button.textContent = alternatives.classList.contains('hidden') ? 'Show alternatives' : 'Hide alternatives';
}

// View Switching
function switchToMapView() {
  showScreen('map-screen');
}

function switchToProgramView() {
  showScreen('program-screen');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set first nav item as active
  document.querySelector('.nav-item').classList.add('active');
});