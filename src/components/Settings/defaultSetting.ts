// Function to create a default setting and returns an array of the it.
export const setNewLocalStorage = () => {
    const newLocalStorage = localStorage.getItem("defaultSetting");
    const defaultSetting = [
        {
        pomodoro: 25 * 60,
        shortBreak: 5 * 60,
        longBreak: 15 * 60,
        fontScheme: "kumbh",
        colorScheme: "orange",
        },
    ];
        // check if the client is new User:
        // 1. if new user, setup a default setting;
        // 2. if not, use the user preferred setting in local storage.
    if (newLocalStorage === null) {

        localStorage.setItem("defaultSetting", JSON.stringify(defaultSetting));
        localStorage.setItem("appSetting", JSON.stringify(defaultSetting));
        }
    return defaultSetting[0]
}