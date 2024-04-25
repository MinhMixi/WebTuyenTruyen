const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', function() {
    document.documentElement.setAttribute('data-theme', this.checked ? 'dark' : 'light');
});

