import { execSync } from 'child_process'
import shellescape from 'shell-escape'

const TOKEN = process.env.ZENODO
const filename = process.argv[2]
const path = process.argv[3]

const run = (cmd: string): string | Buffer => {
  try {
    // sanitize user input before running to prevent arbitrary code execution
    cmd = shellescape(cmd.split(' '))
    // deepcode ignore IndirectCommandInjection: fixed in #36
    const output = execSync(cmd, { stdio: 'pipe' })
    return output
  } catch (error) {
    console.error(`Error executing shell script: ${error}`)
    throw error
  }
}

const out =
  run(`curl --request POST 'https://zenodo.org/api/deposit/depositions?access_token=${TOKEN}' \
--header 'Content-Type: application/json'  \
--data-raw '{}'
`)
const json = JSON.parse(out.toString())
const doi = json.metadata.prereserve_doi.doi
const file = json.links.bucket

console.log('DOI: ' + doi)
console.log('File: ' + file)

const res = run(
  `curl --upload-file ${path} --request PUT '${file}/${filename}?access_token=${TOKEN}'`
)
const resJSON = JSON.parse(res.toString())

console.log(resJSON)
