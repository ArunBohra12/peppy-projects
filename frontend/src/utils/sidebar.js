export const toggleSidebarOpen = () => {
  const sidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.querySelector('.sidebar-overlay');

  sidebar.classList.toggle('sidebar-open');
  sidebarOverlay.classList.toggle('sidebar-open-overlay');
};
