import { fetchUserTokensById } from "@/utils/actions";
import { FaUserLock } from "react-icons/fa";
import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
export const dynamic = "force-dynamic";

const ProfilePage = async () => {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId);

  return (
    <div>
      <h1 className="text-4xl mb-8 font-bold">Profile</h1>
      <h2 className="mb-8 text-xl font-medium">
        Token Amount : {currentTokens}
      </h2>
      {userId === process.env.NEXT_PUBLIC_GUEST_USER_ID ? (
        <div className="flex items-center gap-2 mb-8">
          <FaUserLock size={"1.5rem"} />
          <h2 className="text-lg font-light mx-2">
            complete profile unavailable to guest users.
          </h2>
        </div>
      ) : (
        <div>
          <UserProfile routing="hash" />
        </div>
      )}
    </div>
  );
};
export default ProfilePage;
