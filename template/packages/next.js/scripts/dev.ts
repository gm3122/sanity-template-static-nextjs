import { spawn } from 'child_process'
import open from 'open'
import path from 'path'

const cwd = path.join(__dirname, '..')

const yarn_next_dev = spawn('yarn next dev', {
  cwd,
  env: { ...process.env, FORCE_COLOR: true } as unknown as NodeJS.ProcessEnv,
  shell: true,
  stdio: [process.stdin, 'pipe', process.stderr],
})

let done = false
yarn_next_dev.stdout.on('data', (data: Buffer) => {
  process.stdout.write(data)

  if (!done) {
    const result = data.toString().match(/http:\/\/localhost:\d{1,5}/)
    const url = result && result[0]
    if (url) {
      open(url, {
        app: {
          name: open.apps.chrome,
        },
      })
      done = true
    }
  }
})
