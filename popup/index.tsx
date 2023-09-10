import { useEffect, useState } from "react"
import { BiLogoGithub as GitHubIcon } from "react-icons/bi";
import { GoGitCompare as CompareIcon } from "react-icons/go";

import "./style.css"

function IndexPopup() {
  const [currentURL, setCurrentURL] = useState<String>("")

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setCurrentURL(tabs[0].url)
    })
  })

  return (
    <div
      className="w-96 flex flex-col"
    >
      <h1 className="text-lg h-12 bg-black text-white p-2 flex items-center">
        <GitHubIcon className="m-2" />
        <span>GitHub Compare Generator</span>
      </h1>
      <div className="flex">
        <input />
        <CompareIcon />
        <input />
      </div>
      <div>URL: {currentURL}</div>
      <div>ボタン</div>
    </div>
  )
}

export default IndexPopup
