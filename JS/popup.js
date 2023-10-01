document.addEventListener("DOMContentLoaded", () => {
    // get the button selectors
    const startVideo = document.querySelector("#startVideo");
    const stopVideo = document.querySelector("#stopVideo")


    // add event listener

    // start video record
    startVideo.addEventListener("click", () => {
        // startVideo.classList.toggle("start-video");
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, {action: "request_recording"}, function(response) {
                    if ((!chrome.runtime.lastError)) {
                        console.log(response);
                    } else{
                        console.log(chrome.runtime.lastError, 'error line 13');
                    }
                })
            })
        
            
    })

    stopVideo.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "stopvideo" }, function (response) {
                if (!chrome.runtime.lastError) {
                    console.log(response);
                } else {
                    console.log(chrome.runtime.lastError, "error line 31");
                }
            });
        });
    })
})

