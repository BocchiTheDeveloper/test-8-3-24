function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const tocButton = document.getElementById('toc-button');
    
    if (sidebar.style.display === 'none' || sidebar.style.display === '') {
        sidebar.style.display = 'block';
        tocButton.style.display = 'none';
    } else {
        sidebar.style.display = 'none';
        tocButton.style.display = 'block';
    }
}
