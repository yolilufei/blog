let networkStatus = true, alreadyListening = false;

const setNetworkStatus = (status) => {
    networkStatus = status;
    alert(navigator.onLine);
};

const getNetworkStatus = () => networkStatus;


const checkingNetworkStatus = () => {
  if (alreadyListening) {
    return;
  }
  alreadyListening = true;
  if (window) {
    window.addEventListener("online", () => setNetworkStatus(true));
    window.addEventListener("offline", () => setNetworkStatus(false));
  }
};

checkingNetworkStatus();

// export default getNetworkStatus;