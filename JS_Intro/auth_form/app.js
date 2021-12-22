const authForm = $("#auth_form");

window.auth_state = {
  currentUser: localStorage.getItem("currentUser"),
  currentForm: "login",
  authError: null,
};

function appendAuthForm() {
  authForm.empty();
  authForm.append(renderAuthForm());
}

appendAuthForm();

function isLoggedIn() {
  const token = localStorage.getItem("token");

  if (token === null) return false;

  return token;
}
function renderAuthForm() {
  // if user is logged in, render a logout button
  if (isLoggedIn()) {
    return renderLogoutButton();
  }

  // if user is logged out, render a toggle form
  return renderToggleForm();
}
const authHeadlines = {
  login: "Log in!!!",
  register: "Register new Account!",
};
const authBylines = {
  login: "Dont have an account? Register",
  register: "Already have an account? Login",
};

export const authFns = {
  login: loginUser,
  register: registerUser,
};
function loginUser(username, password) {
  return fetch(
    "https://strangers-things.herokuapp.com/api/2101-VPI-RM-WEB-PT/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.error) {
        window.auth_state.authError = result.error.message;
        return;
      }
      const token = result.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("currentUser", username);
      window.auth_state.currentUser = username;

      return result;
    })
    .catch(console.error);
}
function registerUser(username, password) {
  return fetch(
    "https://strangers-things.herokuapp.com/api/2101-VPI-RM-WEB-PT/users/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    }
  )
    .then((response) => response.json())
    .then((result) => {
      if (result.error) {
        window.auth_state.authError = result.error.message;
        return;
      }
      const token = result.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("currentUser", username);
      window.auth_state.currentUser = username;

      return result;
    })
    .catch(console.error);
}

function renderLogoutButton() {
  const logoutButton = $(`
      <div>
      <h2>welcome ${window.auth_state.currentUser}</h2>
      <button id="logout">Logout</button>
      </div>
    `);

  logoutButton.click(function () {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    appendAuthForm();
  });

  return logoutButton;
}

function renderToggleForm() {
  const { currentForm, authError } = window.auth_state;
  const heading = authHeadlines[currentForm];
  const bylineText = authBylines[currentForm];
  const form = $(`
      <form id="toggle_form">
        <h2>${heading}</h2>
        <div id="error_container">${authError ? authError : ""}</div>
        <input type="text" id="username" placeholder="username"/>
        <input type="password" id="password" placeholder="password"/>
        <button>submit</button>
        <div id="toggle_link"></div>
      </form>
    `);

  const toggleLink = form.find("#toggle_link");
  toggleLink.append(bylineText);

  toggleLink.click(function (event) {
    window.auth_state.currentForm =
      currentForm === "login" ? "register" : "login";
    window.auth_state.authError = null;
    appendAuthForm();
  });

  form.submit(function (event) {
    event.preventDefault();
    const uname = form.find("#username").val();
    const pword = form.find("#password").val();

    authFns[currentForm](uname, pword)
      .then(() => {
        console.log("logged in!");
        appendAuthForm();
      })
      .catch((error) => {
        // handle error case
        console.error(error);
      });
  });

  return form;
}
