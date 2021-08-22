export default ({ redirect }) => {
  const strToken = window.localStorage.getItem("token");
  if (!strToken) {
    return redirect("/login");
  }

  const token = JSON.parse(strToken);
  const accessToken = token["token"];
  const client = token["client"];
  const uid = token["uid"];

  if (accessToken && client && uid) {
    return;
  } else {
    // どれかなかったらLoginへredirectする
    return redirect("/login");
  }
};
