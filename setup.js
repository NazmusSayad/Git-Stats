import fs from 'fs'
import { execSync } from 'child_process'

const rawOrigin = execSync('git remote show -n')
const origin = rawOrigin.toString().trim()
const rawGitUrl = execSync(`git remote get-url --push ${origin}`)
const gitUrl = rawGitUrl.toString().trim()

const [username] = gitUrl
  .match(/(https:\/\/github.com\/)(\w+)/gim)[0]
  .match(/\w+$/)

const filePath = './.github/workflows/metrics.yml'

const fileData = fs.readFileSync(filePath, 'utf-8')
const newFileData = fileData.replace(/user: .+/, 'user: ' + username)

fs.writeFileSync(filePath, newFileData)
