
var link = window.location.href;
var repoLink = link.replace("file:///E:/Work/Training/Task8-V3/page1.html?repos_url=","");

console.log("Link is ", repoLink);



fetch(repoLink).then(result =>  result.json()).then((res) => 
{

let tableData="";
res.map((values)=>{
    var ownerName = values.owner.login;
    var lowerCase = ownerName.toLowerCase();
    tableData += `<tr>
    <td>${values.name}</td>
    <td>"https://${lowerCase}.github.io/${values.name}/"</td>
   
</tr>`;
});
document.getElementById("table_body").innerHTML=tableData;
});