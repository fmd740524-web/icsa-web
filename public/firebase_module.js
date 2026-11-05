 import { initializeApp, getApps, getApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
    import { getAuth, onAuthStateChanged, signOut,getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

    // Sirf login ke liye (Firestore ki config alag hai aur abhi demo mode mein hai)
    const authConfig = {
      apiKey: "AIzaSyBxmq-Vp_wHOxCwBmbT-Fgoe63BmoDlVJs",
      authDomain: "icsa-8311c.firebaseapp.com",
      projectId: "icsa-8311c",
      storageBucket: "icsa-8311c.firebasestorage.app",
      messagingSenderId: "328342120744",
      appId: "1:328342120744:web:62559de27cfa8b2eadc81d"
    };
    const auth = getAuth(getApps().length ? getApp() : initializeApp(authConfig));
    const box = document.getElementById("authBox");

    function render(user) {
      box.innerHTML = "";
      if (!user) {
        const a = document.createElement("a");
        a.className = "authbtn";
        a.href = "login.html";
        a.textContent = "Login";
        box.appendChild(a);
        return;
      }
      const hi = document.createElement("span");
      hi.className = "authhi";
      hi.textContent = "Hi, " + (user.displayName || (user.email || "student").split("@")[0]);
      const out = document.createElement("button");
      out.className = "authbtn";
      out.type = "button";
      out.textContent = "Logout";
      out.onclick = () => signOut(auth);
      box.append(hi, out);
    }
    render(null);
    onAuthStateChanged(auth, render);