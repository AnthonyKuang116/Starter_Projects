const USERS_URL = `https://reqres.in/api/users?per_page=2`;

const metadata = {
  minPage: 1,
  currentPage: null,
  maxPage: null
};

function renderUser(user) {

}

function renderUserList(userList) {
    
}

function updatePageInfo() {
    // $('#page-info').text(
    //     `` 
    //   );
}

function updateButtons() {
    // if (/* we are at the start */) {

    // } else if (/* we are at the end */) {
  
    // } else { // we must be in the middle
  
    // }
}

function fetchUserList(currentPage = 1) {
    fetch(`${ USERS_URL }&page=${ currentPage }`)
    .then(function (res) {
      return res.json();
    })
    .then(function (userData) {
      // update metadata
      // renderUserList
      // updatePageInfo
      // updateButtons
    })
    .catch(function (error) {

    });
}

$('#back').on('click', function () {
    if (currentPage != minPage) {
        fetchUserList(currentPage - 1);
      }
});

$('#forward').on('click', function () {
    if (currentPage != maxPage) {
        fetchUserList(currentPage + 1);
      }
});

function bootstrap() {
}

bootstrap();