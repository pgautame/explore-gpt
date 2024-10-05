import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const ProfilePage = () => {
  return (
    <>
      <UserProfile routing="hash" />
    </>
  );
};
export default ProfilePage;
