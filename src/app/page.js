import Links from "./components/Links";
import Profile from "./components/Profile"
import useProfile from "./utils/useProfile"

export default function Home() {
  const profile = useProfile();
  
  return (  
    <main className="mt-0">
      <Profile
        imgSrc={profile.imgSrc}
        title={profile.title}
        bio={profile.bio}
      />
      <Links />
    </main>
  )
}