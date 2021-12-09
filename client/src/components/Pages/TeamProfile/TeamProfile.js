import {useLocation} from "react-router-dom";

function TeamProfile() {
  const location = useLocation();
  const {user} = location.state;
  console.log(user);

  return <></>;
}

export default TeamProfile;
