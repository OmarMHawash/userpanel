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
    image: "",
    date_created: "",
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
  //? users
  createUser: async (user) => {
    console.log(user);
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
    // console.log("done! ~ addDoc");
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
  },
  //* end of user

  //? course
  getCourses: async () => {
    // const userIdRef = doc(db, "users");
    const courses = await getDocs(collection(db, "courses"));
    let _courses = [];
    courses.forEach((doc) => {
      //   console.log(doc.id, doc.data());
      let obj = {
        id: doc.id,
        ...doc.data(),
      };
      _courses = [..._courses, obj];
    });
    return _courses;
  },
  getCourseById: async (uid) => {
    const courseIdRef = doc(db, "courses", uid);
    const course = await getDoc(courseIdRef);

    if (course.exists()) {
      let obj = {
        id: uid,
        ...course.data(),
      };
      //   console.log("Document data:", course.data());
      return obj;
    } else {
      console.log("No such document!");
    }
  },
  //* end of course //

  //? chapters //
  getCourseChapters: async (course_id) => {
    const chapters = collection(db, "chapters");
    const filteredChapters = query(
      chapters,
      where("course_id", "==", course_id)
    );
    const _filteredChapters = await getDocs(filteredChapters);
    let myChapters = [];
    _filteredChapters.forEach((doc) => {
      myChapters = [...myChapters, doc.data()];
    });
    return myChapters;
  },
  //* end of chapters //

  //? tags //
  getCourseTags: async (course_id) => {
    const ctags = collection(db, "courses_tags");
    const filteredCTags = query(ctags, where("course_id", "==", course_id));
    const _filteredCTags = await getDocs(filteredCTags);
    let myCTags = [];
    _filteredCTags.forEach((doc) => {
      myCTags = [...myCTags, doc.data()];
    });
    return myCTags;
  },

  getTags: async () => {
    const tags = await getDocs(collection(db, "tag"));
    let _tags = [];
    tags.forEach((doc) => {
      let obj = {
        id: doc.id,
        ...doc.data(),
      };
      _tags = [..._tags, obj];
    });
    return _tags;
  },
  //* end of tags //
};

export default FirestoneDB;

