import { useEffect, useState } from "react"
import { GoGitCompare as CompareIcon } from "react-icons/go"

type bodyProps = {
  repositoryURL: String | undefined
}

const Body = ({ repositoryURL }: bodyProps) => {
  const [compareURL, setCompareURL] = useState<String>("")
  const [beforeCommitHash, setBeforeCommitHash] = useState<String>("")
  const [afterCommitHash, setAfterCommitHash] = useState<String>("")

  return (
    <div className="p-2">
      <div className="flex">
        <input
          onChange={(e) => {
            setBeforeCommitHash(e.target.value)
          }}
          placeholder="fb4494e"
        />
        <CompareIcon />
        <input
          onChange={(e) => {
            setAfterCommitHash(e.target.value)
          }}
          placeholder="701b762"
        />
      </div>
      <div>URL: {repositoryURL}</div>
      <div>ボタン</div>
    </div>
  )
}

export default Body
