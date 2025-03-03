document.addEventListener("DOMContentLoaded", async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        if (!user) {
          window.location.href = "login.html";
        } else {
          const userDocRef = db.collection("users").doc(user.uid);
          const doc = await userDocRef.get();
          if (doc.exists) {
            const userData = doc.data();
            document.getElementById("userNamedisplay").textContent =
              userData.fullName || "User";
            document.getElementById("userEmailDisplay").textContent =
              userData.email || "N/A";
          } else {
            console.error("No such document!");
          }
        }
      });
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  });