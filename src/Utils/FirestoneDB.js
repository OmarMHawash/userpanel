import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import db from "./Firebase";

function myObjects() {
  let user = {
    name: "",
    email: "",
    profile_pic: "",
  };
  let course = {
    name: "",
    description: "",
    thumb: "",
  };
  let tag = {
    name: "",
    type: "", //language or technology or stack
    logo: "",
  };
  let courseTag = {
    course_id: "",
    courseTag_id: "",
  };
  let userCourse = {
    user_id: "",
    course_id: "",
    progress: 0,
  };
  let chapter = {
    name: "",
    content: "",
    image: "",
    course_id: "",
  };
  let section = {
    title: "",
    desc: "",
    chapter_id: "",
  };
}

const FirestoneDB = {
  createUser: async (user) => {
    try {
      const userRef = await addDoc(collection(db, "users"), {
        name: user.name,
        email: user.email,
        profile_pic: user.profile_pic || "default",
      });
      console.log("Document written with ID: ", userRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    console.log("done! ~ addDoc");
  },
  getUserById: async (uid) => {
    const userIdRef = doc(db, "users", uid);
    const user = await getDoc(userIdRef);

    if (user.exists()) {
      console.log("Document data:", user.data());
    } else {
      console.log("No such document!");
    }
  },
  getUsers: async () => {
    // const userIdRef = doc(db, "users");
    const users = await getDocs(collection(db, "users"));
    users.forEach((doc) => {
      console.log(doc.id, doc.data());
    });
    // if (users) {
    //   console.log("Document data:", users);
    // } else {
    //   console.log("No such document!");
    // }
  },
  getUserByEmail: async (user_email) => {
    const users = collection(db, "users");
    const filteredUser = query(users, where("email", "==", user_email));
    const _filteredUser = await getDocs(filteredUser);
    let myUser = {};
    _filteredUser.forEach((doc) => {
      myUser = doc.data();
    });
    return myUser;
    // const citiesRef = collection(db, "cities");
    // const q = query(citiesRef, where("capital", "==", true));
    // filteredUser.forEach((doc) => {
    //   console.log(doc.id, doc.data());
    // });
  },
};

export default FirestoneDB;

