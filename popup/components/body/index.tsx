import { useEffect, useState } from "react"
import { GoGitCompare as CompareIcon } from "react-icons/go"

import Button from "./button"
import Input from "./input"

type bodyProps = {
  repositoryURL: String | undefined
}

const Body = ({ repositoryURL }: bodyProps) => {
  const [compareURL, setCompareURL] = useState<String>("")
  const [beforeCommitHash, setBeforeCommitHash] = useState<String>("")
  const [afterCommitHash, setAfterCommitHash] = useState<String>("")

  // GitHubのハッシュが変更されたときにURLを更新する
  useEffect(() => {
    setCompareURL(
      `${repositoryURL}/compare/${beforeCommitHash}...${afterCommitHash}`
    )
  }, [beforeCommitHash, afterCommitHash])

  return (
    <main className="p-3 gap-2">
      <div className="flex h-10 gap-1">
        <Input onChange={setBeforeCommitHash} placeholder="fb4494e" />
        <div className="h-full flex items-center">
          <CompareIcon className="text-lg" />
        </div>
        <Input onChange={setAfterCommitHash} placeholder="701b762" />
      </div>
      <div>URL: {compareURL}</div>
      <div className="flex">
        <Button />
        <div>Open</div>
      </div>
    </main>
  )
}

export default Body
