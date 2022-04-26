
var button = document.getElementById("btn");

function viewRepos(pass_arg)
{
    // var repo = repo_url;
    console.log("Repos url in viewRepos ", pass_arg);
    location.replace(`file:///E:/Work/Training/Task8-V3/page1.html?repos_url=${pass_arg}`);
    
}

function addButton(repoUrl){
    console.log("Hello and Hi");
   console.log("Repos url in button ", repoUrl);
        
        var button = document.createElement('button');
        button.type='button';
        button.innerHTML='Get Repos';
        button.className='btn';
        button.id='repo_button';
        var container = document.getElementById('container');
        container.appendChild(button);
        console.log("Repos: ",repoUrl);
        // button.setAttribute("onclick", "viewRepos(repoUrl)");
        button.addEventListener("click", function(){
            viewRepos(repoUrl);
        });

       
    
}



function getProfile()
{
    
   
    let usname = document.getElementById("username").value;
    fetch(`https://api.github.com/users/${usname}`).then(res => res.json()).then(data =>{
        getLogin(data);

    function getLogin(data)
        {
            
            let login = data.login;
            document.getElementById("login").innerHTML = login;
        }
  getAvathar(data);
    function getAvathar({avatar_url})
        {
             var img = "";
             fetch(avatar_url).then(res => {
            
             document.getElementById("avatar").src = res.url;});
        
        }
        getLocation(data);
        function getLocation(data)
        {
            let location=data.location;
          
            document.getElementById("location").innerHTML = "Your Logged in from "+location;
         }
    getRepoURL(data);
    function getRepoURL({repos_url})
        {
            var count =0;
            fetch(repos_url).then(res => res.json()).then(data => {
                
               
                count = "Your total Public Repo is "+data.length;
                console.log("REpo url is:", repos_url);
                addButton(repos_url);
            document.getElementById("repo_count").innerHTML =count;
            getRepoCloneURL(data[0]);
               });
               function getRepoCloneURL({clone_url})
               {
                  
                   document.getElementById("repo_url").innerHTML = "Your Repo Clone URL is "+clone_url;
               }
        }

});



}

// fetch("https://jsonplaceholder.typicode.com/users").then(result =>  result.json()).then((res) => 
// {
// console.log(res[0].username);
// let tableData="";
// res.map((values)=>{
//     tableData += `<tr>
//     <td>${values.name}</td>
//     <td>${values.username}</td>
//     <td>${values.email}</td>
// </tr>`;
// });
// document.getElementById("table_body").innerHTML=tableData;
// });




