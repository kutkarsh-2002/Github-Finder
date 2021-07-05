class GitHub{
    constructor(){
        this.client_id = "bd41fc221137ea218bf3";
        this.client_secret ="417fb68349bc4758c4fdea6ccd038626f80e1065";
        this.repos_count = 5;
        this.repos_sort = 'cretaed : asc';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id = ${this.client_id} & client_secret = ${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort =${this.repos_sort}&client_id = ${this.client_id} & client_secret = ${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return {
            profile,
            repos
        }
    }
}