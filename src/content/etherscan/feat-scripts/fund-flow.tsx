import { createRoot } from 'react-dom/client'

import { FundFlowReference } from '../components'

const setBtn = (txHashEl: HTMLElement, chain: string, mainAddress: string) => {
  const btnRootEl = document.createElement('div')
  btnRootEl.style.display = 'inline-block'
  btnRootEl.classList.add('mt-2')
  btnRootEl.style.verticalAlign = 'bottom'
  txHashEl?.appendChild(btnRootEl)
  createRoot(btnRootEl).render(
    <FundFlowReference chain={chain} mainAddress={mainAddress} />
  )
}

/** fund flow */
const genFundFlow = async (chain: string) => {
  const mainAddress =
    document.querySelector<HTMLElement>('#mainaddress')?.innerText
  if (!mainAddress) return
  const txHashEl = document.querySelector<HTMLElement>(
    '#content > section.container-xxl'
  )
  if (txHashEl) {
    setBtn(txHashEl, chain, mainAddress)
  }
}

export default genFundFlow
