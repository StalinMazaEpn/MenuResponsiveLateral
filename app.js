const themeMap = {
    dark: 'light',
    light: 'solar',
    solar: 'dark'
  };
  
  const theme = localStorage.getItem('theme');
  const bodyClass = document.body.classList;
  bodyClass.add((theme) ? theme : 'dark');
  localStorage.setItem('theme', 'dark');
  
  function toggleTheme() {
      console.log('toggle theme')
    const current = localStorage.getItem('theme');
    console.log(current);
    const next = themeMap[current];
    console.log(next);
    
    console.log(themeMap);
    const was_replaced = bodyClass.replace(current, next);
    // console.log(was_replaced);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').addEventListener('click', toggleTheme);