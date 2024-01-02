import Links from "./components/Links";
import Profile from "./components/Profile"
import useProfile from "./utils/useProfile"

export default function Home() {
  const profile = useProfile();

  return (
    <main className="min-h-screen flex flex-col justify-between">
      <Profile
        imgSrc={profile.imgSrc}
        title={profile.title}
        bio={profile.bio}
      />

      <div className="container mx-auto max-w-2xl text-center justify-center flex-grow">
        <Links />
      </div>

    </main>
  );
}
