import { request } from "./createRequest";

export const preSignUp = async (email) => {
  const res = await request({
    url: "/auth/pre-signup",
    method: "POST",
    data: {
      email
    }
  });

  return res;
};

export const signUp = async (name, surname, email, activationMessage) => {
  const res = await request({
    url: "/auth/signup",
    method: "POST",
    data: {
      name,
      surname,
      email,
      activationMessage
    }
  });
  localStorage.setItem("token", res.token);
  localStorage.setItem("user", JSON.stringify(res.user));

  return res;
};

export const preSignIn = async (email) => {
  const res = await request({
    url: "/auth/pre-signin",
    method: "POST",
    data: {
      email
    }
  });

  return res;
};

export const signIn = async (email, activationMessage) => {
  const res = await request({
    url: "/auth/signin",
    method: "POST",
    data: {
      email,
      activationMessage
    }
  });
  localStorage.setItem("token", res.token);
  localStorage.setItem("user", JSON.stringify(res.user));

  return res;
};
