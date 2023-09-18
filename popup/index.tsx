import { useEffect, useState } from "react"

import "./style.css"

import Body from "./components/body"
import Header from "./components/header"

function IndexPopup() {
  const [repositoryURL, setRepositoryURL] = useState<String | undefined>("")

  // ポップアップが開かれたときに、アクティブなタブのURLを取得する
  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const repositoryURL = parseGitHubRepositoryURL(tabs[0].url)
      setRepositoryURL(repositoryURL)
    })
  }, [])

  // URLからGitHubリポジトリのURLを抽出する
  const parseGitHubRepositoryURL = (url: String): string | undefined => {
    const regex = /https:\/\/github\.com\/[^/]+\/[^/]+/
    const match = url.match(regex)

    if (match && match.length > 0) {
      return match[0]
    } else {
      return undefined
    }
  }

  return (
    <div className="w-96">
      <Header />
      {repositoryURL ? (
        <Body repositoryURL={repositoryURL} />
      ) : (
        <main className="h-32 flex items-center justify-center">
          <p className="text-base">Please open GitHub repository page.</p>
        </main>
      )}
    </div>
  )
}

export default IndexPopup
