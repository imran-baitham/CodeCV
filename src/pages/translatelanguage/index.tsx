/* eslint-disable react-hooks/rules-of-hooks */
import { showNotification } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { Button } from '../../components'
const axios = require('axios').default

function index() {
  const [options, setOptions] = useState<any[]>([])
  const [to, setTo] = useState<string>('en')
  const [from, setFrom] = useState<string>('en')
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')

  const translate = (e: any) => {
    if (input === '') {
      showNotification({
        title: `Welcome Guest 👏`,
        message: 'This website is on production, working on it',
        icon: '😍',
      })
    }
    const params = new URLSearchParams()
    params.append('q', input)
    params.append('source', from)
    params.append('target', to)
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx')

    axios
      .post('https://libretranslate.de/translate', params, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res: any) => {
        console.log(res.data)
        setOutput(res.data.translatedText)
      })
  }

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data)
        setOptions(res.data)
      })
  }, [])

  return (
    <div className="m-auto dark:bg-zinc-800 w-full">
      <div className="container_main py-20">
        <div className="py-2">
          <span>From ({from}) :</span>
          <select onChange={(e) => setFrom(e.target.value)}>
            {options.map((opt) => (
              <option key={opt.code} value={opt.code}>
                {opt.name}
              </option>
            ))}
          </select>
          <span className='pl-4'>To ({to}) :</span>
          <select onChange={(e) => setTo(e.target.value)}>
            {options.map((opt) => (
              <option key={opt.code} value={opt.code}>
                {opt.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <textarea
            className="w-full p-3"
            cols={50}
            rows={8}
            onInput={(e: any) => setInput(e.target.value)}
          />
          <textarea className="w-full p-3" cols={50} rows={8} value={output} />
        </div>
        <div className="py-5">
          <Button onClick={(e: any) => translate(e)}>Translate</Button>
        </div>
      </div>
    </div>
  )
}

export default index
