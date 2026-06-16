// State Management
const appState = {
  currentScreen: 'home',
  screenHistory: ['home']
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
    
    showScreen(screenName);
  });
});

// Filter Tab Navigation
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.dataset.tab;
    
    // Remove active from all tabs and contents
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.filter-tab-content').forEach(c => c.classList.remove('active'));
    
    // Add active to clicked tab and corresponding content
    tab.classList.add('active');
    document.getElementById(tabName + '-tab').classList.add('active');
  });
});

// Filter Pill Selection
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

// Space Button Selection
document.querySelectorAll('.space-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.space-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
  });
});

// Generate Plan Button
document.querySelector('.filter-actions .btn-primary').addEventListener('click', () => {
  document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
  document.querySelector('[data-screen="plan"]').classList.add('active');
  showScreen('plan-screen');
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  // Set first nav item as active
  document.querySelector('.nav-item').classList.add('active');
});
