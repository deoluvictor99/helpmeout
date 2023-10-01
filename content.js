console.log("content script injected by the background.js file successfully"); 

// var recorder = null;

// function onAccessApproved(stream) {
//     recorder = new MediaRecorder(stream);
//     // console.log(recorder);
//     recorder.start();

//     recorder.onstop = function(){
//         stream.getTracks().forEach(function(track) {
//             if (track.readyState === "live") {
//                 track.stop()
//             }
//         });
//     }

//     recorder.ondataavailable = async function (event) {
//         let recordedBlob = event.data;
//         let url = URL.createObjectURL(recordedBlob);
//         const base64EncodedUrl = btoa(url)
//         const file = new File([base64EncodedUrl], "filename.mp4", {type: "video/mp4"})

//         try {
//             const response = await fetch("https://chrome-extension-0ez9.onrender.com/upload",{
//                 method: "POST",
//                 headers: {
//                     'X-File-name': file.name,
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     base64EncodedUrl
//                 }),
//             });

//             const responseData = await response.json();
//             console.log(responseData);

//             const downloadResponse = await fetch(`https://chrome-extension-0ez9.onrender.com/videos/filename.mp4`, {
//                 method: "GET"
//             });
//             console.log(downloadResponse.url);
//             const videoBlob = await downloadResponse.blob();

//             const downloadUrl = URL.createObjectURL(videoBlob);

//             let a = document.createElement('a');
//             a.style.display = "none"
//             a.href = downloadUrl;
//             a.download = responseData.url;
//             document.body.appendChild(a)
//             a.click()
//             document.body.removeChild(a)

        
//         } catch (error) {
//             console.error(error)
//         }

//         //////////////////////////



//         // let a = document.createElement("a");
//         // a.style.display = "none"
//         // a.href = url;
//         // a.download = "screen-recording.webm"

//         // document.body.appendChild(a);
//         // a.click();

//         // document.body.removeChild(a);

//         URL.revokeObjectURL(url);
//     }
// }


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === "request_recording"){
//         console.log("requesting recording");

//         sendResponse(`processed ${message.action}`)

//         navigator.mediaDevices.getDisplayMedia({
//             audio:true,
//             video:{
//                 width:9999999999,
//                 height:9999999999,
//             }
//         }).then((stream) => {
//             onAccessApproved(stream)
//         })
//     }

//     if(message.action === "stopvideo"){
//         console.log("stopping video");
//         sendResponse(`processed ${message.action}`);
//         if (!recorder) return console.log("no recorder");
        
//         recorder.stop();
        
//     }
// })


// var recorder = null;

console.log("braeionm");


//     function onAccessApproved(stream) {
//     recorder = new MediaRecorder(stream);
//     recorder.start();

//     recorder.onstop = function () {
//     stream.getTracks().forEach(function (track) {
//         if (track.readyState === "live") {
//         track.stop();
//         }
//     });
//     };

//     recorder.ondataavailable = async function (event) {
//     let recordedBlob = event.data;
//     const formData = new FormData();
//     formData.append("video", recordedBlob, "filename.mp4");

//     try {
//         const response = await fetch(
//         "https://chrome-extension-0ez9.onrender.com/upload",
//         {
//             method: "POST",
//             headers:{
//             'X-File-name':'filename.mp4',
//             },
//             body: formData,
//         }
//         );

//         const responseData = await response.json();
//         console.log(responseData);

        
        
//         const downloadUrl = responseData.url; // Assuming the backend provides the correct download URL
        
//         console.log(responseData.url);
        
        
//         let a = document.createElement("a");
//         a.style.display = "none";
//         a.href = downloadUrl;
//         a.download = responseData['X-File-name']; // Set the filename based on backend response
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//     } catch (error) {
//         console.error(error);
//     }

//     // URL.revokeObjectURL(url);
//     };
// }

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
// if (message.action === "request_recording") {
// console.log("requesting recording");

// sendResponse(`processed ${message.action}`);

// navigator.mediaDevices
//     .getDisplayMedia({
//         audio: true,
//         video: {
//             width: 9999999999,
//             height: 9999999999,
//         },
//     })
//     .then((stream) => {
//         onAccessApproved(stream);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// }

//     if (message.action === "stopvideo") {
//         console.log("stopping video");
//         sendResponse(`processed ${message.action}`);

//         if (!recorder) return console.log("no recorder");
//             recorder.stop();
//     }
// });


var recorder = null;
let recordedChunks = [];

function onAccessApproved(stream) {
    recorder = new MediaRecorder(stream);
    recorder.start();

    recorder.onstop = function () {
        stream.getTracks().forEach(function (track) {
            if (track.readyState === "live") {
            track.stop();
            }
        });
    };

    recorder.addEventListener("dataavailable", async function (event) {
        const chunk = [event.data];
        recordedChunks.push(chunk);

        // Stream each chunk to the backend
        await streamChunksToServer(chunk);
    });
}

async function streamChunksToServer(chunks) {
    const formData = new FormData();
    for (const chunk of chunks) {
        formData.append("video", chunk, "filename.mp4");
    }

    try {
        const response = await fetch(
            "https://chrome-extension-0ez9.onrender.com/upload",
            {
            method: "POST",
            headers: {
                "X-File-name": "filename.mp4",
            },
            body: formData,
        }
    );

    const responseData = await response.json();
    console.log(responseData);

    const videoUrlResponse = await fetch('https://chrome-extension-0ez9.onrender.com/videos/filename.mp4');
    const videoUrlData = await videoUrlResponse.json();

    const downloadUrl = videoUrlData.url; // Assuming the backend provides the correct download URL

    let a = document.createElement("a");
    a.style.display = "none";
    a.href = downloadUrl;
    a.download = responseData["X-File-name"]; // Set the filename based on backend response
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    } catch (error) {
        console.error(error);
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 9999999999,
          height: 9999999999,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed ${message.action}`);
    if (!recorder) return console.log("no recorder");

    recorder.stop();
  }
});
