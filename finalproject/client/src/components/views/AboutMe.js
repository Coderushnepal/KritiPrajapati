import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUser} from "../../actions/users";
import User from "../common/User";
function AboutMe() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user?.user || {});

  useEffect(() => {
    dispatch(fetchUser({}));
  }, [dispatch]);

  console.log(users, 'users')
  return (
    <div>
about me      
    </div>
  );
}

export default AboutMe;
