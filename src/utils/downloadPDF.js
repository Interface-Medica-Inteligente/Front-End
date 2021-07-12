export const downloadPDF = (pdf) => {
  const linkSource = `data:application/pdf;base64,${pdf}`
  const downloadLink = document.createElement('a')
  const fileName = 'laudo.pdf'

  downloadLink.href = linkSource
  downloadLink.download = fileName
  downloadLink.click()
}
