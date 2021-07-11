import * as React from 'react'
import { useSelector } from 'react-redux'
import recordSelector from '../selectors/recordSelector'

const useRecord = ({ setValue }) => {
  const record = useSelector(recordSelector.getRecord)

  React.useEffect(() => {
    const keys = Object.keys(record)
    keys.forEach((key) => {
      const item = record[key]
      if (item) {
        setValue(key, item)
      }
    })
  }, [record])
}

export default useRecord
