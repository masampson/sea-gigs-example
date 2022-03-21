import { logOut, signUp, logIn } from "../firebase";

export async function handleSignup(email, password) {
  setIsLoading(true);
  try {
    await signUp(email, password);
  } catch {
    alert("Error");
  }
  setIsLoading(false);
}

export async function handleLogOut() {
  setIsLoading(true);
  try {
    await logOut();
  } catch {
    alert("Error");
  }
  setIsLoading(false);
}

export async function handleLogIn(email, password) {
  setIsLoading(true);
  try {
    await logIn(email, password);
  } catch {
    alert("Error");
  }
  setIsLoading(false);
}
