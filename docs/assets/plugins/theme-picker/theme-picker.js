(() => {
  if (!window.$docsify) {
    throw new Error('Docsify must be loaded before installing this plugin.');
  }

  window.$docsify.plugins.push(hook => {
    hook.mounted(() => {
      function getTheme() {
        return localStorage.getItem('theme') || 'auto';
      }

      function isDark() {
        if (theme === 'auto') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return theme === 'dark';
      }

      function setTheme(newTheme) {
        const noTransitions = Object.assign(document.createElement('style'), {
          textContent: '* { transition: none !important; }'
        });

        theme = newTheme;
        localStorage.setItem('theme', theme);

        // Update the UI
        [...menu.querySelectorAll('i2c-menu-item')].map(item => (item.checked = item.getAttribute('value') === theme));
        menuIcon.name = isDark() ? 'moon' : 'sun';

        // Toggle the dark mode class without transitions
        document.body.appendChild(noTransitions);
        requestAnimationFrame(() => {
          document.documentElement.classList.toggle('i2c-theme-dark', isDark());
          requestAnimationFrame(() => document.body.removeChild(noTransitions));
        });
      }

      let theme = getTheme();

      // Generate the theme picker dropdown
      const dropdown = document.createElement('i2c-dropdown');
      dropdown.classList.add('theme-picker');
      dropdown.innerHTML = `
        <i2c-button size="small" pill slot="trigger" caret>
          <i2c-icon name="sun" label="Select Theme"></i2c-icon>
        </i2c-button>
        <i2c-menu>
          <i2c-menu-label>Toggle <kbd>\\</kbd></i2c-menu-label>
          <i2c-menu-item value="light">Light</i2c-menu-item>
          <i2c-menu-item value="dark">Dark</i2c-menu-item>
          <i2c-divider></i2c-divider>
          <i2c-menu-item value="auto">Auto</i2c-menu-item>
        </i2c-menu>
      `;
      document.querySelector('.sidebar-toggle').insertAdjacentElement('afterend', dropdown);

      // Listen for selections
      const menu = dropdown.querySelector('i2c-menu');
      const menuIcon = dropdown.querySelector('i2c-icon');
      menu.addEventListener('i2c-select', event => setTheme(event.detail.item.value));

      // Update the theme when the preference changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => setTheme(theme));

      // Toggle themes when pressing backslash
      document.addEventListener('keydown', event => {
        if (
          event.key === '\\' &&
          !event.composedPath().some(el => ['input', 'textarea'].includes(el?.tagName?.toLowerCase()))
        ) {
          event.preventDefault();

          setTheme(isDark() ? 'light' : 'dark');
        }
      });

      // Set the initial theme and sync the UI
      setTheme(theme);
    });
  });
})();
