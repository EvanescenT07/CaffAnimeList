"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
      const searchRef = useRef()
      const Route = useRouter()

      const searchHandler = (event) => {
            event.preventDefault()
            const CurrentValue = searchRef.current.value
            if (CurrentValue.trim() !== '') {
                  Route.push(`/search/${CurrentValue}`)
            } else if (!CurrentValue) {
                  return
            }
      }

      const pressKeyHandler = (event) => {
            if (event.key === 'Enter')
            searchHandler(event)
      }

      return (
            <div className="relative">
                  <input placeholder="Search Anime..." className="w-full p-2 rounded" ref={searchRef} onKeyDown={pressKeyHandler} />
                  <button className="absolute top-2 end-2" onClick={searchHandler}>
                        <MagnifyingGlass size={24} />
                  </button>
            </div>
      )
}

export default InputSearch