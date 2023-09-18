import { BiLogoGithub as GitHubIcon } from "react-icons/bi"

const Header = () => {
  return (
    <header className="h-12 text-lg text-white bg-black p-2 flex items-center gap-2">
      <GitHubIcon />
      <span>GitHub Compare Generator</span>
    </header>
  )
}

export default Header
