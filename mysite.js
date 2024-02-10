document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("about").onclick = () => {
        window.location.assign("https://vsjain2004.github.io/")
    }

    document.getElementById("proj").onclick = () => {
        window.location.assign("https://vsjain2004.github.io/projects.html")
    }

    document.getElementById("exp").onclick = () => {
        window.location.assign("https://vsjain2004.github.io/experience.html")
    }

    document.getElementById("achieve").onclick = () => {
        window.location.assign("https://vsjain2004.github.io/achievements.html")
    }

    document.getElementById("extra").onclick = () => {
        window.location.assign("https://vsjain2004.github.io/extracurriculars.html")
    }

    document.getElementById("contact").onclick = () => {
        window.location.assign("https://vsjain2004.github.io/contact.html")
    }

    document.getElementById("resume").onclick = () => {
        window.location.assign("https://vsjain2004.github.io/resume.html")
    }

    if(window.location.href.includes("index")){
        if(window.innerHeight < window.innerWidth){
            document.getElementById("self").height = Math.floor(window.innerHeight*0.4);
        } else {
            document.getElementById("self").height = Math.floor(window.innerWidth*0.4);
        }
    }   

    window.onresize = () => {
        if(window.location.href.includes("index")){
            if(window.innerHeight < window.innerWidth){
                document.getElementById("self").height = Math.floor(window.innerHeight*0.4);
            } else {
                document.getElementById("self").height = Math.floor(window.innerWidth*0.4);
            }
        }   
    }

    if(window.location.href.includes("projects")){
        document.getElementById("One").click();
        document.getElementById("Two").click();
        document.getElementById("Two").click();
        document.getElementById("Three").click();
        document.getElementById("Three").click();
    }
})