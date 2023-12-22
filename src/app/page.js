import LinkButton from "./components/LinkButton";
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

      {/* <LinkButton link={{title: 'Instagram', url: 'https://www.instagram.com/spiderman'}} /> */}
      <Links />

      {/* <div className="flex items-center justify-center max-w-2xl w-full mx-auto h-screen m-3 p-3">
        <h1>Teste</h1>
      </div> */}
    </main>
  )
}