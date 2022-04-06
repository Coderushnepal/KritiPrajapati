import { fetchUser } from "../../actions/users";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function AboutMe() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user?.user || {});

  useEffect(() => {
    dispatch(fetchUser({}));
  }, [dispatch]);

  console.log(users, "users");
  return <div>about me</div>;
}

export default AboutMe;
