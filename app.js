// Intialize gitHub class
const gitHub = new GitHub;

const ui = new UI;

// search Input
const searchUser = document.getElementById('searchUser');

// search Input event Listener
searchUser.addEventListener('keyup',(e) =>{
    const userText = e.target.value;
    if(userText !==''){
        //console.log(userText);

        // Make HTTP Call

        gitHub.getUser(userText)
        .then( data =>{
            if(data.profile.message === 'NOT FOUND'){
                //show Alert
                //ui.showAlert('User Not Found','alert alert-danger');
                ui.showAlert('User not found', 'alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            
        })
        
    }else{
        //erase profile
        ui.clearProfile();
    }
});