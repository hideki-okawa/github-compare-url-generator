import { useEffect, useState } from "react"
import { GoGitCompare as CompareIcon } from "react-icons/go"

import Button from "./button"
import Input from "./input"

type bodyProps = {
  repositoryURL: String | undefined
}

const Body = ({ repositoryURL }: bodyProps) => {
  const [compareURL, setCompareURL] = useState("")
  const [beforeCommitHash, setBeforeCommitHash] = useState("")
  const [afterCommitHash, setAfterCommitHash] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  // GitHubのハッシュが変更されたときにURLを更新する
  useEffect(() => {
    setCompareURL(
      `${repositoryURL}/compare/${beforeCommitHash}...${afterCommitHash}`
    )
  }, [repositoryURL, beforeCommitHash, afterCommitHash])

  const compareURLCopyToClipboard = () => {
    try {
      navigator.clipboard.writeText(compareURL)
      setSuccessMessage("Text copied to clipboard!!")
    } catch (err) {
      setErrorMessage(`error: ${err}`)
    }
  }

  const compareURLOpenToNewTab = () => {
    chrome.tabs.create({ url: compareURL })
    setSuccessMessage("Tab opened!!")
  }

  return (
    <main className="p-3 flex flex-col gap-2">
      <div className="flex h-10 gap-1">
        <Input onChange={setBeforeCommitHash} placeholder="fb4494e" />
        <div className="h-full flex items-center">
          <CompareIcon className="text-lg" />
        </div>
        <Input onChange={setAfterCommitHash} placeholder="701b762" />
      </div>
      <div>{compareURL}</div>
      <div className="flex gap-2">
        <Button title="Copy" onClick={compareURLCopyToClipboard} />
        <Button title="Open" onClick={compareURLOpenToNewTab} />
        <div className="flex items-center">
          <p className="text-green-600">{successMessage}</p>
          <p className="text-red-600">{errorMessage}</p>
        </div>
      </div>
    </main>
  )
}

export default Body
