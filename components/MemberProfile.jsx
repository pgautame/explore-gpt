import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { fetchOrGenerateTokens } from "@/utils/actions";
import { SignOutButton } from "@clerk/nextjs";

const MemberProfile = async () => {
  const user = await currentUser();
  const { userId } = auth();
  await fetchOrGenerateTokens(userId);

  return (
    <div className="px-4 flex items-center gap-2">
      {userId === process.env.NEXT_PUBLIC_GUEST_USER_ID ? (
        <SignOutButton>
          <button className="btn btn-primary w-full">Sign Out (Guest)</button>
        </SignOutButton>
      ) : (
        <div className="flex gap-2">
          <UserButton afterSignOutUrl="/" />
          <p>{user.emailAddresses[0].emailAddress}</p>
        </div>
      )}
    </div>
  );
};
export default MemberProfile;
