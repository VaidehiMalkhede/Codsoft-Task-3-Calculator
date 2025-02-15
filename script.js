const darkBtn = document.querySelector('.dark');
    const lightBtn = document.querySelector('.light');
    darkBtn.style = "opacity: 0.1"; //Default Theme is Dark!

    //If Dark Theme button Clicked, then switch to dark theme
    darkBtn.addEventListener('click', () => {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        window.localStorage.setItem('mode', 'dark'); 
        darkBtn.style = "opacity: 0.1";
        lightBtn.style = "opacity: 1";
    });

    //if Light Theme button Clicked, then switch yo light theme
    lightBtn.addEventListener('click', () => {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        window.localStorage.setItem('mode', 'light');
        darkBtn.style = "opacity: 1";
        lightBtn.style = "opacity: 0.1";
    });

    const mode = window.localStorage.getItem('mode');//grab mode value
    if (mode == 'dark') { //if user set the theme to dark, then load dark theme
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        darkBtn.style = "opacity: 0.1";
        lightBtn.style = "opacity: 1";
    }

    if (mode == 'light') { //if user set the theme to light, then load light theme
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        darkBtn.style = "opacity: 1";
        lightBtn.style = "opacity: 0.1";
    }
