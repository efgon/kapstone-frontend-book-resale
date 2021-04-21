export const baseURL = "https://deciduous-glowing-dandelion.glitch.me/";

export const loginRequest = (email, password) => {
  return fetch(baseURL + "login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => res.json());
};

export const logoutRequest = (token) => {
  return fetch(baseURL + "logout", {
    //   headers: { Authorization: "Bearer " + token },
  }).then((res) => res.json());
};

export const getBooks = () => {
  return fetch(baseURL + "books").then((res) => res.json());
};

export const createUser = async (firstName, lastName, email, password) => {
  const res = await fetch(baseURL + "users", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
    }),
  }).then((res) => res.json());

  // if (!res.ok) {
  //   throw new Error("bad response", res);
  // }
  // const res_1 = res;
  // const data = await res_1.json();

  // return console.log(data);
};

export const getUser = (email) => {
  return fetch(baseURL + `users/${email}`).then((res) => res.json());
};

export const patchUser = (token, firstName, lastName, email, creditBalance) => {
  // console.log(typeof email, typeof firstName, typeof lastName);
  return fetch(baseURL + `users/${email}`, {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName: firstName, lastName: lastName, creditBalance: creditBalance }),
  })
    .then((res) => res.json())

    .catch((err) => console.log(err));
};

export const deleteUser = (email, token) => {
  console.log(email);
  return fetch(baseURL + `users/${email}`, {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  }).then((res) => res.json());
};
