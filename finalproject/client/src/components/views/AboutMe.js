import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser } from "../../actions/users";

function AboutMe() {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user?.user || {});

  useEffect(() => {
    dispatch(fetchUser({}));
  }, [dispatch]);

  console.log(user, "users");
  return <div>about me
    <p>{user.fullName}</p>

  </div>;
}

export default AboutMe;