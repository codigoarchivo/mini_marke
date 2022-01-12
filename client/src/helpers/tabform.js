export const tabform = (provider, elmnt, color, text) => {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "#000";
  }
  document.getElementById(provider).style.display = "block";
  elmnt.style.backgroundColor = color;
  elmnt.style.color = text;
  document.getElementById("defaultOpen").click();
};
