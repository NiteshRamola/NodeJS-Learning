// Callback hell

// console.log('Before');
// getUser(1, (user) => {
//     console.log('User', user);

//     getRepositories(user.gitHubUsername, (repos) => {
//         console.log('Repos', repos);
//     });
// });
// console.log('After');

// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log('Reading a user from a database...');
//     callback({ id: id, gitHubUsername: 'nitesh' });
//   }, 2000);
// }

// function getRepositories(username, callback) {
//   setTimeout(() => {
//     console.log('Calling GitHub API...');
//     callback(['repo1', 'repo2', 'repo3']);
//   }, 2000);
// }

// Replacing with named functions

// console.log('Before');
// getUser(1, getRepositories);
// console.log('After');

// function getRepositories(user){
//     getRepositories(user.gitHubUsername, getCommits);
// }

// function getCommits(repos){
//     getCommits(repos, displayCommits);
// }

// function displayCommits(commits) {
//   console.log(commits);
// }


// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log('Reading a user from a database...');
//     callback({ id: id, gitHubUsername: 'nitesh' });
//   }, 2000);
// }

// function getRepositories(username, callback) {
//   setTimeout(() => {
//     console.log('Calling GitHub API...');
//     callback(['repo1', 'repo2', 'repo3']);
//   }, 2000);
// }


// Replacing with Promises

// console.log('Before');
// getUser(1).then(user => getRepositories(user.gitHubUsername))
// .then(repos => getCommits(repos[0]))
// .then(commits => console.log(commits))
// .catch(err => console.log(err.message));

// console.log('After');

// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Reading a user from a database...');
//       resolve({ id: id, gitHubUsername: 'mosh' });
//     }, 2000);
//   });
// }

// function getRepositories(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Calling GitHub API...');
//       resolve(['repo1', 'repo2', 'repo3']);
//     }, 2000);
//   });
  
// }

// function getCommits(repo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('Calling GitHub API...');
//       resolve(['commit']);
//     }, 2000);
//   });
// }

// Async & Await

console.log('Before');

const displayCommits = async () => {
  try{
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits)
  } catch(err){
    console.log(err.message)
  }
}

displayCommits();

console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      // resolve(['repo1', 'repo2', 'repo3']);
      reject(new Error('Failed...'))
    }, 2000);
  });
  
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
}