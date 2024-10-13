import { fetchUserTokensById } from "@/utils/actions";
import { UserProfile } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
export const dynamic = "force-dynamic";

const ProfilePage = async () => {
  const { userId } = auth();
  const currentTokens = await fetchUserTokensById(userId);

  return (
    <div>
      <h2 className="mb-8 ml-8 text-2xl font-bold">
        Token Amount : {currentTokens}
      </h2>
      <div className="mx-1">
        <UserProfile routing="hash" />
      </div>
    </div>
  );
};
export default ProfilePage;
