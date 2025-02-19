import { SCAN_PAGES } from '@common/constants'
import { store } from '@src/store'
import { isSupportSimulator } from '@common/utils'

import {
  genEnhancedLabels,
  convertUTC2locale,
  genEnhancedSignatures,
  genDownloadSourceCodeBtn,
  genQuickViewSourceCodeBtn,
  displayTokenPrice,
  genExportTableDataBtn,
  genCopyIconBtn,
  scanTxnFortaAlert,
  genContractPrivateVariables,
  formatWriteContractParams,
  genTokenMarketplacesBtn,
  genProxyContractLog,
  genEvmStorageShortcut,
  genSimulateBtn,
  genContractVariableLogsBtn
} from '../feat-scripts'

const initTokenPageScript = async (chain: string) => {
  const {
    enhancedLabels,
    utc2locale,
    enhancedSignatures,
    contractSourcecode,
    dethCode,
    nftFloorPrice,
    exportTableData,
    showCopyIcon,
    txnFortaAlert,
    privateVariables,
    formatContractParams,
    tokenMarketplaces,
    proxyLogs,
    evmStorage,
    txSimulator,
    variableLogs
  } = await store.get('options')

  if (enhancedLabels) genEnhancedLabels(chain)
  if (utc2locale) convertUTC2locale(SCAN_PAGES.TOKEN.name)
  if (enhancedSignatures) genEnhancedSignatures(chain)
  if (contractSourcecode) genDownloadSourceCodeBtn(chain)
  if (dethCode) genQuickViewSourceCodeBtn(chain)
  if (nftFloorPrice) displayTokenPrice()
  if (exportTableData) genExportTableDataBtn(chain, SCAN_PAGES.TOKEN.name)
  if (showCopyIcon) genCopyIconBtn(SCAN_PAGES.TOKEN.name)
  if (txnFortaAlert) scanTxnFortaAlert(chain)
  if (privateVariables) genContractPrivateVariables(chain)
  if (formatContractParams) formatWriteContractParams()
  if (tokenMarketplaces) genTokenMarketplacesBtn(chain, SCAN_PAGES.TOKEN.name)
  if (proxyLogs) genProxyContractLog(chain)
  if (evmStorage) genEvmStorageShortcut(chain)
  if (txSimulator && isSupportSimulator(chain)) genSimulateBtn(chain)
  if (variableLogs) genContractVariableLogsBtn(chain)
}

export default initTokenPageScript
