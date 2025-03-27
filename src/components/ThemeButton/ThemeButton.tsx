"use client"

const ThemeButton = () => {
    function handleTheme(){
        const body = document.getElementById("body");
        if (!body) return;
        const currentClass = body.className;
        body.className = currentClass === "dark" ? "light" : "dark";
    }

    return (
        <button
            onClick={() => handleTheme()}
            className=' hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800'>
            Toggle Mode
        </button>
    );
}

export default ThemeButton;

