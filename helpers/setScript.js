export default function (src){
    const Script = document.createElement("script");
    Script.setAttribute("src",src)
    document.body.appendChild(Script)
}