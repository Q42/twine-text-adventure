window.explain = function() {
    event.preventDefault();

    let tooltip = document.getElementById("tooltip");
    if (!tooltip) {
        tooltip = document.createElement("div");
        tooltip.setAttribute("id", "tooltip");
    }

    tooltip.innerHTML = `${event.target.innerText} <a href="#" onclick="play()"><img id="tts-image" src="https://www.materialui.co/materialIcons/av/volume_up_black_144x144.png" /></button>`;

    const rect = event.target.getBoundingClientRect();
    tooltip.style.top = rect.top + document.documentElement.scrollTop + 'px';
    tooltip.style.left = rect.left + .5 * rect.width + 'px';

    document.body.appendChild(tooltip);
}

window.play = function() {
    event.preventDefault();

    const text = document.getElementById("tooltip").innerText;
    const audioEl = document.getElementById('tts-audio');
    const url= `https://translate.google.com/translate_tts?ie=UTF-8&tl=nl&client=tw-ob&q=${text}`;

    // add the sound to the audio element
    audioEl.src = url;

    //For auto playing the sound
    audioEl.play();
}

document.onclick = function() {
    const id = event.target.getAttribute("id");

    if (event.target.tagName == "A" || id == "tooltip" || id == "tts-image") {
        return;
    }

    const tooltip = document.getElementById("tooltip");

    if (tooltip) {
        tooltip.parentNode.removeChild(tooltip);
    }
}