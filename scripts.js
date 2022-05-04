document.querySelector("#gen-1").innerHTML = "Generasión 1 Pokimon";
console.log(document.title);
console.log(document.getElementsByTagName("meta")[4].content);
console.log(document.domain);

document.getElementsByClassName("infocard-list")[0].style = "background-color: gold";

for (let i = 0; i < document.getElementsByTagName("img").length; i++) {
    document.getElementsByTagName("img")[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
    console.log(document.getElementsByTagName("img").src);
};
// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

// for (let i=0;i<document.querySelectorAll("infocard-lg-data text-muted").length;i++) {
//     if (document.querySelectorAll(".infocard-lg-data text-muted)
//      .itype flying")[i].style="background-color: red"
// };
for (let i = 0; i<document.querySelectorAll(".infocard-lg-data .itype.flying").length;i++) {
    document.querySelectorAll(".infocard-lg-data .itype.flying")[i].style = "background-color: coral"
}
// document.querySelectorAll(".infocard-lg-data .itype.flying").style = "background-color: coral"
